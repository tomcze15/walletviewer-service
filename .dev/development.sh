#!/bin/bash

DEV_DIR=$(cd "$(dirname "$0")" || exit 1;  pwd -P)

if ! command -v mongod > /dev/null; then
  echo "Please install MongoDB mongod to run the mongo database locally"
  exit 1
fi

sudo systemctl start mongod
