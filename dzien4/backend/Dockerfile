FROM node:16-alpine

WORKDIR /usr/src/app

COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn --frozen-lockfile

COPY . .

RUN yarn prisma generate

CMD yarn start
