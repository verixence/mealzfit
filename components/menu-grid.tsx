"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import menuData from "@/data/menu.json";
import type { MenuItem } from "@/lib/types";
import { ArrowRight, Clock, Star } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
} as const;

const itemVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
} as const;

export function MenuGrid() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Modern Hero Section */}
      <div className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 rounded-full px-4 py-2 mb-6"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Star className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">Premium Quality Menu</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                Our Menu
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Collection
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover our handcrafted selection of healthy, delicious meals made fresh daily.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-8 text-slate-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="font-medium">Fresh Ingredients</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="font-medium">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="font-medium">Premium Quality</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Menu Grid Section */}
      <div className="pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {menuData.items.map((item: MenuItem, index: number) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="h-full overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl">
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`Menu item ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Quality Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 backdrop-blur-sm text-slate-700 border-0 shadow-lg">
                        <Star className="h-3 w-3 mr-1 fill-current text-amber-500" />
                        Premium
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6 space-y-4">
                    {/* Order Buttons */}
                    <div className="space-y-3">
                      {item.orderLinks?.swiggy && (
                        <Button
                          asChild
                          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl h-12 font-semibold group/btn"
                        >
                          <a
                            href={item.orderLinks.swiggy}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3"
                          >
                            <span>Order on Swiggy</span>
                            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </a>
                        </Button>
                      )}
                      {item.orderLinks?.zomato && (
                        <Button
                          asChild
                          className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl h-12 font-semibold group/btn"
                        >
                          <a
                            href={item.orderLinks.zomato}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3"
                          >
                            <span>Order on Zomato</span>
                            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </a>
                        </Button>
                      )}
                    </div>
                    
                    {/* Delivery Info */}
                    <div className="pt-3 border-t border-slate-100">
                      <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                        <Clock className="h-4 w-4" />
                        <span>Quick Delivery Available</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-12 border border-slate-200 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Need Help Choosing?
              </h3>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Our team is here to help you find the perfect meal for your taste and dietary preferences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                >
                  <a href="tel:+918790090505" className="flex items-center gap-3">
                    Call Us: +91 87900 90505
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-xl transition-all duration-300 font-semibold"
                >
                  <a href="/contact" className="flex items-center gap-3">
                    Contact Us
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}