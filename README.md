# Yahia Hassan - Portfolio Website

A modern, professional portfolio website for product management professional Yahia Hassan, built with React, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern, responsive design
- 📱 Mobile-first approach
- 🎨 Clean and professional UI
- 📧 Contact form with email integration
- 📄 CV download functionality
- 🚀 Optimized for GitHub Pages

## Sections

- **Hero**: Professional introduction with call-to-action
- **About**: Skills, achievements, and core competencies
- **Career**: Professional experience timeline
- **Portfolio**: Project highlights with metrics
- **Contact**: Contact form and professional information

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **Build Tool**: Vite
- **Deployment**: GitHub Pages
- **Forms**: React Hook Form with Zod validation

## GitHub Pages Deployment

This website is configured for automatic deployment to GitHub Pages:

### Setup Instructions

1. **Fork or clone this repository**
2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Set Source to "GitHub Actions"
   
3. **Configure the CV link**:
   - Upload your CV to Google Drive
   - Make it publicly viewable
   - Update the link in `client/src/components/floating-cv-button.tsx`

4. **Customize content**:
   - Update personal information in all components
   - Replace placeholder images with your professional photos
   - Modify experience, skills, and project data

### Automatic Deployment

The site automatically deploys when you push to the `main` branch using GitHub Actions. The workflow:

- Installs dependencies
- Builds the static site
- Deploys to GitHub Pages

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Customization

### Personal Information
- Update name, title, and contact details in all components
- Replace the professional photo in the hero section
- Modify the about section with your background

### Professional Experience
- Edit `client/src/components/career-section.tsx` with your work history
- Update `client/src/components/portfolio-section.tsx` with your projects

### Contact Information
- Modify email address in `client/src/components/contact-section.tsx`
- Update social media links
- Add your actual contact details

### CV Download
- Upload your CV to Google Drive
- Get the shareable link
- Update the URL in the floating CV button component

## GitHub Pages Compatibility

This website is fully static and compatible with GitHub Pages:

- ✅ No server-side dependencies
- ✅ Contact form uses mailto: links
- ✅ All assets are client-side
- ✅ Optimized build output
- ✅ Automatic deployment workflow

## License

MIT License - feel free to use this template for your own portfolio!