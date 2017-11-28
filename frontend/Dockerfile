FROM node:9.1.0-alpine

ARG APP_ROOT=/home/oic_gather/frontend
WORKDIR $APP_ROOT

RUN apk update && \
    apk add \
      build-base \
      curl-dev \
      libxml2-dev \
      libxslt-dev \
      linux-headers \
      tzdata

COPY . $APP_ROOT

RUN yarn \
    yarn add --force gulp-build
