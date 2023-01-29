python composer.py
echo "[composer] - finished"

git add .
git commit -m "Add posts"
git push origin master
echo "[git push] - finished"

cd lib
pnpm run build
pnpm run deploy
echo "[deploy] - finished"
