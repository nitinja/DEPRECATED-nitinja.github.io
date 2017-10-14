#!/bin/bash

cd ./source-nitin.com
yarn build
cp -R ./dist/* ../
rm -rf ./dist