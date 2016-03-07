#!/usr/bin/env bash

npm install --registry=https://registry.npm.taobao.org
./node_modules/less/bin/lessc static/less/rabbitstrap.less -x > static/css/rabbitstrap.css
