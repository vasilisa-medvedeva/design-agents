#!/usr/bin/env bash
# Creates a project folder from starter-kit: artifacts from templates, fixtures, scripts, refs.
set -e
HERE="$(cd "$(dirname "$0")" && pwd)"
DEST="${1:?usage: new-project.sh <folder>}"
mkdir -p "$DEST"
cp "$HERE"/starter-kit/CLAUDE.md "$DEST"/
cp "$HERE"/starter-kit/templates/decisions.md "$HERE"/starter-kit/templates/project-state.md "$HERE"/starter-kit/templates/interaction-registry.md "$DEST"/
mkdir -p "$DEST"/starter-kit
cp -r "$HERE"/starter-kit/templates "$HERE"/starter-kit/scripts "$HERE"/starter-kit/fixtures "$DEST"/starter-kit/
cp -r "$HERE"/starter-kit/refs "$DEST"/
echo "done: $DEST"; ls "$DEST"
