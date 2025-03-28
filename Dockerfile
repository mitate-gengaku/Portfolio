FROM node:22.14.0-bullseye

USER root

RUN npm i -g npm@latest vercel@latest npm-check-updates
RUN apt-get update && apt-get -y install vim git

COPY ./src /home/node/gengaku
RUN chown -R node:node /home/node/gengaku

USER node
WORKDIR /home/node/gengaku