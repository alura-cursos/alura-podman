FROM node:latest
MAINTAINER Leonardo Sartorello
COPY . /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT npm start server.js
EXPOSE 3000
