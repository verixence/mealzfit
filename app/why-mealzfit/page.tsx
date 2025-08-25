import { Metadata } from "next";
import { WhyMealzfitDetailed } from "@/components/why-mealzfit-detailed";

export const metadata: Metadata = {
  title: "Why Choose Mealzfit - The Advantage | Mealzfit",
  description: "Discover why Mealzfit is the perfect choice for healthy eating. Homely meals, diabetic-friendly options, fitness-focused dishes, fresh ingredients, and flexible ordering.",
  keywords: ["why mealzfit", "healthy food advantages", "diabetic friendly meals", "fitness nutrition", "fresh ingredients"],
};

export default function WhyMealzfitPage() {
  return (
    <div className="min-h-screen bg-white pt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-gray-900 mb-4">
            Why Choose <span className="text-green-600">Mealzfit</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Because food is more than calories—it's care, comfort, and confidence.
          </p>
        </div>
        
        <WhyMealzfitDetailed />
      </div>
    </div>
  );
}