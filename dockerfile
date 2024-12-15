# Dockerfile
FROM node:16

# Setting up a working directory
WORKDIR /app

# Copying package.json and package-lock.json to install dependencies
COPY package*.json ./

# Installing dependencies
RUN npm install

# Copy all files to the working directory
COPY . .

# Port exposure
EXPOSE 3000

# The command to start the application
CMD ["npm", "start"]
