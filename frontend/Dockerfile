#stage 1
FROM node:16 as node
WORKDIR /frontend
COPY . .
#stage 1
RUN npm install
RUN npm run build --prod

#stage 2
FROM nginx:alpine
COPY --from=node /frontend/dist/frontend /usr/share/nginx/html