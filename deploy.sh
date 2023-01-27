git add .
git commit -m "Add posts"
git push origin master

cd lib
pnpm run build
pnpm run deploy
