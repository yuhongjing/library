#!/usr/bin/env sh
set -e

npm run build

git add .
git commit -m "add new notebook"
git push origin dev

cp CNAME docs/.vuepress/dist
cd docs/.vuepress/dist

git init
git add .
git commit -m "deploy"

git push -f git@github.com:yuhongjing/library.git master

cd -