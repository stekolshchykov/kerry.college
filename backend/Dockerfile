FROM node:18

ENV TZ=Europe/Dublin
RUN apt-get update && apt-get install -y tzdata
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

WORKDIR /app

COPY package.json .

COPY yarn.lock .

RUN yarn install

RUN yarn add sharp --ignore-engines

COPY . .

#RUN rm -f .env && mv .env.prod .env

RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]
