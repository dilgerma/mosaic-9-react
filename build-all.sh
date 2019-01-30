#!/bin/bash
cd skipper && sh build.sh && cd ..
cd tailor && npm install && sh build.sh && cd ..
cd catalog && npm install && sh build.sh && cd ..
cd navi && npm install && sh build.sh && cd ..
cd contact && npm install && sh build.sh && cd ..
cd cart && npm install && sh build.sh && cd ..
