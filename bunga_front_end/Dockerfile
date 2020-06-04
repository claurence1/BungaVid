FROM node:alpine

WORKDIR /usr/src/app

RUN npm install

COPY package*.json ./

EXPOSE 8000

CMD [ "ng", "serve" ]