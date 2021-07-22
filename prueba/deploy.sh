#!/usr/bin/env sh

set -e

npm run build

cd dist

git init

git add -A

git commit -m 'New Deployment'

git push -f git@github.com:PatsyGuerrero/The-Gathering-API.git master:gh-pages

cd -





