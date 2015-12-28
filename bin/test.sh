#!/usr/bin/env sh

DIR=$(dirname $0)
cd $DIR/../

. $DIR/../local.env

NODE_CONFIG_DIR=$NODE_CONFIG_DIR NODE_ENV=$NODE_ENV istanbul cover $DIR/../node_modules/.bin/_mocha -- -R spec --recursive
