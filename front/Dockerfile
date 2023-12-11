# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /demo

# Copy package.json and package-lock.json to the container
COPY demo/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the port that your React app runs on
EXPOSE 3000

# Specify the command to run your React app
CMD ["npm", "start"]