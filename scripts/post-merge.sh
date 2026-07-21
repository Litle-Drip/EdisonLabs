#!/bin/bash
set -e

# Static HTML site — no build step needed.
# Install mockup sandbox dependencies if present.
if [ -f "artifacts/mockup-sandbox/package.json" ]; then
  cd artifacts/mockup-sandbox && npm install --prefer-offline 2>/dev/null || npm install
  cd -
fi

echo "Post-merge setup complete."
