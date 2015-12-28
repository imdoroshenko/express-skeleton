#!/usr/bin/env sh

DIR=$(dirname $0)
cd $DIR/../

. $DIR/../local.env

NODE_CONFIG_DIR=$NODE_CONFIG_DIR NODE_ENV=$NODE_ENV node src/server.js
