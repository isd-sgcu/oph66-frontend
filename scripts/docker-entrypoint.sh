#!/bin/sh

set -e

cd /app

npm run build

node /app/dist/server/entry.mjs
