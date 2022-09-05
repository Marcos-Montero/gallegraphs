# Using alpine node base image reduces the image syze about 2x
FROM node:16.17-alpine3.15

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm ci

COPY . .

#run it
CMD [ "sh", "-c", "npm run start"]