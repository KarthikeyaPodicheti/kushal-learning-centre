#!/usr/bin/env bash
set -euo pipefail

cd "$(git rev-parse --show-toplevel)"

if [ ! -d src ]; then
  echo "src/ not found"
  exit 1
fi

if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "Commit your changes before deploying."
  exit 1
fi

TMP_BRANCH="gh-pages-deploy"

git branch -D "$TMP_BRANCH" 2>/dev/null || true
git subtree split --prefix=src -b "$TMP_BRANCH"
git push origin "$TMP_BRANCH:gh-pages" --force
git branch -D "$TMP_BRANCH"

echo "Published src/ to gh-pages."
