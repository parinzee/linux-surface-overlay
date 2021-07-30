#!/bin/bash

echo "Cloning in Linux Surface Repo..."
mkdir linux-surface
cd linux-surface
git init
git remote add -f origin git@github.com:linux-surface/linux-surface.git
git config core.sparseCheckout true
echo "patches/" >> .git/info/sparse-checkout
git pull origin master

echo "Moving Patches..."
mv patches/* ../files/

echo "Deleting cloned repo"
cd ..
rm -rf linux-surface
echo "Done! Patches are updated!"
