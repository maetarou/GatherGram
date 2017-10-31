FROM ruby:2.4.2-alpine3.6

ARG APP_ROOT=/home/oic_gather
WORKDIR $APP_ROOT

RUN apk update \
    apk add node.js

COPY Gemfile $APP_ROOT
RUN gem install bundler && \
    bundle install --path vendor/bundle

COPY . $APP_ROOT
CMD bundle exec puma

