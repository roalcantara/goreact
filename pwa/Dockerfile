FROM node:lts-alpine AS build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app

FROM gcr.io/distroless/nodejs:18 AS prod
COPY --from=build /app /app
WORKDIR /app
EXPOSE 3000
ENV NODE_PATH=./dist
RUN npm run build
ENTRYPOINT node

FROM node:lts-alpine AS dev
COPY --from=build /app /app
WORKDIR /app
EXPOSE 3000
ENV NODE_PATH=./app
CMD npm start
