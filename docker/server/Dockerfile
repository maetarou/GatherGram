FROM ruby:alpine

ARG APP_ROOT=/home/GatherGram
WORKDIR $APP_ROOT

RUN apk update && \
    apk add \
      build-base \
      curl-dev \
      libxml2-dev \
      libxslt-dev \
      linux-headers \
      mysql-dev \
      nodejs \
      ruby-dev \
      tzdata \
      yaml \
      yaml-dev

COPY Gemfile ./Gemfile
COPY Gemfile.lock ./Gemfile.lock

RUN gem install bundler && \
    bundle install --path vendor/bundle
