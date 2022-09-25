from node:16-alpine

WORKDIR /app

COPY . .

expose 8080

run npm install 

cmd ["npm", "start"]


