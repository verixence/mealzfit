export interface NutritionData {
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
  fiber: string;
  sodium: string;
  sugar: string;
  glycemicIndex?: string;
  servingSize: string;
  keyNutrients: string[];
}

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  tags: string[];
  shortDescription: string;
  image: string;
  price?: number;
  nutrition?: NutritionData;
  orderLinks?: {
    swiggy?: string;
    zomato?: string;
  };
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  avatar?: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  oneLiner: string;
  email: string;
  phones: string[];
  city: string;
  socialLinks: {
    instagram?: string;
    facebook?: string;
  };
}

export interface FAQ {
  question: string;
  answer: string;
}