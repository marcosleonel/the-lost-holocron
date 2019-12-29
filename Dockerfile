
FROM node:10

USER jedi

WORKDIR /api

COPY package.json ./

# Installing essential packages to compile some libs.
RUN apt-get update && apt-get install -y build-essential

# Installing the package to make http request via curl.
RUN apt-get update && apt-get install -y apt-transport-https ca-certificates

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -

RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update && apt-get install -y yarn

RUN yarn install --network-concurrency 1

COPY . .

EXPOSE 3030
