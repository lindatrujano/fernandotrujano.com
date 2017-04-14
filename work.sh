#!/bin/bash

git pull

start ./build/index.html
subl.exe ./src
grunt
