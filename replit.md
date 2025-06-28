# Yahia Hassan Portfolio - replit.md

## Overview

This is a professional portfolio website for Yahia Hassan, a Product Management Professional. The application is built as a full-stack web application showcasing career achievements, projects, and providing a contact mechanism for potential opportunities.

The architecture follows a monorepo structure with separate client and server directories, utilizing modern web technologies for both frontend and backend development.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Framework**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful endpoints with JSON responses
- **Validation**: Zod schemas for request/response validation

## Key Components

### Database Layer
- **ORM**: Drizzle ORM with TypeScript-first approach
- **Schema Location**: `shared/schema.ts` - contains database tables and validation schemas
- **Tables**: 
  - `users` - User management (username, password)
  - `contact_messages` - Contact form submissions (name, email, subject, message, timestamp)
- **Migrations**: Stored in `./migrations` directory
- **Configuration**: `drizzle.config.ts` with PostgreSQL dialect

### API Layer
- **Contact Endpoint**: `POST /api/contact` - Handles contact form submissions
- **Admin Endpoint**: `GET /api/contact-messages` - Retrieves all contact messages
- **Validation**: Zod schemas ensure data integrity
- **Error Handling**: Structured error responses with appropriate HTTP status codes

### Frontend Components
- **Navigation**: Fixed header with smooth scroll navigation
- **Hero Section**: Professional introduction with call-to-action buttons
- **About Section**: Professional overview with core competencies
- **Career Section**: Timeline of professional experiences
- **Portfolio Section**: Showcase of completed projects with metrics
- **Contact Section**: Contact form with real-time validation
- **Footer**: Site navigation and contact information

### UI/UX Features
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Smooth Animations**: Intersection Observer for scroll-triggered animations
- **Toast Notifications**: User feedback for form submissions
- **Accessibility**: ARIA labels and keyboard navigation support
- **Dark Mode Ready**: CSS custom properties for theme switching

## Data Flow

### Contact Form Submission
1. User fills out contact form in the frontend
2. React Hook Form validates data client-side using Zod schema
3. Form data submitted to `POST /api/contact` endpoint
4. Server validates data using shared Zod schema
5. Data stored in PostgreSQL database via Drizzle ORM
6. Success/error response returned to client
7. Toast notification displays result to user

### Content Rendering
1. Static content rendered from component data
2. Images served from Unsplash CDN for demo purposes
3. Smooth scroll navigation between sections
4. Lazy loading of components with intersection observers

## External Dependencies

### Core Technologies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Components**: Radix UI primitives with shadcn/ui styling
- **Database**: Neon Database (PostgreSQL), Drizzle ORM
- **Validation**: Zod for schema validation
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Icons**: Lucide React, React Icons
- **Build Tools**: Vite, ESBuild, TypeScript
- **Development**: TSX for TypeScript execution

### Development Tools
- **Replit Integration**: Vite plugins for Replit development environment
- **Error Handling**: Runtime error modal for development
- **Code Quality**: TypeScript strict mode, ES modules

## Deployment Strategy

### Development Environment
- **Local Development**: `npm run dev` starts both frontend and backend
- **Hot Module Replacement**: Vite provides instant updates during development
- **TypeScript Checking**: `npm run check` for type validation
- **Database Sync**: `npm run db:push` for schema synchronization

### Production Build
- **Frontend Build**: Vite builds optimized static assets to `dist/public`
- **Backend Build**: ESBuild bundles server code to `dist/index.js`
- **Single Command**: `npm run build` handles both frontend and backend
- **Production Start**: `npm start` runs the bundled application

### Database Management
- **Schema Definition**: Centralized in `shared/schema.ts`
- **Migrations**: Drizzle Kit manages database migrations
- **Environment Variables**: `DATABASE_URL` for database connection
- **Connection Pooling**: Neon serverless handles connection management

## Changelog

```
Changelog:
- June 28, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```