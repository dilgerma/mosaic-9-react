#!/bin/bash
npm run build
docker build  -t mosaic9/catalog .
