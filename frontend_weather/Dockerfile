FROM node:16
WORKDIR /frontend_weather
COPY package*.json ./
RUN npm install
COPY . /frontend_weather
CMD ["npm", "start"]
