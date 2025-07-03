# Portfolio Frontend

The frontend application for the portfolio project, built with Next.js and deployed on Vercel.

## Overview

This Next.js application serves as the public-facing website and admin interface for the portfolio system. It features server-side rendering, dynamic content loading, and real-time communication capabilities.

## Features

- Dynamic content management through admin interface
- Responsive design for all device sizes
- Markdown rendering for project documentation
- Real-time chat functionality
- Authentication and authorization for admin access
- SEO optimization and server-side rendering

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository and navigate to the frontend directory
   ```bash
   cd frontend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env.local` file with required environment variables
   ```
   NEXT_PUBLIC_API_URL=http://localhost:3000
   NEXT_PUBLIC_SOCKET_URL=ws://localhost:3000
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build and Deployment

### Local Build

```bash
npm run build
npm start
```

### Vercel Deployment

The application is configured for automatic deployment through Vercel integration with GitHub. Push to the main branch to trigger a production deployment.

## Project Structure

```
/
├── app/                  # Next.js app router
├── components/           # Reusable React components
├── lib/                  # Utility functions and API clients
├── public/               # Static assets
├── styles/               # Global styles and themes
└── types/                # TypeScript type definitions
```

## Additional Documentation

For more detailed information about the entire project, refer to the main README in the root directory.
