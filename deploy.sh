#!/usr/bin/env sh
set -e

npm run build

git add .
git commit -m "add new notebook"
git push origin dev

cd docs/.vuepress/dist

git init
git add -A
git commit -m "deploy"

git push -f git@github.com:yuhongjing/library.git master

cd -