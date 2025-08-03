# Portfolio Backend

A minimalist Fastify backend built with TypeScript for the portfolio project.

## Features

- 🚀 Fast and lightweight Fastify server
- 📝 TypeScript support
- 🌐 CORS configuration
- 🏥 Health check endpoint
- 📦 Build output in `dist` folder

## Scripts

```bash
# Install dependencies
npm install

# Development mode (with hot reload)
npm run dev

# Build the project
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Clean build directory
npm run clean
```

## Endpoints

- `GET /` - Hello World endpoint
- `GET /health` - Health check endpoint

## Environment Variables

- `PORT` - Server port (default: 3001)
- `HOST` - Server host (default: 0.0.0.0)

## Development

Start the development server:

```bash
npm run dev
```

The server will start on `http://localhost:3001` with hot reload enabled.

## Production

Build and start the production server:

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── index.ts          # Main application entry point
```

The compiled JavaScript files will be output to the `dist/` folder.
