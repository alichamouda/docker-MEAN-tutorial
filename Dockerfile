### STAGE 1: Build ###
FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY feedback-app/package.json feedback-app/package-lock.json ./
RUN npm install
COPY ./feedback-app .
RUN npm run build --prod

### STAGE 2: Run ###
FROM hoosin/alpine-nginx-nodejs:latest
WORKDIR /usr/src/app
COPY feedback-backend/package.json feedback-backend/package-lock.json ./
RUN npm install
COPY /feedback-backend .
COPY feedback-app/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/feedback-app /usr/share/nginx/html
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;' & node index.js"]
