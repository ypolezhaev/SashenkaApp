FROM node:24.4.1-alpine as build

WORKDIR /app

RUN corepack enable

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn run build

FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]