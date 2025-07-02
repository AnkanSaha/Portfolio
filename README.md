# Portfolio Project

A full-stack portfolio application built as a monorepo containing three main components: a Next.js frontend, a NestJS backend, and an Expo mobile admin application.

## Project Overview

This portfolio project is a comprehensive showcase of full-stack development capabilities, featuring a modern web application with dynamic content management. The system is designed as a monorepo housing three distinct applications:

1. **Frontend (Next.js)**: A responsive, server-side rendered website hosted on Vercel (ankanweb.site)
2. **Backend (NestJS)**: A robust API service with Prisma ORM and local file storage deployed on Azure VPS (api.ankanweb.site)
3. **Mobile Admin (Expo)**: A native mobile application for real-time content control and system management

The project demonstrates advanced concepts including real-time communication, dynamic content management, AI integration, and multi-platform deployment strategies.

## Key Features

- **Dynamic Content Management**: Admin panel built into the frontend for controlling:
  - Navigation bar tabs
  - Hero section text and images
  - Project listings with detailed markdown documentation
  - Download and source code links
  - Media gallery with image management
  
- **Intelligent Chat System**: Dual-mode chat functionality:
  - Manual mode for direct communication with visitors
  - AI-powered chatbot mode for automated responses
  
- **Admin Controls**:
  - Web-based admin dashboard for content management
  - Mobile app for real-time content and chat control
  - Role-based authentication and authorization
  
- **Responsive Design**:
  - Mobile-first approach ensuring compatibility across devices
  - Optimized layout for varying screen sizes and orientations
  
- **Modern Infrastructure**:
  - CI/CD pipelines via GitHub Actions
  - Cloud hosting with Vercel and Azure
  - DNS and domain management through Cloudflare

## Chatbot Switching Logic

The portfolio implements an innovative approach to visitor interaction through a dynamic chat system:

1. **Mode Detection**:
   - System checks the current chat mode setting stored in the database
   - Mode toggles between "Manual" and "AI" states

2. **Manual Mode**:
   - When activated, chat messages from visitors are routed to the admin interfaces
   - Admin receives real-time notifications via the web dashboard or mobile app
   - Responses from the admin are immediately sent back to the visitor
   - Chat history is preserved for context continuity

3. **AI Mode**:
   - When manual mode is disabled, an AI chatbot automatically processes visitor messages
   - NLP algorithms interpret user intent and generate appropriate responses
   - Bot can provide information about projects, skills, and contact information
   - Fallback mechanisms ensure graceful handling of queries outside the bot's knowledge domain

4. **Transition Handling**:
   - Seamless handoff between AI and manual modes
   - Context preservation when switching between modes
   - Notifications to visitors when chat mode changes

## Tech Stack

### Frontend
- **Framework**: Next.js (React)
- **State Management**: Redux/Context API
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Additional Libraries**:
  - React Query for data fetching
  - Socket.io client for real-time communication
  - Markdown rendering for project documentation

### Backend
- **Framework**: NestJS
- **Database ORM**: Prisma
- **Database**: PostgreSQL
- **Authentication**: JWT
- **Storage**: Local file system with backup to cloud storage
- **Deployment**: Azure VPS
- **Additional Features**:
  - Socket.io server for websocket connections
  - File upload handling and optimization
  - Rate limiting and security middleware

### Mobile Admin
- **Framework**: React Native with Expo
- **State Management**: Redux/Context API
- **UI Components**: Native Base or similar
- **Additional Features**:
  - Push notifications
  - Offline capability with synchronization
  - Secure authentication

### DevOps & Infrastructure
- **CI/CD**: GitHub Actions
- **DNS & CDN**: Cloudflare
- **Monitoring**: Application Insights or similar
- **Version Control**: Git with GitHub

## Folder Structure

```
/
├── frontend/                  # Next.js web application
│   ├── app/                   # Next.js app directory
│   ├── components/            # React components
│   ├── lib/                   # Utility functions and helpers
│   ├── public/                # Static assets
│   └── ...
│
├── backend/                   # NestJS API server
│   ├── src/
│   │   ├── modules/           # Feature modules
│   │   ├── middleware/        # Custom middleware
│   │   ├── config/            # Configuration files
│   │   └── ...
│   ├── prisma/                # Database schema and migrations
│   └── ...
│
├── mobile/                    # Expo React Native mobile app
│   ├── src/
│   │   ├── screens/           # Mobile app screens
│   │   ├── components/        # Reusable components
│   │   ├── navigation/        # Navigation configuration
│   │   └── ...
│   ├── assets/                # App assets
│   └── ...
│
└── shared/                    # Shared code and types
    ├── types/                 # TypeScript definitions
    ├── constants/             # Shared constants
    └── utils/                 # Common utilities
```

## Setup & Installation

### Prerequisites
- Node.js (>= 16.x)
- npm or yarn
- PostgreSQL database
- Expo CLI (for mobile development)

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd backend
npm install
npx prisma migrate dev
npm run start:dev
```

### Mobile Setup
```bash
cd mobile
npm install
expo start
```

## Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=https://api.ankanweb.site
NEXT_PUBLIC_SOCKET_URL=wss://api.ankanweb.site
NEXT_PUBLIC_SITE_URL=https://ankanweb.site
```

### Backend (.env)
```
DATABASE_URL=postgresql://username:password@localhost:5432/portfolio
JWT_SECRET=your_jwt_secret_key
STORAGE_PATH=./uploads
CORS_ORIGIN=https://ankanweb.site
PORT=3000
```

### Mobile (.env)
```
API_URL=https://api.ankanweb.site
SOCKET_URL=wss://api.ankanweb.site
```

## Deployment Information

### Frontend Deployment
- **Platform**: Vercel
- **Domain**: ankanweb.site
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Environment**: Production

### Backend Deployment
- **Platform**: Azure Virtual Private Server
- **Domain**: api.ankanweb.site
- **Deployment Method**: GitHub Actions → SSH → PM2
- **Process Manager**: PM2
- **SSL**: Let's Encrypt via Certbot

### Mobile Deployment
- **Platform**: Expo EAS Build
- **Distribution**: Internal distribution for admin use only
- **Build Profile**: Production

### DNS Configuration
All domains are managed through Cloudflare for DNS resolution, SSL, and CDN services.

## Roadmap

- [ ] **Q4 2023**:
  - Enhance AI chatbot capabilities
  - Implement advanced analytics dashboard
  - Add internationalization support

- [ ] **Q1 2024**:
  - Develop integration with popular CMS platforms
  - Create public API for portfolio data
  - Implement automated backup system

- [ ] **Q2 2024**:
  - Add theme customization options
  - Develop plugin architecture for extensibility
  - Create comprehensive documentation site

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

© 2023 Ankan. All rights reserved.