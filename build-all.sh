#!/bin/bash
cd tailor && npm install && cd ..
cd catalog && npm install && npm run bundle && cd ..
cd navi && npm install && npm run bundle && cd ..
cd contact && npm install && npm run bundle && cd ..
cd cart && npm install && npm run bundle && cd ..
