#### Stage 1
FROM node:lts as base
LABEL author="pks9862728888"
WORKDIR /app
COPY . .
RUN npm installi
RUN npm run build

# Prod build if production-by-default hasn't been enabled (Angular 12+ default build is prod)
# RUN npm run build -- --prod

#### Stage 2
FROM nginx:alpine
COPY --from=base /app/dist/angular-container-demo-helm /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
