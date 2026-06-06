# Developer Portfolio

![App Preview](https://imgix.cosmicjs.com/6efcc570-61aa-11f1-ac44-fb77fa1a6b81-autopilot-photo-1531427186611-ecfd6d936c79-1780752005949.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern, and fully responsive developer portfolio built with Next.js and [Cosmic](https://www.cosmicjs.com). Showcase your projects, skills, work experience, and contact information with a polished, professional design.

## Features

- 🎨 Modern, responsive design with smooth animations
- 👤 Dynamic profile/hero section pulled from Cosmic
- 💼 Projects showcase with detail pages, galleries, and tech stacks
- 🛠️ Skills section grouped by category with proficiency indicators
- 🏢 Work experience timeline
- 📬 Contact section with social links and email
- ⚡ Server-side rendering for fast performance and SEO
- 🌙 Clean typography with Inter font

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a241e26ce890493c7b82e8c&clone_repository=6a241f28ce890493c7b82f24)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a professional services company with services offered, team members (including photos and bios), case studies, and client testimonials.
>
> User instructions: A developer portfolio with projects, skills, work experience, and contact info"

### Code Generation Prompt

> Build a Next.js application for a company website called "My Company". Create a beautiful, modern, responsive design with a homepage and pages for each content type. User instructions: A developer portfolio with projects, skills, work experience, and contact info

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Cosmic](https://www.cosmicjs.com/docs) - Headless CMS

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) or Node.js 18+
- A Cosmic account with a bucket containing the content types

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Set up environment variables (these are automatically provided in the Cosmic dashboard):

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all projects with depth for connected objects
const { objects: projects } = await cosmic.objects
  .find({ type: 'projects' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)

// Fetch a single project by slug
const { object: project } = await cosmic.objects
  .findOne({ type: 'projects', slug: 'my-project' })
  .depth(1)
```

## Cosmic CMS Integration

This application integrates with the following Cosmic object types:

- **Profile** — Your name, title, bio, headshot, email, location, and social links
- **Projects** — Portfolio projects with images, galleries, tech stacks, and links
- **Skills** — Skills grouped by category with proficiency
- **Work Experience** — Companies, roles, and time periods

Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

### Vercel

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add your environment variables
4. Deploy

### Netlify

1. Push your code to GitHub
2. Import the project in [Netlify](https://netlify.com)
3. Add your environment variables
4. Deploy

<!-- README_END -->