import { Metadata } from "next";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { TestimonialsGrid } from "@/components/testimonials-grid";

export const metadata: Metadata = {
  title: "Customer Stories & Reviews | Mealzfit",
  description: "Read what our customers say about Mealzfit's healthy meals. Real reviews from fitness enthusiasts, diabetics, and food lovers in Hyderabad.",
  keywords: ["customer reviews", "testimonials", "mealzfit reviews", "healthy food feedback", "Hyderabad food delivery"],
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white pt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-gray-900 mb-4">
            Customer <span className="text-green-600">Stories</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Real stories from real people who love Mealzfit. Join hundreds of satisfied customers 
            who have made healthy eating a joyful part of their lives.
          </p>
        </div>
        
        <TestimonialsCarousel />
        <TestimonialsGrid />
      </div>
    </div>
  );
}