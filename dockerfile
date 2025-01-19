FROM node:lts-alpine
EXPOSE 4201
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm i -g @angular/cli
RUN npm i

CMD ["ng", "serve", "--host", "0.0.0.0"]