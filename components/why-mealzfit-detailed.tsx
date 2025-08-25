"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { 
  Heart, 
  Zap, 
  Dumbbell, 
  Leaf, 
  ShoppingCart, 
  Truck,
  CheckCircle
} from "lucide-react";

const advantages = [
  {
    icon: Heart,
    title: "Homely Meals",
    subtitle: "Comforting dishes that taste like home",
    description: "Our homely meals are crafted with traditional recipes and a mother's touch. From perfectly spiced rotis to comforting dal, each dish brings the warmth of home-cooked food to your table. We understand that sometimes you crave the simple pleasure of familiar flavors.",
    features: ["Traditional recipes", "Home-style cooking", "Comfort food favorites", "Family-friendly portions"],
    image: "/images/flexible-ordering.png"
  },
  {
    icon: Zap,
    title: "Diabetic-Friendly Options",
    subtitle: "Smartly designed, doctor-approved choices",
    description: "Managing diabetes doesn't mean sacrificing taste. Our diabetic-friendly meals are carefully crafted with low-GI ingredients, balanced macronutrients, and natural sweeteners. Each dish is designed to help maintain stable blood sugar levels while delivering maximum flavor.",
    features: ["Low-GI ingredients", "Balanced macronutrients", "Sugar-free options", "Portion controlled"],
    image: "/images/flexible-ordering.png"
  },
  {
    icon: Dumbbell,
    title: "Fitness-Focused Nutrition",
    subtitle: "High protein, fiber-rich meals for active lifestyles",
    description: "Fuel your fitness journey with meals designed for performance and recovery. Our fitness bowls pack 25-35g of high-quality protein, complex carbohydrates, and essential nutrients to support your training goals and help you build lean muscle.",
    features: ["25-35g protein per serving", "Complex carbohydrates", "Post-workout recovery", "Lean muscle support"],
    image: "/images/fitness-focused-nutrition.png"
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    subtitle: "No shortcuts, no junk, no compromise",
    description: "We source the freshest ingredients from trusted suppliers and local farmers when possible. No preservatives, no artificial flavors, no corners cut. Every ingredient is chosen for its nutritional value and quality, ensuring you get the best in every bite.",
    features: ["Local sourcing", "No preservatives", "Seasonal ingredients", "Quality guaranteed"],
    image: "/images/fresh-ingredients.png"
  },
  {
    icon: ShoppingCart,
    title: "Flexible Ordering",
    subtitle: "No subscriptions; order anytime",
    description: "Enjoy the freedom to order when you want, what you want. No monthly commitments, no subscription locks, no forced deliveries. Simply open Swiggy or Zomato when you're craving healthy food, and we'll have it ready for you.",
    features: ["No subscriptions", "Order on demand", "Multiple platforms", "Complete flexibility"],
    image: "/images/flexible-ordering.png"
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    subtitle: "Via Swiggy & Zomato",
    description: "Get your healthy meals delivered hot and fresh through the platforms you already know and trust. With our partnership with Swiggy and Zomato, you can track your order, choose your delivery time, and enjoy the same reliable service you expect.",
    features: ["30-45 minute delivery", "Hot & fresh meals", "Order tracking", "Reliable service"],
    image: "/images/fast-delivery.png"
  },
];

export function WhyMealzfitDetailed() {
  return (
    <div className="space-y-16">
      {advantages.map((advantage, index) => {
        const Icon = advantage.icon;
        const isEven = index % 2 === 0;
        
        return (
          <motion.section
            key={advantage.title}
            className="py-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4">
                    <Icon className="h-8 w-8 text-green-600" />
                  </div>
                  
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-bold font-display text-gray-900 mb-2">
                      {advantage.title}
                    </h2>
                    <p className="text-green-600 text-lg font-medium mb-4">
                      {advantage.subtitle}
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {advantage.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-800">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-96">
                    <Image
                      src={advantage.image}
                      alt={advantage.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </Card>
              </div>
            </div>
          </motion.section>
        );
      })}
    </div>
  );
}