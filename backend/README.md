<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Portfolio Backend

The backend API service for the portfolio project, built with NestJS and deployed on an Azure VPS.

## Overview

This NestJS application provides a robust API and websocket server for the portfolio system. It handles data storage, user authentication, file uploads, and real-time communication between users and administrators.

## Features

- RESTful API endpoints for content management
- WebSocket server for real-time chat functionality
- File upload capabilities with local storage
- JWT-based authentication and authorization
- Database integration with Prisma ORM
- AI chatbot integration and management

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository and navigate to the backend directory
   ```bash
   cd backend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file with required environment variables
   ```
   DATABASE_URL=postgresql://username:password@localhost:5432/portfolio
   JWT_SECRET=your_secret_key
   STORAGE_PATH=./uploads
   PORT=3000
   ```

4. Run database migrations
   ```bash
   npx prisma migrate dev
   ```

5. Start the development server
   ```bash
   npm run start:dev
   ```

### API Documentation

When the server is running, API documentation is available at:
- Swagger UI: [http://localhost:3000/api](http://localhost:3000/api)
- OpenAPI JSON: [http://localhost:3000/api-json](http://localhost:3000/api-json)

## Project Structure

```
/
├── src/
│   ├── app.module.ts            # Main application module
│   ├── main.ts                  # Application entry point
│   ├── modules/                 # Feature modules
│   │   ├── auth/                # Authentication module
│   │   ├── chat/                # Chat and websocket module
│   │   ├── projects/            # Projects management module
│   │   ├── uploads/             # File upload module
│   │   └── ...
│   ├── middleware/              # Custom middleware
│   ├── common/                  # Shared utilities and decorators
│   └── config/                  # Configuration files
├── prisma/                      # Database schema and migrations
└── test/                        # Test files
```

## Deployment

The backend is deployed on an Azure Virtual Private Server with the following setup:
- Ubuntu 20.04 LTS
- Nginx as reverse proxy
- PM2 for process management
- Let's Encrypt SSL certificates
- Automated deployment via GitHub Actions

## Additional Documentation

For more detailed information about the entire project, refer to the main README in the root directory.
