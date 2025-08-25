# Mealzfit - Futuristic Food Delivery Website

> Good Food = Good Mood

A modern, mobile-first website for Mealzfit, featuring healthy meals, diabetic-friendly options, and fitness-focused nutrition. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **🎨 Modern Design**: Futuristic UI with warm, food-friendly aesthetics
- **📱 Mobile-First**: Fully responsive design optimized for all devices
- **⚡ Performance**: Next.js 14 with App Router for optimal performance
- **🎭 Animations**: Smooth Framer Motion animations and micro-interactions
- **♿ Accessibility**: WCAG 2.2 AA compliant with proper ARIA labels
- **🔍 SEO Optimized**: Comprehensive SEO with structured data and Open Graph
- **🍽️ Menu System**: Filterable menu with search functionality
- **📝 Content Management**: Easy-to-edit JSON-based content system
- **📧 Contact Forms**: Validated contact forms with proper error handling
- **🎯 Testimonials**: Interactive carousel with customer stories

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **SEO**: next-seo with structured data

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mealzfit
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Update the environment variables:
   ```env
   NEXT_PUBLIC_SWIGGY_URL=https://swiggy.com/mealzfit
   NEXT_PUBLIC_ZOMATO_URL=https://zomato.com/mealzfit
   NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/mealzfit
   NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/mealzfit
   ```

4. **Generate placeholder images** (for development)
   ```bash
   node scripts/generate-placeholder-images.js
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
mealzfit/
├── app/                      # App Router pages
│   ├── about/               # About page
│   ├── api/                 # API routes (OG image generation)
│   ├── contact/             # Contact page with form
│   ├── menu/                # Menu page with filters
│   ├── privacy/             # Privacy policy
│   ├── terms/               # Terms of service
│   ├── testimonials/        # Customer testimonials
│   ├── why-mealzfit/        # Why choose us page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── components/              # Reusable components
│   ├── ui/                  # shadcn/ui components
│   ├── header.tsx           # Navigation header
│   ├── footer.tsx           # Site footer
│   ├── hero.tsx             # Homepage hero section
│   ├── menu-grid.tsx        # Menu with filters
│   └── ...                  # Other components
├── data/                    # Content data
│   ├── menu.json           # Menu items and categories
│   └── site.json           # Site config and testimonials
├── lib/                     # Utilities and configurations
│   ├── types.ts            # TypeScript types
│   ├── utils.ts            # Utility functions
│   └── seo.ts              # SEO configurations
├── public/                  # Static assets
│   └── images/             # Menu and page images
└── scripts/                # Build and utility scripts
```

## 🎨 Customization

### Colors and Branding

Update the brand colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#00A884", // Emerald/Teal (freshness)
  },
  accent: {
    DEFAULT: "#FFB020", // Warm Mango/Amber (appetite cue)
  },
  // ... other colors
}
```

### Typography

Font configuration in `app/layout.tsx`:

```typescript
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});
```

## 📝 Content Management

### Menu Items

Edit `data/menu.json` to update menu items:

```json
{
  "categories": [
    {
      "id": "homely-foods",
      "name": "Homely Foods",
      "description": "Comforting dishes that taste like home"
    }
  ],
  "items": [
    {
      "id": "item-id",
      "name": "Item Name",
      "category": "homely-foods",
      "tags": ["high-protein", "low-gi"],
      "shortDescription": "Description of the item",
      "image": "/images/item-image.jpg",
      "price": 120
    }
  ]
}
```

### Site Configuration

Edit `data/site.json` for site-wide settings:

```json
{
  "name": "Mealzfit",
  "tagline": "Good Food = Good Mood",
  "email": "mealzfit.go@gmail.com",
  "phones": ["+91 87900 90505"],
  "city": "Hyderabad",
  "testimonials": [...],
  "faqs": [...]
}
```

### Adding New Pages

1. Create a new directory in `app/`
2. Add a `page.tsx` file with your content
3. Include proper metadata for SEO
4. Update navigation in `components/header.tsx`

## 🖼️ Image Management

### Development

- Placeholder images are generated automatically
- SVG placeholders for quick development
- Replace with actual food photography for production

### Production Images

1. **Food Photography**: High-quality images of actual menu items
2. **Optimization**: Use `next/image` for automatic optimization
3. **Formats**: WebP/AVIF for modern browsers, JPEG fallback
4. **Sizes**: Responsive images with appropriate sizes

### Image Guidelines

- **Menu Items**: 400x300px minimum, 4:3 aspect ratio
- **Hero Images**: 1200x600px minimum
- **Avatars**: 100x100px minimum, square format
- **OG Images**: 1200x630px for social sharing

## 🔧 Development Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checking

# Utilities
node scripts/generate-placeholder-images.js  # Generate dev images
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

Key responsive features:
- Hamburger menu for mobile
- Grid layouts adapt to screen size
- Touch-friendly interactions
- Optimized images for different screen densities

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader friendly navigation
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Alt Text**: Descriptive alt text for all images

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Connect GitHub repository
   - Set environment variables
   - Deploy automatically

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Test production build**
   ```bash
   npm run start
   ```

3. **Deploy static files**
   Upload the `.next` folder and other assets to your hosting provider

## 🔍 SEO Optimization

### Built-in SEO Features

- **Meta Tags**: Comprehensive meta tags for all pages
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Schema.org markup for search engines
- **Sitemap**: Auto-generated sitemap
- **Robots.txt**: Search engine crawling instructions

### Performance Optimization

- **Image Optimization**: Automatic WebP/AVIF conversion
- **Code Splitting**: Automatic code splitting with Next.js
- **Caching**: Optimized caching strategies
- **Bundle Analysis**: Built-in bundle analyzer

## 🧪 Testing

### Lighthouse Scores

Target scores:
- **Performance**: ≥ 95
- **Accessibility**: ≥ 95  
- **Best Practices**: ≥ 95
- **SEO**: ≥ 95

### Testing Checklist

- [ ] All pages load correctly
- [ ] Forms submit and validate properly
- [ ] Menu filtering and search work
- [ ] Mobile navigation functions
- [ ] Images load with proper alt text
- [ ] External links open in new tabs
- [ ] Contact form sends emails (in production)

## 🔧 Environment Variables

```env
# Required for production
NEXT_PUBLIC_SWIGGY_URL=https://swiggy.com/mealzfit
NEXT_PUBLIC_ZOMATO_URL=https://zomato.com/mealzfit

# Optional social links
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/mealzfit
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/mealzfit

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License. See LICENSE file for details.

## 📞 Support

For questions or support:
- **Email**: mealzfit.go@gmail.com
- **Phone**: +91 87900 90505

---

Made with ❤️ for healthy eating in Hyderabad.
