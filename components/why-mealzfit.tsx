"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  Zap, 
  Dumbbell, 
  Leaf, 
  ShoppingCart, 
  Truck 
} from "lucide-react";

const advantages = [
  {
    icon: Heart,
    title: "Homely Meals",
    description: "Comforting dishes that taste like home",
  },
  {
    icon: Zap,
    title: "Diabetic-Friendly",
    description: "Smartly designed, low-GI options",
  },
  {
    icon: Dumbbell,
    title: "Fitness-Focused",
    description: "High-protein, fiber-rich meals",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "No shortcuts, no junk",
  },
  {
    icon: ShoppingCart,
    title: "Flexible Ordering",
    description: "No subscriptions; order anytime",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Via Swiggy & Zomato",
  },
];

export function WhyMealzfit() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-gray-900 mb-4">
            Why Mealzfit
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Because food is more than calories—it's care, comfort, and confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="h-full text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                      <Icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}