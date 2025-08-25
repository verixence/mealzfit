import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us - Our Story | Mealzfit",
  description: "Learn about Mealzfit's mission to make healthy eating simple, delicious, and accessible. Serving Hyderabad with homely meals, diabetic-friendly options, and fitness-focused dishes.",
  keywords: ["about mealzfit", "healthy food mission", "Hyderabad food delivery", "diabetic friendly", "fitness meals"],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-gray-900 mb-6">
              About <span className="text-green-600">Mealzfit</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe healthy eating should never be boring, stressful, or complicated.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-gray-900 mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  At Mealzfit, we created a kitchen that brings together homely foods, 
                  diabetic‑friendly meals, and fitness bowls. No subscriptions. 
                  Just open Swiggy or Zomato, order what you crave, and eat fresh.
                </p>
                <p>
                  We understand that good nutrition is the foundation of a healthy lifestyle, 
                  but it shouldn't come at the cost of taste or convenience. That's why we've 
                  crafted a menu that serves everyone—from fitness enthusiasts seeking 
                  high-protein meals to diabetics needing low-GI options, and families 
                  wanting homely comfort food.
                </p>
                <p>
                  Every dish is prepared with care, using fresh ingredients and time-tested 
                  recipes that nourish your body while satisfying your taste buds.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/about-mission.jpg"
                alt="Fresh ingredients and cooking preparation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Kitchen Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/kitchen-prep.jpg"
                alt="Professional kitchen with fresh ingredients"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-gray-900 mb-6">
                The Kitchen
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  Our kitchen is where passion meets precision. We've designed our 
                  processes around three core principles:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <span><strong>Homely Foods:</strong> Traditional recipes with a healthy twist</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <span><strong>Diabetic-Friendly:</strong> Low-GI ingredients, balanced nutrition</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <span><strong>Fitness Bowls:</strong> High-protein, fiber-rich combinations</span>
                  </li>
                </ul>
                <p>
                  We source our ingredients locally when possible, ensuring freshness 
                  while supporting our community in Hyderabad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serving Hyderabad Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-gray-900 mb-6">
              Serving Hyderabad
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're proud to be part of Hyderabad's vibrant food culture. Our city 
              deserves fresh, healthy options that don't compromise on taste or tradition.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">18</div>
                <div className="text-gray-600">Menu Items</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-600">Fresh Ingredients</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}