FROM node:12.19-alpine

WORKDIR '/app'

RUN apk add g++ make python
COPY package.json ./
RUN npm install
RUN apk add chromium

COPY ./ ./

CMD ["npm","run","test"]