"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import menuData from "@/data/menu.json";

const getBadgeVariant = (tag: string) => {
  switch (tag) {
    case "high-protein":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "low-gi":
      return "bg-white text-green-800 border-green-200";
    case "sugar-free":
      return "bg-purple-100 text-purple-800 border-purple-200";
    case "fiber-rich":
      return "bg-white text-gray-800 border-gray-200";
    case "diabetic-friendly":
      return "bg-emerald-100 text-emerald-800 border-emerald-200";
    default:
      return "bg-white text-gray-800 border-gray-200";
  }
};

export function MenuPreview() {
  // Get top 6 items across different categories
  const featuredItems = menuData.items.slice(0, 6);

  return (
    <section id="menu-preview" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-gray-900 mb-4">
            Featured Menu
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our most popular healthy, homely, and fitness-focused meals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
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
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.shortDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 2).map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className={`text-xs ${getBadgeVariant(tag)}`}
                      >
                        {tag.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="flex gap-2">
                      {process.env.NEXT_PUBLIC_SWIGGY_URL && (
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="text-xs border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
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
                          className="text-xs bg-blue-600 hover:bg-blue-700"
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
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
            <Link href="/menu">View Full Menu</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}