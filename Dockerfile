# Use the official Node.js 18 image as a base
FROM node:20

# Install dependencies required to build bcrypt
RUN apt-get update && apt-get install -y python3 g++ make

# Set the working directory inside the container
WORKDIR usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install -build-from-source

# Copy the rest of the application code to the container
COPY . .

# Expose the port the app will run on
EXPOSE 3002

# Define the command to run the app
CMD ["npm", "start"]