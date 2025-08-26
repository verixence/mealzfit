import { MenuGrid } from "@/components/menu-grid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu - Healthy Food Delivery | Mealzfit",
  description: "Browse our full menu of healthy, homely, and fitness-focused meals. Diabetic-friendly options, high-protein dishes, and fresh ingredients.",
  keywords: ["menu", "healthy food", "diabetic friendly", "fitness meals", "protein", "Hyderabad delivery"],
};

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-white pt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-gray-900 mb-4">
            Our Menu
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our complete range of healthy, homely, and fitness-focused meals. 
            All prepared fresh with the finest ingredients.
          </p>
        </div>
        
        <MenuGrid />
      </div>
    </div>
  );
}