FROM node:18-alpine as build

WORKDIR /frontend
COPY src/ src
COPY public/ public
COPY package.json package-lock.json ./
RUN npm install
RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /frontend/build /usr/share/nginx/html
EXPOSE 80
