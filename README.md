<div align="center">
</div>

# Next.js Developer Portfolio

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdillionverma%2Fportfolio)

A modern, fully-featured developer portfolio template. Edit a single config file, get a stunning portfolio with blog, dark mode, and SEO optimization. Deploy to Vercel in minutes.

**Built with:** Next.js 16.1.1 • React 19 • TypeScript 5.9 • Tailwind CSS v4 • shadcn/ui • Framer Motion

---

## Key Features

### Portfolio Sections
- **Hero Section**: Name, avatar, description, social links
- **About**: Expandable bio with markdown support
- **Work Experience**: Interactive accordion timeline
- **Education**: Timeline layout with degree details
- **Skills**: Tech stack showcase with 13 SVG icons (React, Next.js, TypeScript, Node.js, Python, Go, PostgreSQL, Docker, Kubernetes, Java, C#)
- **Projects**: Responsive card grid with images, tech badges, links
- **Hackathons**: Timeline with collapsible event details
- **Contact**: Email & social links with CTA

### Blog Platform
- 7 example MDX blog posts included
- Syntax-highlighted code blocks with copy button
- Previous/Next post navigation
- SEO-optimized with JSON-LD schema markup
- Per-post OpenGraph images
- Pagination (5 posts per page)

### Design & UX
- Dark/light mode with `next-themes` (persisted to localStorage)
- Fully responsive (mobile, tablet, desktop)
- Smooth animations with Framer Motion
- Floating macOS-style dock navbar
- Accessible components (Radix UI primitives)
- oklch color system for perceptually uniform colors
- Geist font family (Google Fonts)

### Technical Excellence
- **TypeScript** strict mode enabled
- **Tailwind CSS v4** with CSS variables & oklch colors
- **Content Collections** for MDX blog compilation
- **Security headers**: X-Content-Type-Options, X-Frame-Options, CSP
- **SEO**: OpenGraph images, JSON-LD schema, sitemaps
- **Performance**: Static generation (SSG), image optimization
- **Build time**: < 60 seconds

---

## Getting Started (5 Minutes)

### Prerequisites
- Node.js 18+ ([Download](https://nodejs.org))
- Git
- pnpm (or npm/yarn)

### Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/dillionverma/portfolio
cd portfolio

# 2. Install dependencies
pnpm install

# 3. Start development server
pnpm dev
# Open http://localhost:3000
```

### Deploy to Vercel (1 Click)

Click the button at the top of this README, or:

1. Go to [vercel.com/new](https://vercel.com/new)
2. Select "Import Git Repository"
3. Paste your portfolio fork URL
4. Click "Deploy"

Done! Your portfolio is live. Auto-deploys on every push to `main`.

---

## Customization

### 1. Update Your Information
Edit `src/data/resume.tsx`:

```typescript
export const DATA = {
  name: "Your Name",
  initials: "YN",
  url: "https://yourdomain.com",
  description: "Your professional tagline",
  location: "City, Country",
  summary: "Your bio here...",
  avatarUrl: "/your-avatar.png",
  skills: [ /* your skills */ ],
  work: [ /* your work experience */ ],
  education: [ /* your education */ ],
  projects: [ /* your projects */ ],
  hackathons: [ /* hackathon participation */ ],
  contact: { /* your contact info */ },
};
```

### 2. Add Your Avatar
Replace `public/me.png` (square image, 200x200px recommended)

### 3. Add Company Logos
Place logos in `public/` and reference in the `work` array:
```typescript
logoUrl: "/company-logo.png"
```

### 4. Write Blog Posts
Create files in `content/` directory (MDX format):

```mdx
---
title: "Your Post Title"
publishedAt: "2024-03-23"
author: "Your Name"
summary: "Brief summary"
image: "/blog/post-image.png"
---

# Your Blog Post

Write your content here...
```

### 5. Configure Metadata
- Update favicon: `public/favicon.ico`
- Update domain: `src/data/resume.tsx` → `url`
- Add Google Analytics ID: `.env.local` → `NEXT_PUBLIC_GA_ID`

---

## Project Structure

```
src/
├── app/                    # Next.js App Router (pages & layouts)
│   ├── page.tsx           # Homepage
│   ├── blog/
│   │   ├── page.tsx       # Blog listing
│   │   └── [slug]/page.tsx # Individual blog post
│   └── layout.tsx         # Root layout
├── components/
│   ├── navbar.tsx         # Floating dock navbar
│   ├── section/           # Section components (work, projects, etc.)
│   ├── magicui/           # Animated components
│   ├── mdx/               # Blog component overrides
│   └── ui/                # shadcn/ui components
├── data/
│   └── resume.tsx         # SINGLE CONFIG FILE (all portfolio content)
└── lib/
    └── utils.ts           # Utility functions

content/
└── *.mdx                  # Blog posts (7 examples included)

docs/
├── project-overview-pdr.md     # Project goals & requirements
├── codebase-summary.md         # Architecture & file structure
├── code-standards.md           # Code guidelines & patterns
├── system-architecture.md      # Technical architecture
├── design-guidelines.md        # Design & color system
├── deployment-guide.md         # Deployment instructions
└── project-roadmap.md          # Feature roadmap
```

---

## Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Framework** | Next.js | 16.1.1 |
| **Runtime** | React | 19.2.3 |
| **Language** | TypeScript | 5.9.3 |
| **Styling** | Tailwind CSS | 4.1.18 |
| **UI Components** | shadcn/ui | latest |
| **Animations** | Framer Motion | 12.23.27 |
| **Content** | Content Collections | 0.2.1 |
| **Code Highlight** | Shiki | 3.20.0 |
| **Icons** | Lucide React | 0.562.0 |
| **Theme** | next-themes | 0.4.6 |
| **Package Manager** | pnpm | latest |
| **Deployment** | Vercel | recommended |

---

## Development Commands

```bash
pnpm dev              # Start dev server (http://localhost:3000)
pnpm build            # Production build
pnpm start            # Run production build
pnpm lint             # Check ESLint
pnpm lint:fix         # Auto-fix linting issues
```

---

## Performance & SEO

- **PageSpeed**: 90+ score (mobile & desktop)
- **Core Web Vitals**: All green (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- **SEO**: OpenGraph images, JSON-LD schema, meta tags
- **Accessibility**: WCAG 2.1 AA compliance
- **Bundle Size**: < 200kb gzipped JavaScript

---

## Documentation

Comprehensive documentation available in `docs/`:

- **[Project Overview & PDR](./docs/project-overview-pdr.md)** - Goals, features, requirements
- **[Codebase Summary](./docs/codebase-summary.md)** - Architecture, file structure, patterns
- **[Code Standards](./docs/code-standards.md)** - TypeScript, React, Tailwind guidelines
- **[System Architecture](./docs/system-architecture.md)** - Data flow, components, routing
- **[Design Guidelines](./docs/design-guidelines.md)** - Colors, typography, spacing, animations
- **[Deployment Guide](./docs/deployment-guide.md)** - Vercel setup, environment variables, monitoring
- **[Project Roadmap](./docs/project-roadmap.md)** - Feature roadmap, milestones, future plans

---

## Roadmap

### Phase 1 (Current) ✓
- ✓ Core portfolio features
- ✓ Blog platform with MDX
- ✓ Dark mode support
- ✓ Responsive design
- ✓ SEO optimization

### Phase 2 (Q2 2026) - Planned
- [ ] CMS integration (Contentful/Sanity)
- [ ] Contact form with email
- [ ] Newsletter signup
- [ ] Blog search & tags
- [ ] Analytics dashboard

### Phase 3 (Q3 2026) - Planned
- [ ] Comments system
- [ ] Video embedding
- [ ] PDF resume export
- [ ] GitHub projects auto-sync

### Phase 4 (Q4 2026+) - Planned
- [ ] Plugin system
- [ ] Community templates
- [ ] Multi-language support
- [ ] Mobile app (React Native)

See [PROJECT_ROADMAP.md](./docs/project-roadmap.md) for details.

---

## Configuration Files

- **next.config.mjs** - Next.js configuration with security headers
- **content-collections.ts** - MDX blog schema & compilation
- **tsconfig.json** - TypeScript strict mode
- **postcss.config.mjs** - Tailwind CSS v4 setup
- **components.json** - shadcn/ui configuration
- **.eslintrc.json** - ESLint rules

---

## Environment Variables

Create `.env.local` (git-ignored):

```env
# Optional - for Google Analytics
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

No sensitive data needed for local development.

---

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Auto-deploys on every push
4. Custom domain setup in Vercel dashboard

See [Deployment Guide](./docs/deployment-guide.md) for alternatives and detailed instructions.

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Contributing

This is a template meant to be forked and customized. Contributions to the original template are welcome!

1. Fork the repository
2. Create feature branch: `git checkout -b feature/my-feature`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature/my-feature`
5. Submit pull request

---

## Troubleshooting

### Port 3000 Already in Use
```bash
# Find process on port 3000
lsof -i :3000
# Kill process
kill -9 <PID>

# Or use different port
pnpm dev -- -p 3001
```

### Build Fails
```bash
# Clear Next.js cache
rm -rf .next node_modules
pnpm install
pnpm build
```

### TypeScript Errors
```bash
# Check TypeScript compilation
npx tsc --noEmit
# Fix errors in src files
```

### Theme Not Persisting
- Check localStorage in DevTools
- Verify `data-theme` attribute on `<html>` element
- Clear browser cache and reload

See [Deployment Guide](./docs/deployment-guide.md) for more troubleshooting.

---

## Performance Tips

1. **Optimize Images**: Compress avatars and project images before adding
2. **Lazy Load**: Blog images load on-demand
3. **Code Splitting**: Next.js automatically splits code per route
4. **Caching**: Vercel caches HTML (60s) and assets (12 months)
5. **Bundle Analysis**: Check `.next/` output size

---

## Security

- ✓ No API keys in repository
- ✓ Security headers configured
- ✓ HTTPS enforced (Vercel)
- ✓ Content Security Policy ready
- ✓ No inline scripts
- ✓ TypeScript strict mode

Secrets go in `.env.local` (git-ignored) or Vercel environment variables.

---

## Credits

- **Template**: [dillionverma/portfolio](https://github.com/dillionverma/portfolio)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Magic UI](https://magicui.design/)
- **Fonts**: [Geist](https://vercel.com/font)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## License

Licensed under the [MIT License](./LICENSE) - feel free to use for personal or commercial projects.

---

## Questions?

- 📖 [Read the docs](./docs/)
- 🐛 [Report issues](https://github.com/dillionverma/portfolio/issues)
- 💬 [Start discussion](https://github.com/dillionverma/portfolio/discussions)

**Happy building!** 🚀
