#!/usr/bin/env bash 

#TODO: write script that pulls all changes from flatList branch and pushes them into master 

DATE=$(date)

git add .

git commit -m "changes made on $DATE"

git push

osascript -e "display notification 'pushed code'"