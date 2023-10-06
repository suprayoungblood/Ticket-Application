# Use the official Node.js image as a base image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Install wait-for-it
ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

# Copy the rest of the application to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3500

# Define the command to run the app
CMD ["/wait-for-it.sh", "ticket-mysql:3306", "--", "npm", "start"]
