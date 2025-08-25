import { Metadata } from "next";

export const defaultSEO: Metadata = {
  metadataBase: new URL("https://mealzfit.com"),
  title: {
    default: "Mealzfit - Healthy Living Starts Here",
    template: "%s | Mealzfit",
  },
  description: "Choose Health Choose Happiness with Mealzfit. Nourish Your Body Naturally with healthy, homely, and fitness-focused meals made fresh. Order on Swiggy or Zomato. Serving Hyderabad.",
  keywords: [
    "healthy food delivery",
    "fitness meals",
    "diabetic friendly food",
    "home cooked meals",
    "protein rich food",
    "low gi meals",
    "Hyderabad food delivery",
    "Swiggy",
    "Zomato",
    "meal delivery",
    "nutritious food",
    "fresh ingredients"
  ],
  authors: [{ name: "Mealzfit" }],
  creator: "Mealzfit",
  publisher: "Mealzfit",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mealzfit.com",
    siteName: "Mealzfit",
    title: "Mealzfit - Healthy Living Starts Here",
    description: "Choose Health Choose Happiness with Mealzfit. Nourish Your Body Naturally with healthy, homely, and fitness-focused meals made fresh. Order on Swiggy or Zomato.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mealzfit - Healthy Food Delivery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mealzfit - Healthy Living Starts Here",
    description: "Choose Health Choose Happiness with Mealzfit. Nourish Your Body Naturally with healthy, homely, and fitness-focused meals made fresh. Order on Swiggy or Zomato.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://mealzfit.com",
  },
};

export function generateStructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mealzfit",
    "url": "https://mealzfit.com",
    "logo": "https://mealzfit.com/logo.png",
    "description": "Healthy, homely, and fitness-focused meals made fresh",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-87900-90505",
      "contactType": "customer service",
      "email": "mealzfit.go@gmail.com"
    },
    "sameAs": [
      "https://www.instagram.com/mealzfit.go?igsh=YzljYTk1ODg3Zg=="
    ]
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "name": "Mealzfit",
    "url": "https://mealzfit.com",
    "description": "Healthy food delivery service specializing in homely meals, diabetic-friendly options, and fitness-focused nutrition",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "17.3850",
      "longitude": "78.4867"
    },
    "telephone": "+91-87900-90505",
    "email": "mealzfit.go@gmail.com",
    "servesCuisine": ["Healthy", "Indian", "Fitness"],
    "priceRange": "₹₹",
    "paymentAccepted": ["Cash", "Credit Card", "Digital Wallet"],
    "currenciesAccepted": "INR",
    "openingHours": [
      "Mo-Sa 08:00-22:00",
      "Su 09:00-21:00"
    ]
  };

  return { organization, localBusiness };
}