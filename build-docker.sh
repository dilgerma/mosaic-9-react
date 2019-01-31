#!/bin/bash
cd skipper && npm run docker-build && cd ..
cd tailor && npm run docker-build && cd ..
cd catalog && npm run docker-build && cd ..
cd navi && npm run docker-build && cd ..
cd contact && npm run docker-build && cd ..
cd cart && npm run docker-build && cd ..
