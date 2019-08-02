#!/usr/bin/env sh
set -e

npm run build

git add -u
git commit -m "add new notebook"
git push origin git@github.com:yuhongjing/library.git dev

cd docs/.vuepress/dist

git init
git add -A
git commit -m "deploy"

git push -f git@github.com:yuhongjing/library.git master

cd -