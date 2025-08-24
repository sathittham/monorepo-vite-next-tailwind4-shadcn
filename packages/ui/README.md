# @workspace/ui

Shared UI component library built with shadcn/ui, Tailwind CSS, and Radix UI primitives. Provides consistent, accessible, and customizable components across the monorepo.

[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Latest-000000.svg)](https://ui.shadcn.com/)
[![Radix UI](https://img.shields.io/badge/Radix_UI-Latest-8B5CF6.svg)](https://radix-ui.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4.svg)](https://tailwindcss.com/)

## 📋 Overview

This package contains a comprehensive collection of reusable UI components built with:

- **shadcn/ui** - High-quality component system
- **Radix UI** - Unstyled, accessible primitives
- **Tailwind CSS** - Utility-first styling
- **TypeScript** - Full type safety
- **CVA** - Class variance authority for component variants

## 🎨 Available Components

### Navigation & Layout
- **Sidebar** - Collapsible sidebar navigation
- **App Sidebar** - Application-specific sidebar with user menu
- **Navigation Menu** - Multi-level navigation menus
- **Breadcrumb** - Hierarchical navigation
- **Site Header** - Header with branding and actions
- **Page Header** - Page-specific headers with titles and descriptions
- **Page Content** - Content wrapper with consistent spacing

### Interactive Components
- **Button** - Various button styles and sizes
- **Input** - Text inputs with validation states
- **Textarea** - Multi-line text inputs
- **Select** - Dropdown selection components
- **Checkbox** - Toggle checkboxes with indeterminate state
- **Radio Group** - Exclusive selection options
- **Switch** - Toggle switches
- **Slider** - Range input sliders

### Overlay Components
- **Dialog** - Modal dialogs with backdrop
- **Sheet** - Sliding panels from edges
- **Popover** - Floating content containers
- **Hover Card** - Content shown on hover
- **Tooltip** - Contextual help text
- **Command** - Command palette and search
- **Context Menu** - Right-click context menus
- **Dropdown Menu** - Action menus with keyboard support

### Display Components
- **Card** - Content containers with headers and footers
- **Badge** - Status indicators and labels
- **Avatar** - User profile images with fallbacks
- **Separator** - Visual content dividers
- **Skeleton** - Loading state placeholders
- **Progress** - Progress indicators
- **Tabs** - Tabbed content sections
- **Accordion** - Collapsible content sections

### Feedback Components
- **Alert** - Informational messages
- **Alert Dialog** - Confirmation dialogs
- **Toast** (via Sonner) - Notification messages
- **Empty State** - Empty state illustrations with actions

### Form Components
- **Form** - Form validation and error handling
- **Label** - Accessible form labels
- **Input OTP** - One-time password inputs
- **Calendar** - Date picker calendar
- **Date Picker** - Date selection component

### Data Display
- **Data Table** - Feature-rich data tables with sorting, filtering, and pagination
- **Chart** - Data visualization components (via Recharts)

### Specialized Components
- **Not Found** - 404 error pages with actions
- **Drawer** (via Vaul) - Mobile-optimized drawers

## 📦 Installation & Usage

### Importing Components

```tsx
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

export function MyComponent() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
        <Button className="w-full">Sign In</Button>
      </CardContent>
    </Card>
  )
}
```

### Using Component Variants

Many components support variants for different styles and sizes:

```tsx
import { Button } from "@workspace/ui/components/button"
import { Badge } from "@workspace/ui/components/badge"

export function VariantExample() {
  return (
    <div className="space-x-2">
      {/* Button variants */}
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      
      {/* Button sizes */}
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <PlusIcon className="h-4 w-4" />
      </Button>
      
      {/* Badge variants */}
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  )
}
```

### Complex Component Examples

#### Data Table with Actions

```tsx
import { DataTable } from "@workspace/ui/components/data-table"
import { Button } from "@workspace/ui/components/button"
import { Badge } from "@workspace/ui/components/badge"

const columns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant={row.original.status === "active" ? "default" : "secondary"}>
        {row.original.status}
      </Badge>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <Button variant="ghost" size="sm">
        Edit
      </Button>
    ),
  },
]

export function UsersTable({ users }) {
  return (
    <DataTable 
      columns={columns} 
      data={users}
      searchKey="name"
      searchPlaceholder="Search users..."
    />
  )
}
```

#### Form with Validation

```tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form"
import { Input } from "@workspace/ui/components/input"
import { Button } from "@workspace/ui/components/button"

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

export function SignInForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormDescription>
                We'll never share your email with anyone else.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Enter your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
    </Form>
  )
}
```

## 🎨 Styling System

### CSS Variables

The component library uses CSS variables for theming:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 240 10% 3.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 240 10% 3.9%;
  --primary: 240 9% 10%;
  --primary-foreground: 0 0% 98%;
  --secondary: 240 4.8% 95.9%;
  --secondary-foreground: 240 5.9% 10%;
  --muted: 240 4.8% 95.9%;
  --muted-foreground: 240 3.8% 46.1%;
  --accent: 240 4.8% 95.9%;
  --accent-foreground: 240 5.9% 10%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
  --border: 240 5.9% 90%;
  --input: 240 5.9% 90%;
  --ring: 240 10% 3.9%;
  --radius: 0.5rem;
}

.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  /* ... dark theme variables */
}
```

### Customization

Components can be customized by:

1. **CSS Variables** - Modify theme colors and spacing
2. **Tailwind Classes** - Override component styles
3. **Component Props** - Use built-in variant props
4. **Custom Variants** - Extend CVA variants

### Adding New Components

To add a new shadcn/ui component:

```bash
# From the monorepo root
pnpm dlx shadcn@latest add [component-name] -c packages/ui

# Then export it from packages/ui/src/index.ts
export * from "./components/new-component"
```

## 🔧 Development

### Component Structure

Each component follows this structure:

```
src/components/
├── button.tsx           # Component implementation
├── card.tsx            # Complex components
├── form.tsx            # Form-related components
└── index.ts            # Re-exports (if needed)
```

### TypeScript Support

All components are fully typed with TypeScript:

```tsx
interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Component implementation
  }
)
```

### Testing

```bash
# Run component tests
pnpm test

# Test in Storybook (if available)
pnpm storybook
```

## 🎯 Accessibility

All components follow accessibility best practices:

- **ARIA Support** - Proper ARIA attributes
- **Keyboard Navigation** - Full keyboard support
- **Focus Management** - Logical focus flow
- **Screen Reader** - Compatible with screen readers
- **Color Contrast** - WCAG AA compliant colors

## 📚 Dependencies

Key dependencies include:

- **@radix-ui/react-*** - Primitive components
- **class-variance-authority** - Component variants
- **clsx** - Conditional class names
- **tailwind-merge** - Tailwind class merging
- **lucide-react** - Icon library

## 🤝 Contributing

When contributing new components:

1. Follow the shadcn/ui conventions
2. Ensure full TypeScript support
3. Add proper accessibility attributes
4. Include component variants where appropriate
5. Test with both light and dark themes
6. Document usage examples

---

Part of the [Monorepo Vite + Next.js + Tailwind CSS + shadcn/ui](../../README.md) starter template.