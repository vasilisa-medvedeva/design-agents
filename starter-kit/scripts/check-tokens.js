#!/usr/bin/env node
// Compares Figma Variables with src/styles/tokens.css.
// Input: figma-variables.json — an export from Figma MCP get_variable_defs, saved by the QA agent.
// Run: node starter-kit/scripts/check-tokens.js figma-variables.json src/styles/tokens.css
const fs = require('fs');
const [,, figmaPath = 'figma-variables.json', cssPath = 'src/styles/tokens.css'] = process.argv;

const norm = v => String(v).trim().toLowerCase().replace(/\s+/g, '');
const toCss = name => '--' + name.replace(/\//g, '-').replace(/\s+/g, '-').toLowerCase();

// figma: { "color/bg/primary": { light: "#FFFFFF", dark: "#0A0A0A" } } or { "space/4": "16px" }
const figma = JSON.parse(fs.readFileSync(figmaPath, 'utf8'));
const css = fs.readFileSync(cssPath, 'utf8');

// tokens.css: :root { --x: v } and [data-theme="dark"] { --x: v } (or .dark)
function parseBlock(selectorRe) {
  const m = css.match(selectorRe); const out = {};
  if (!m) return out;
  for (const [, k, v] of m[1].matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) out[k] = norm(v);
  return out;
}
const light = parseBlock(/:root\s*{([^}]*)}/);
const dark = parseBlock(/(?:\[data-theme="dark"\]|\.dark)\s*{([^}]*)}/);

let issues = 0;
const seen = new Set();
for (const [name, val] of Object.entries(figma)) {
  const key = toCss(name); seen.add(key);
  const modes = typeof val === 'object' ? val : { light: val };
  for (const [mode, fv] of Object.entries(modes)) {
    const cssMap = mode === 'dark' ? dark : light;
    if (!(key in cssMap)) { issues++; console.log(`MISSING in css  ${key} (${mode})`); continue; }
    if (cssMap[key] !== norm(fv)) { issues++; console.log(`DIFF  ${key} (${mode})  figma=${fv}  css=${cssMap[key]}`); }
  }
}
for (const key of Object.keys(light)) if (!seen.has(key)) console.log(`EXTRA in css  ${key} (not in Figma)`);
console.log(issues ? `\n${issues} token issue(s)` : 'ok: tokens match');
process.exit(issues ? 1 : 0);
