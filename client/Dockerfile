FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install --silent

COPY . ./

CMD ["yarn", "run", "start"]