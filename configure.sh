#!/usr/bin/env bash

# use correct Node version
source ~/.nvm/nvm.sh

# Use Node.JS LTS (v20.15.*)
nvm install 20.15.1
nvm use --silent 20.15.1

# install Node packages
npm prune
npm install
