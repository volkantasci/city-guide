FROM node:lts as build-stage
WORKDIR /app
RUN export NODE_OPTIONS=--openssl-legacy-provider
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
