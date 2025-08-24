# 🚀 Monorepo Vite + Next.js + Tailwind CSS 4 + shadcn/ui

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20-brightgreen)](https://nodejs.org/)
[![Package Manager](https://img.shields.io/badge/package%20manager-pnpm-F69220)](https://pnpm.io/)
[![Turborepo](https://img.shields.io/badge/build%20system-turborepo-EF4444)](https://turbo.build/)

A modern, full-stack monorepo template featuring Next.js, Vite, Tailwind CSS 4, and shadcn/ui components. Built for scalable development with shared packages and consistent tooling across multiple applications.

## ✨ Features

- 🏗️ **Monorepo Structure** - Organized with Turborepo for efficient builds and caching
- ⚡ **Multiple App Support** - Next.js and Vite applications in one repository
- 🎨 **Modern UI Stack** - Tailwind CSS 4 with shadcn/ui components
- 📦 **Shared Packages** - Reusable UI components, configs, and utilities
- 🔧 **Developer Experience** - ESLint, TypeScript, Prettier pre-configured
- 🚀 **Build Optimization** - Turbo-powered builds with intelligent caching
- 🎯 **Type Safety** - Full TypeScript support across all packages

## 📁 Project Structure

```
├── apps/
│   ├── my-next-app/          # Next.js application with App Router
│   │   ├── app/              # Next.js 13+ app directory
│   │   ├── components/       # App-specific components
│   │   └── package.json
│   └── my-vite-app/          # Vite + React application
│       ├── src/              # Vite app source code
│       ├── components.json   # shadcn/ui configuration
│       └── package.json
├── packages/
│   ├── ui/                   # Shared UI component library
│   │   ├── src/components/   # shadcn/ui components
│   │   └── src/styles/       # Global styles
│   ├── eslint-config/        # Shared ESLint configurations
│   └── typescript-config/    # Shared TypeScript configurations
├── turbo.json               # Turborepo configuration
├── pnpm-workspace.yaml      # PNPM workspace configuration
└── package.json             # Root package.json
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** >= 20
- **pnpm** >= 8.0.0

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sathittham/monorepo-vite-next-tailwind4-shadcn.git
   cd monorepo-vite-next-tailwind4-shadcn
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development servers**
   ```bash
   # Start all applications
   pnpm dev
   
   # Or start specific applications
   pnpm dev --filter my-next-app
   pnpm dev --filter my-vite-app
   ```

### Available Applications

- **Next.js App** - http://localhost:3000
  - Modern landing page with hero section, features, and footer
  - Built with shadcn/ui components and responsive design
- **Vite App** - http://localhost:5176
  - Enterprise dashboard with sidebar navigation
  - Includes data library, reports, and analytics pages
  - Comprehensive component system with consistent layouts

## 🛠️ Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start all applications in development mode |
| `pnpm build` | Build all applications for production |
| `pnpm lint` | Run ESLint across all packages |
| `pnpm format` | Format code with Prettier |

### Working with Applications

#### Next.js Application (`apps/my-next-app`)
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Features**: 
  - Modern landing page with hero section
  - Responsive navigation and footer
  - Server Components, TypeScript, ESLint
  - GitHub integration and social links
- **Development**: `pnpm dev --filter my-next-app`
- **Build**: `pnpm build --filter my-next-app`

#### Vite Application (`apps/my-vite-app`)
- **Framework**: Vite + React 19
- **Routing**: React Router v6 with nested layouts
- **Styling**: Tailwind CSS 4 with custom utilities
- **Features**:
  - Enterprise dashboard with sidebar navigation
  - Consistent page layouts with breadcrumb navigation
  - Multiple pages: Dashboard, Data Library, Reports, Examples
  - Reusable component system with shared UI package
  - 404 error handling and empty states
  - Hot Module Replacement, TypeScript, ESLint
- **Development**: `pnpm dev --filter my-vite-app`
- **Build**: `pnpm build --filter my-vite-app`

## 🎨 UI Components & Architecture

This monorepo uses [shadcn/ui](https://ui.shadcn.com/) for consistent, accessible components with a comprehensive component system.

### Component Architecture

The Vite application features a sophisticated layout system:

- **PageLayout**: Main layout component with sidebar, header, and content areas
- **SiteHeader**: Consistent header with breadcrumbs and action buttons
- **PageContent**: Content wrapper with consistent padding
- **ContentGrid**: Responsive grid system for organized content
- **BreadcrumbNav**: Hierarchical navigation with Home icon and separators

### Available Components

The shared UI package (`packages/ui`) includes:

**Navigation & Layout:**
- Sidebar, App Sidebar, Navigation Menu, Breadcrumb
- Site Header, Page Header, Page Content

**Interactive Components:**
- Button, Input, Textarea, Select, Checkbox, Radio Group
- Dialog, Sheet, Popover, Hover Card, Tooltip
- Command, Context Menu, Dropdown Menu

**Display Components:**
- Card, Badge, Avatar, Separator, Skeleton
- Alert, Alert Dialog, Data Table, Chart
- Progress, Slider, Tabs, Accordion

**Form Components:**
- Form, Label, Input OTP, Calendar, Date Picker

### Adding New Components

To add shadcn/ui components to your applications:

```bash
# For Next.js app
pnpm dlx shadcn@latest add button -c apps/my-next-app

# For Vite app  
pnpm dlx shadcn@latest add button -c apps/my-vite-app
```

This will:
1. Download the component source code
2. Place it in the appropriate `components/` directory
3. Configure it for your app's styling system

### Using Components

Import components from the shared UI package:

```tsx
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardHeader } from "@workspace/ui/components/card"
import { PageLayout } from "@/components/page-layout"
import { PageHeader } from "@/components/page-header"

export default function MyComponent() {
  const breadcrumbs = [
    { label: "STM23", href: "/" },
    { label: "My Page", current: true }
  ]

  return (
    <PageLayout 
      fullWidth
      headerBreadcrumbs={breadcrumbs}
      headerActions={<Button>Action</Button>}
    >
      <PageHeader
        title="My Page"
        description="Example page with consistent layout"
      />
      <Card>
        <CardHeader>
          <h2>Welcome</h2>
        </CardHeader>
        <CardContent>
          <Button>Get Started</Button>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
```

## 🔧 Configuration

### Tailwind CSS

Both applications use Tailwind CSS 4 with shared configuration:

- **Next.js**: Uses PostCSS with Tailwind CSS plugin
- **Vite**: Uses `@tailwindcss/vite` plugin
- **Shared Styles**: Global styles in `packages/ui/src/styles/globals.css`

### TypeScript

TypeScript configurations are shared via `packages/typescript-config`:

- `base.json` - Base TypeScript configuration
- `nextjs.json` - Next.js specific settings
- `react-library.json` - React library settings

### ESLint

ESLint configurations are shared via `packages/eslint-config`:

- `base.js` - Base ESLint rules
- `next.js` - Next.js specific rules
- `react-internal.js` - React component library rules

## 🚀 Deployment

### Build for Production

```bash
# Build all applications
pnpm build

# Build specific application
pnpm build --filter my-next-app
pnpm build --filter my-vite-app
```

### Deploy Next.js Application

The Next.js app is ready for deployment on:

- **Vercel** (recommended)
- **Netlify**
- **Railway**
- **Docker** containers

### Deploy Vite Application

The Vite app builds to static files and can be deployed on:

- **Vercel**
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**

## 📋 Package Management

This monorepo uses **pnpm workspaces** for efficient package management:

### Adding Dependencies

```bash
# Add to specific app
pnpm add react-query --filter my-next-app

# Add to shared package
pnpm add lodash --filter @workspace/ui

# Add to root (affects all packages)
pnpm add -D prettier
```

### Internal Dependencies

Apps can reference shared packages using workspace protocol:

```json
{
  "dependencies": {
    "@workspace/ui": "workspace:*",
    "@workspace/eslint-config": "workspace:*"
  }
}
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create your feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and conventions
- Add TypeScript types for new features
- Update documentation for significant changes
- Test your changes across both applications
- Run `pnpm lint` and `pnpm format` before committing

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Turborepo Documentation](https://turbo.build/repo/docs)
- [pnpm Workspaces](https://pnpm.io/workspaces)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn](https://github.com/shadcn) for the amazing UI components
- [Vercel](https://vercel.com) for Next.js and deployment platform
- [Tailwind Labs](https://tailwindlabs.com) for Tailwind CSS
- The open source community for all the great tools and libraries

---

Built with ❤️ by [Sathittham](https://sathittham.com)