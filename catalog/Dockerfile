FROM node:10-stretch-slim 

LABEL maintainer=martin@effectivetrainings.de
LABEL app=catalog

ADD dist /dist
ADD src /src
ENV PORT=9093
ENTRYPOINT ["node","/src/server.js"]

