#!/bin/bash

DEV_DIR=$(cd "$(dirname "$0")" || exit 1;  pwd -P)

if [ -d "$(command -v mongod)" ]; then
  echo "Please install MongoDB mongod to run the mongo database locally"
  exit 1
fi

APP_PATH=$(realpath "$DEV_DIR/../app")

if ! cd $APP_PATH; then
  echo "Cannot change directory to $APP_PATH"; exit 1;
fi

cd $APP_PATH && 
sudo systemctl start mongod &&
npm run dev