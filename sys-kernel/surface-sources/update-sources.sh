#!/bin/bash

echo "Removing existing patches"
rm -rf files/*

echo "Cloning in Linux Surface Repo..."
mkdir linux-surface
cd linux-surface
git init
git remote add -f origin git@github.com:linux-surface/linux-surface.git
git config core.sparseCheckout true
echo "patches/" >> .git/info/sparse-checkout
git pull origin master

echo "Moving Patches..."
cd patches
rm -rf 5.2 5.3 5.4 5.5 5.6 5.7 5.8 5.9 5.10
mv * ../../files/

echo "Deleting cloned repo"
cd ../..
rm -rf linux-surface
echo "Done! Patches are updated!"
