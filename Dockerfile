### STAGE 1: Build ###
FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY ./feedback_backend/package.json ./feedback_backend/package-lock.json ./
RUN npm install
COPY /feedback_backend/. .
CMD ["node", "index.js"]
