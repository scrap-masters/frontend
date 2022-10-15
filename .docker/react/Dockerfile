FROM node:18.11.0 as build
WORKDIR /src
RUN npm install -g pnpm
ADD . .
RUN pnpm install
COPY . .
RUN pnpm build

FROM nginx:1.21.0-alpine
COPY --from=build /src/dist /usr/share/nginx/html
COPY .docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
