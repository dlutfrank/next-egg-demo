FROM node:10-jessie
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm run init-prod
COPY . .
RUN npm run build
EXPOSE 5000
CMD ["npm", "run", "start-docker"]