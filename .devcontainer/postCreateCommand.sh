#!/bin/bash

sudo apt-get update -y           # Update apt-get cache
sudo apt-get install -y neofetch # Install curl

# install Node.js and npm
curl -sL https://deb.nodesource.com/setup_22.x | sudo -E bash
sudo apt-get install -y nodejs # Install Node.js and npm

# Install Dependencies for frontend
cd frontend && npm i --force && npm run build && cd ../

# Install Dependencies for backend
cd backend && npm i --force && npm run build && cd ../

# Install Dependencies for app
cd application && npm i --force