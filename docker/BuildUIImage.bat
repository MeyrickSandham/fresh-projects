@echo off
setlocal

cd ../fresh-projects-workspace

call npm run build || pause

cd ..

docker build -t freshprojectsui -f ./docker/dockerfile . || pause

pause