FROM keymetrics/pm2:latest-alpine

ENV NPM_CONFIG_LOGLEVEL warn
RUN apk --no-cache add g++ gcc libgcc libstdc++ linux-headers make python
RUN npm i -g node-gyp 
RUN npm i -g yarn   
RUN npm i -g cross-env
RUN npm i -g mocha
RUN npm i -g knex
RUN npm i -g link-module-alias 

ARG APP_PATH="/opt/app-chassis"
RUN mkdir -p ${APP_PATH}
WORKDIR ${APP_PATH}
COPY . .
RUN yarn
EXPOSE 32001

ENTRYPOINT [ "pm2-runtime", "start", "--raw", "pm2.json" ]