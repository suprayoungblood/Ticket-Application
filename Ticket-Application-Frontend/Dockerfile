# Use the official Node.js image as a base image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 5173

# Define the command to run the app
CMD ["npm", "run", "dev"]
