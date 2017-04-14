#!/bin/bash

git add .
git commit -m"Site updates"
git push

grunt deploy
