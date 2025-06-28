# Yahia Hassan Portfolio - replit.md

## Overview

This is a professional portfolio website for Yahia Hassan, a Product Management Professional. The application is built as a static React application optimized for GitHub Pages deployment, showcasing career achievements, projects, and providing contact functionality through email integration.

The architecture is now fully client-side with no server dependencies, making it perfect for static hosting on GitHub Pages.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Framework**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: Local React state (no server state needed)
- **Form Handling**: React Hook Form with Zod validation

### Deployment Architecture  
- **Hosting**: GitHub Pages (static hosting)
- **Build**: Vite static site generation
- **Contact Form**: Email integration via mailto: links
- **Assets**: Client-side only, no server dependencies
- **CI/CD**: GitHub Actions for automatic deployment

## Key Components

### Contact Integration
- **Contact Form**: Uses mailto: links for email integration
- **Validation**: Client-side form validation with Zod schemas
- **User Experience**: Toast notifications for user feedback
- **Email Integration**: Opens default email client with pre-filled contact information

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
3. Form data compiled into mailto: link with pre-filled information
4. Default email client opens with contact details
5. Toast notification provides user feedback

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
- **Local Development**: `npm run dev` starts the Vite development server
- **Hot Module Replacement**: Vite provides instant updates during development
- **TypeScript Checking**: `npm run check` for type validation
- **Preview Build**: `npm run preview` to test production build locally

### Production Build
- **Static Build**: Vite builds optimized static assets to `dist/`
- **GitHub Pages**: Automatic deployment via GitHub Actions
- **Single Command**: `npm run build` creates production-ready static files
- **No Server**: Fully client-side application, no backend required

### GitHub Pages Deployment
- **Repository Setup**: Enable GitHub Pages with GitHub Actions source
- **Automatic Deployment**: Pushes to main branch trigger deployment
- **Custom Domain**: Optional custom domain configuration supported
- **SSL**: Automatic HTTPS via GitHub Pages

## Changelog

```
Changelog:
- June 28, 2025. Initial setup
- June 28, 2025. Converted to static GitHub Pages deployment
  - Removed Express server and database dependencies
  - Updated contact form to use mailto: links
  - Added GitHub Actions deployment workflow
  - Optimized for static hosting compatibility
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```