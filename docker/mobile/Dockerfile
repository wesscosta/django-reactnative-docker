FROM node:22

WORKDIR /app

COPY ./mobile/package.json ./mobile/package-lock.json* ./mobile/yarn.lock* ./

RUN npm install

COPY ./mobile .

EXPOSE 19000 19001 19002

CMD ["npx", "expo", "start", "--tunnel"]
