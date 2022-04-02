# !/usr/bin/env sh
# abort on errors
# set -e
# build
node run build
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:olafruv/VUE-DeliCake-LaunchX.git master:gh-pages
cd -