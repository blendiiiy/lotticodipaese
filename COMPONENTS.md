# Available Components

## UI Components (shadcn/ui)

### Basic Components
- ✅ **Button** - `components/ui/button.tsx`
- ✅ **Card** - `components/ui/card.tsx`
- ✅ **Input** - `components/ui/input.tsx`
- ✅ **Label** - `components/ui/label.tsx`
- ✅ **Textarea** - `components/ui/textarea.tsx`
- ✅ **Badge** - `components/ui/badge.tsx`
- ✅ **Dialog** - `components/ui/dialog.tsx` (Modal)
- ✅ **Tabs** - `components/ui/tabs.tsx`
- ✅ **Accordion** - `components/ui/accordion.tsx`
- ✅ **Separator** - `components/ui/separator.tsx`

## Custom Components

### Layout Components
- ✅ **Navbar** - `components/navbar.tsx` - Navigation bar
- ✅ **Footer** - `components/footer.tsx` - Footer with contact info
- ✅ **HeroSection** - `components/hero-section.tsx` - Hero banner sections

### Feature Components
- ✅ **ContactForm** - `components/contact-form.tsx` - Contact form with validation
- ✅ **TestimonialCard** - `components/testimonial-card.tsx` - Customer testimonials
- ✅ **FeatureCard** - `components/feature-card.tsx` - Service/feature cards
- ✅ **ImageWithFallback** - `components/image-with-fallback.tsx` - Image with fallback

## Usage Examples

### Contact Form
```tsx
import { ContactForm } from "@/components/contact-form"

<ContactForm />
```

### Testimonial
```tsx
import { TestimonialCard } from "@/components/testimonial-card"

<TestimonialCard
  name="Mario Rossi"
  rating={5}
  text="Ottimo servizio, personale molto professionale!"
  location="Paese, TV"
/>
```

### Feature Card
```tsx
import { FeatureCard } from "@/components/feature-card"
import { Eye } from "lucide-react"

<FeatureCard
  icon={Eye}
  title="Check Up Visivo"
  description="Esame completo della vista"
  features={["Strumenti moderni", "Professionisti esperti"]}
/>
```

### Dialog/Modal
```tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
    </DialogHeader>
    Content here...
  </DialogContent>
</Dialog>
```

### Tabs
```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

## Adding More Components

To add more shadcn/ui components, you can use:

```bash
npx shadcn@latest add [component-name]
```

Available components: https://ui.shadcn.com/docs/components

## Customizing Components

All components use Tailwind CSS and can be customized via:
- `className` prop
- CSS variables in `app/globals.css`
- Tailwind config in `tailwind.config.ts`

