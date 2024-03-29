#!/bin/bash

sudo apt-get update -y           # Update apt-get cache
sudo apt-get install -y neofetch # Install curl

# Install Dependencies in client side
cd client            # Change Directory to client
yarn install --force # Install All Dependencies
yarn run build       # Build React

# Install Dependencies in server side
cd ../server         # Change Directory to server
yarn install --force # Install All Dependencies
yarn run build       # Build Server

# Setup Docker Containers
docker-compose up -d # Start Docker Containers in detached mode mention  in docker-compose.yml
