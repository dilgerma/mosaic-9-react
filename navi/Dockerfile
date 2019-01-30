FROM node:10-stretch-slim 

LABEL maintainer=martin@effectivetrainings.de
LABEL app=navi

ADD src /src
ADD build/bundle.js /build/bundle.js
ENV PORT=9092
ENTRYPOINT ["node", "/src/server.js"]

