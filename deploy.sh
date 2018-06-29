#!/bin/bash

#one time: npm install react-static -g

cd ./source
yarn build
cp -R ./dist/* ../
rm -rf ./dist
cd ..
git add -A
git commit -m "updated site"
git push origin master
