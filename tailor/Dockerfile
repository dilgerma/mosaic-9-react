FROM node:10-stretch-slim 

LABEL maintainer=martin@effectivetrainings.de
LABEL app=tailor

ADD . /tailor
WORKDIR /tailor
RUN npm install
ENV PORT=9090
ENTRYPOINT ["node", "src/server.js"]

