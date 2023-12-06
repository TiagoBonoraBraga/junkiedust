#!/bin/bash
git fetch --all
git pull origin main
npm install
npm run build 
pm2 delete "junkiedust"
pm2 start yarn --name "junkiedust" --interpreter bash -- start:prod
