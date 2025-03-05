FROM node:20.17.0-bullseye

USER root

RUN npm i -g npm@latest vercel@latest npm-check-updates
RUN apt-get update && apt-get -y install vim git

COPY ./src /home/node/portfolio
RUN chown -R node:node /home/node/portfolio

USER node
WORKDIR /home/node/portfolio