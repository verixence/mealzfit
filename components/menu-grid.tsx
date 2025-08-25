"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import menuData from "@/data/menu.json";
import type { MenuItem } from "@/lib/types";
import { NutritionDisplay } from "@/components/nutrition-display";

const getBadgeVariant = (tag: string) => {
  switch (tag) {
    case "high-protein":
      return "bg-white text-green-800 border-green-300";
    case "low-gi":
      return "bg-blue-100 text-blue-800 border-blue-300";
    case "sugar-free":
      return "bg-purple-100 text-purple-800 border-purple-300";
    case "fiber-rich":
      return "bg-white text-gray-800 border-gray-300";
    case "diabetic-friendly":
      return "bg-teal-100 text-teal-800 border-teal-300";
    default:
      return "bg-white text-gray-800 border-gray-300";
  }
};

export function MenuGrid() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = useMemo(() => {
    let items = menuData.items;

    // Filter by category
    if (activeCategory !== "all") {
      items = items.filter(item => item.category === activeCategory);
    }

    // Filter by search term
    if (searchTerm) {
      items = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return items;
  }, [searchTerm, activeCategory]);

  const categories = [
    { id: "all", name: "All Items" },
    ...menuData.categories
  ];

  return (
    <div className="space-y-8">
      {/* Search */}
      <motion.div
        className="relative max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          type="text"
          placeholder="Search menu items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </motion.div>

      {/* Category Tabs */}
      <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 h-auto p-1 bg-white border border-gray-200">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="text-xs sm:text-sm px-2 py-2 data-[state=active]:bg-green-600 data-[state=active]:text-white"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={activeCategory} className="mt-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredItems.map((item: MenuItem, index: number) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="h-full overflow-hidden menu-card bg-white border-gray-200">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
                      {item.shortDescription}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className={`text-xs border ${getBadgeVariant(tag)}`}
                        >
                          {tag.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
                        </Badge>
                      ))}
                      {item.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs bg-white text-gray-600 border-gray-300">
                          +{item.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-center mb-4 pt-3 border-t border-gray-200">
                      <div className="flex gap-2">
                        {process.env.NEXT_PUBLIC_SWIGGY_URL && (
                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="text-xs border-gray-300 text-gray-600 hover:bg-white"
                          >
                            <a
                              href={process.env.NEXT_PUBLIC_SWIGGY_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Swiggy
                            </a>
                          </Button>
                        )}
                        {process.env.NEXT_PUBLIC_ZOMATO_URL && (
                          <Button
                            asChild
                            size="sm"
                            className="text-xs bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
                          >
                            <a
                              href={process.env.NEXT_PUBLIC_ZOMATO_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Zomato
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Inline Nutrition Display */}
                    {item.nutrition && (
                      <NutritionDisplay nutrition={item.nutrition} />
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredItems.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-500 text-lg">
                No items found matching your search criteria.
              </p>
            </motion.div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}