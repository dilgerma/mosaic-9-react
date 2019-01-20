
#!/bin/bash
yarn build
PORT=9093 nodemon src/server.js
