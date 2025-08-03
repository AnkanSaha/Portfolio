# Portfolio Website

A comprehensive full-stack portfolio website built as a monorepo containing three main components: a Next.js frontend, a Fastify backend, and an Expo React Native mobile admin application.

## Project Overview

This portfolio website is a professional showcase of full-stack development capabilities, featuring a modern web application with comprehensive content management. The system is designed as a monorepo housing three distinct applications:

1. **Frontend (Next.js)**: A responsive, server-side rendered website hosted on Cloudflare Workers
2. **Backend (Fastify)**: A high-performance API service with robust data management deployed on Azure VPS
3. **Mobile Admin (Expo React Native)**: A native mobile application for real-time content control and live chat management

The project demonstrates advanced concepts including real-time communication, dynamic content management, license management system, and multi-platform deployment strategies.

## Key Features

### Professional Portfolio Content
- **Work Experience**: Detailed employment history with roles, responsibilities, and achievements
- **Skills & Technologies**: Comprehensive listing of technical skills with proficiency levels
- **Current Learning Status**: Real-time updates on technologies and skills being learned
- **Freelance Portfolio**: Showcase of freelance projects and client testimonials
- **Contact Information**: Multiple contact methods and professional links

### Dynamic Content Management
- **Admin Panel**: Complete control over all website content without structural changes
- **Project Management**: 
  - Add, edit, and manage all projects from admin dashboard
  - Individual project detail pages with markdown content support
  - Categorization and tagging system
  - Project status tracking (completed, in-progress, planned)

### Project Distribution System
- **NPM Packages**: Direct links to published packages on npm or other registries
- **CLI Tools**: Custom download links for installable command-line tools
- **License Management**: Built-in licensing system for premium CLI tools
- **Purchase License Key**: Integrated payment system for tool activation

### Live Communication
- **Real-time Chat**: Direct communication system with website visitors
- **Mobile Admin Control**: Enable/disable live chat mode from mobile app
- **Chat History**: Persistent conversation storage and management
- **Notification System**: Real-time alerts for new messages

### Admin Mobile Application
- **Content Control**: Manage all website content on-the-go
- **Live Chat Management**: Real-time visitor communication
- **Analytics Dashboard**: Website traffic and engagement metrics
- **Push Notifications**: Instant alerts for chat messages and system events

## Tech Stack

### Frontend
- **Framework**: Next.js 14 (React 18)
- **Styling**: Tailwind CSS
- **State Management**: Zustand/React Query
- **Deployment**: Cloudflare Workers
- **Features**:
  - Server-side rendering (SSR)
  - Static site generation (SSG)
  - Real-time chat integration
  - Markdown rendering for project documentation
  - SEO optimization

### Backend
- **Framework**: Fastify
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT with refresh tokens
- **File Storage**: Azure Blob Storage
- **Payment Processing**: Stripe integration
- **Deployment**: Azure VPS
- **Features**:
  - High-performance API endpoints
  - Real-time WebSocket connections
  - License key generation and validation
  - File upload and processing
  - Rate limiting and security middleware

### Mobile Admin App
- **Framework**: React Native with Expo
- **State Management**: Zustand
- **UI Library**: NativeBase/Tamagui
- **Real-time**: Socket.io client
- **Features**:
  - Live chat management
  - Content editing capabilities
  - Push notifications
  - Offline mode with sync
  - Biometric authentication

### Infrastructure & DevOps
- **Frontend Hosting**: Cloudflare Workers
- **Backend Hosting**: Azure Virtual Private Server
- **Database**: PostgreSQL on Azure
- **CDN**: Cloudflare
- **CI/CD**: GitHub Actions
- **Monitoring**: Azure Application Insights
- **DNS**: Cloudflare DNS

## Project Structure

```
/
├── frontend/                  # Next.js website
│   ├── app/                   # App router pages
│   ├── components/            # Reusable UI components
│   │   ├── Home/              # Homepage sections
│   │   ├── Header.tsx         # Navigation header
│   │   └── Footer.tsx         # Website footer
│   ├── lib/                   # Utilities and configurations
│   ├── public/                # Static assets
│   └── styles/                # Global styles
│
├── backend/                   # Fastify API server
│   ├── src/
│   │   ├── routes/            # API route handlers
│   │   ├── plugins/           # Fastify plugins
│   │   ├── services/          # Business logic
│   │   ├── models/            # Database models
│   │   └── utils/             # Helper functions
│   ├── prisma/                # Database schema and migrations
│   └── uploads/               # File storage directory
│
├── application/               # Expo React Native mobile app
│   ├── app/                   # App screens and navigation
│   ├── components/            # Reusable mobile components
│   ├── hooks/                 # Custom React hooks
│   ├── constants/             # App constants
│   └── assets/                # Mobile app assets
│
└── shared/                    # Shared types and utilities
    ├── types/                 # TypeScript definitions
    ├── constants/             # Shared constants
    └── utils/                 # Common utilities
```

