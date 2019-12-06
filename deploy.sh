#!/usr/bin/env sh
set -e

npm run build

node workCount.js

git add .
git commit -m "add new notebook"
git push origin dev

cd docs/.vuepress/dist

git init
git config user.name yuhongjing
git config user.email 1240945408@qq.com
git add .
git commit -m "deploy"

git push -f git@github.com:yuhongjing/library.git master

cd -