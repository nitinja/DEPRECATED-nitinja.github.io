#!/bin/bash

cd ./source-nitin.com
yarn build
cp -R ./dist/* ../
rm -rf ./dist
cd ..
git add -A
git commit -m "updated site"
git push origin/master
