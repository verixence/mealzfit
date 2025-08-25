"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Utensils, 
  Heart, 
  Activity, 
  Coffee, 
  IceCream, 
  Grid3X3
} from "lucide-react";

const categories = [
  { 
    id: "all", 
    name: "All Items", 
    href: "/menu",
    icon: Grid3X3,
    description: "View our complete menu",
    color: "from-gray-500 to-gray-600"
  },
  { 
    id: "homely-foods", 
    name: "Homely Foods", 
    href: "/menu?category=homely-foods",
    icon: Utensils,
    description: "Comforting home-style meals",
    color: "from-orange-500 to-red-500"
  },
  { 
    id: "diabetic-friendly", 
    name: "Diabetic-Friendly", 
    href: "/menu?category=diabetic-friendly",
    icon: Heart,
    description: "Low-GI, sugar-conscious options",
    color: "from-blue-500 to-purple-500"
  },
  { 
    id: "fitness-meals", 
    name: "Fitness Meals", 
    href: "/menu?category=fitness-meals",
    icon: Activity,
    description: "High-protein, performance-focused",
    color: "from-green-500 to-emerald-600"
  },
  { 
    id: "smoothies", 
    name: "Smoothies", 
    href: "/menu?category=smoothies",
    icon: Coffee,
    description: "Fresh, nutritious blends",
    color: "from-pink-500 to-rose-500"
  },
  { 
    id: "desserts", 
    name: "Desserts", 
    href: "/menu?category=desserts",
    icon: IceCream,
    description: "Healthy sweet treats",
    color: "from-purple-500 to-pink-500"
  },
];

export function CategoryPills() {
  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-500 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-500 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-blue-500 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 mb-2">
            Explore Our Categories
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Discover the perfect meal for every craving and dietary need
          </p>
        </motion.div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <Link href={category.href}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group-hover:border-gray-300">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1 group-hover:text-gray-700 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Horizontal Scroll */}
        <motion.div
          className="lg:hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0"
                >
                  <Link href={category.href}>
                    <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 min-w-[160px] text-center">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-3 mx-auto`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-medium text-gray-900 text-sm mb-1">
                        {category.name}
                      </h3>
                      <p className="text-gray-500 text-xs">
                        {category.description.split(',')[0]}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link 
            href="/menu"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-medium rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Grid3X3 className="w-4 h-4 mr-2" />
            Browse Full Menu
          </Link>
        </motion.div>
      </div>
    </section>
  );
}