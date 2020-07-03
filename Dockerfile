# What image do you want to start building on?
FROM node:12-alpine

# Make a folder in your image where your app's source code can live
RUN mkdir -p /src/app

# Tell your container where your app's source code will live
WORKDIR /src/app

# Copy the file from your host to your current location.
COPY . /src/app

# Run the command inside your image filesystem.
COPY package.json ./
# COPY package-lock.json ./
RUN npm install && npm run build

# Inform Docker that the container is listening on the specified port at runtime.
EXPOSE 3000

# Run the specified command within the container.
CMD [ "npm", "start"]
