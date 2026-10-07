#!/usr/bin/env bash
# Installs agents and skills globally (~/.claude); starter-kit stays in this folder.
set -e
HERE="$(cd "$(dirname "$0")" && pwd)"
mkdir -p ~/.claude/agents ~/.claude/skills
cp "$HERE"/agents/*.md ~/.claude/agents/
for s in "$HERE"/skills/*/; do
  name=$(basename "$s"); mkdir -p ~/.claude/skills/"$name"; cp -r "$s"/. ~/.claude/skills/"$name"/
done
echo "agents:"; ls ~/.claude/agents
echo "skills:"; ls ~/.claude/skills
echo
echo "New project:  $HERE/new-project.sh <folder>"
