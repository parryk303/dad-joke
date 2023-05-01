#!/bin/bash

# put current date as yyyy-mm-dd in $date
date=$(date '+%Y-%m-%d')
message="Daily Joke for ${date}"

cd /Users/kyle/Desktop/Personal/dad-joke

git add .
git commit -m "${message}"
git push origin main
say 'Hey Kyle I am updating jokes'