#!/usr/bin/env node
// Fails if src/ contains a hardcoded color, size or radius instead of a token.
// Run: node starter-kit/scripts/lint-tokens.js [srcDir]
const fs = require('fs');
const path = require('path');

const srcDir = process.argv[2] || 'src';
const ignore = [/tokens\.css$/, /node_modules/, /\.d\.ts$/, /fixtures/];
const rules = [
  { name: 'hex color', re: /#[0-9a-fA-F]{3,8}\b/g },
  { name: 'rgb/hsl color', re: /\b(rgba?|hsla?)\(/g },
  { name: 'arbitrary tailwind value', re: /\[(#|\d+px|\d+rem|\d+%)[^\]]*\]/g },
  { name: 'raw px size', re: /(?<![\w-])(\d{2,3})px\b/g },
];

let issues = 0;
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (ignore.some(r => r.test(p))) continue;
    if (entry.isDirectory()) walk(p);
    else if (/\.(tsx?|jsx?|css)$/.test(p)) check(p);
  }
}
function check(file) {
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  lines.forEach((line, i) => {
    if (/lint-tokens-ignore/.test(line)) return;
    for (const rule of rules) {
      const m = line.match(rule.re);
      if (m) { issues++; console.log(`${file}:${i + 1}  [${rule.name}]  ${m[0]}  →  ${line.trim().slice(0, 80)}`); }
    }
  });
}
if (!fs.existsSync(srcDir)) { console.error(`no ${srcDir}`); process.exit(2); }
walk(srcDir);
console.log(issues ? `\n${issues} hardcoded value(s) — use tokens` : 'ok: no hardcoded values');
process.exit(issues ? 1 : 0);
