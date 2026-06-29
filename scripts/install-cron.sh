#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CRON_CMD="cd $REPO_DIR && npm run discover && git add registry templates ui design-md prompts collectors && git commit -m 'chore: daily frontend template discovery' || true && git push origin main || true"
CRON_LINE="0 0 * * * $CRON_CMD"

( crontab -l 2>/dev/null | grep -v "daily frontend template discovery" || true; echo "$CRON_LINE # daily frontend template discovery" ) | crontab -

echo "Installed daily cron at 12:00 AM server local time. For India time, set server timezone to Asia/Kolkata."
