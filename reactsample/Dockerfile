# Dockerfile
FROM node:14

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose port and start the application
EXPOSE 3000
CMD ["npm", "start"]