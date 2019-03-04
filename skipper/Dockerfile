FROM registry.opensource.zalan.do/pathfinder/skipper:latest

LABEL maintainer=martin@effectivetrainings.de
LABEL app=skipper

ADD . /skipper
WORKDIR /skipper
ENTRYPOINT ["skipper", "-address",":80", "-metrics-flavour=prometheus", "-routes-file", "/skipper/routes-docker.eskip"]