## Content Management Features

### Homepage Sections (Admin Editable)
- **Hero Section**: Welcome message, tagline, and call-to-action
- **Work Experience**: Employment history with detailed descriptions
- **Skills & Technologies**: Technical proficiencies with categories
- **Current Learning**: Active learning projects and progress
- **Projects Showcase**: Featured projects with filtering options
- **Freelance Portfolio**: Client work and testimonials
- **Contact Information**: Multiple contact methods

### Project Management System
- **Project CRUD Operations**: Full create, read, update, delete functionality
- **Markdown Documentation**: Rich project descriptions with code syntax highlighting
- **Project Categories**: Organize projects by type (Web, Mobile, CLI, NPM, etc.)
- **External Links**: NPM packages, GitHub repositories, live demos
- **Download Management**: Custom download links for CLI tools
- **License Integration**: Premium tool licensing with key generation

### License Management System
- **Key Generation**: Unique license keys for CLI tools
- **Payment Integration**: Secure payment processing with Stripe
- **License Validation**: Server-side verification system
- **Usage Tracking**: Monitor license usage and analytics
- **Renewal System**: Automatic and manual license renewals

## API Endpoints

### Public Endpoints
```
GET    /api/portfolio          # Get portfolio data
GET    /api/projects           # List all projects
GET    /api/projects/:id       # Get project details
POST   /api/contact            # Send contact message
POST   /api/chat/message       # Send chat message
GET    /api/licenses/validate  # Validate license key
```

### Admin Endpoints
```
POST   /api/auth/login         # Admin authentication
GET    /api/admin/dashboard    # Dashboard data
PUT    /api/admin/portfolio    # Update portfolio content
POST   /api/admin/projects     # Create new project
PUT    /api/admin/projects/:id # Update project
DELETE /api/admin/projects/:id # Delete project
GET    /api/admin/chat         # Get chat messages
POST   /api/admin/chat/reply   # Reply to chat
POST   /api/licenses/generate  # Generate license key
```

## Installation & Setup

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Azure CLI (for deployment)
- Expo CLI
- Cloudflare account

### Environment Variables

#### Frontend (.env.local)
```bash
NEXT_PUBLIC_API_URL=https://api.yoursite.com
NEXT_PUBLIC_SOCKET_URL=wss://api.yoursite.com
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
```

#### Backend (.env)
```bash
DATABASE_URL=postgresql://user:password@localhost:5432/portfolio
JWT_SECRET=your_super_secret_jwt_key
STRIPE_SECRET_KEY=sk_live_...
AZURE_STORAGE_CONNECTION_STRING=DefaultEndpointsProtocol=https...
CORS_ORIGINS=https://yoursite.com
PORT=3000
```

#### Mobile App (.env)
```bash
EXPO_PUBLIC_API_URL=https://api.yoursite.com
EXPO_PUBLIC_SOCKET_URL=wss://api.yoursite.com
```

### Local Development

#### Backend Setup
```bash
cd backend
npm install
npx prisma migrate dev
npm run dev
```

#### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

#### Mobile App Setup
```bash
cd application
npm install
npx expo start
```

## Deployment

### Frontend (Cloudflare Workers)
```bash
cd frontend
npm run build
npx wrangler deploy
```

### Backend (Azure VPS)
```bash
# Automated deployment via GitHub Actions
# Manual deployment:
cd backend
npm run build
pm2 start ecosystem.config.js
```

### Mobile App (Expo EAS)
```bash
cd application
eas build --platform all
eas submit --platform all
```

## Features Roadmap

### Phase 1 (Current)
- [x] Basic portfolio structure
- [x] Admin content management
- [x] Project showcase
- [x] Live chat system
- [x] Mobile admin app

### Phase 2 (In Progress)
- [ ] License management system
- [ ] Payment integration
- [ ] Advanced analytics dashboard
- [ ] Blog section with markdown support
- [ ] Client testimonials system

### Phase 3 (Planned)
- [ ] Multi-language support
- [ ] Advanced SEO optimization
- [ ] Performance monitoring
- [ ] Automated backup system
- [ ] API rate limiting enhancements

## License

This project is proprietary software. All rights reserved.

For licensing inquiries, please contact through the website's contact form.

---

© 2024 Ankan Saha. All rights reserved.