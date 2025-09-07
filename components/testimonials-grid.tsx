"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const ugcImages = [
  {
    id: 1,
    src: "/Customer Meal 1.png",
    alt: "Customer enjoying Mealzfit healthy meal",
    caption: "Perfect post-workout meal! 💪"
  },
  {
    id: 2,
    src: "/Customer Meal 2.png",
    alt: "Diabetic-friendly meal from Mealzfit",
    caption: "My go-to comfort food now 🥰"
  },
  {
    id: 3,
    src: "/Customer Meal 3.png",
    alt: "Fresh healthy meal from Mealzfit",
    caption: "Morning energy boost! 🌱"
  },
  {
    id: 4,
    src: "/Customer Meal 4.png",
    alt: "Homely healthy meal from Mealzfit",
    caption: "Tastes just like mom's cooking ❤️"
  },
  {
    id: 5,
    src: "/Customer Meal 5.png",
    alt: "Protein-rich healthy meal from Mealzfit",
    caption: "Healthy never tasted this good! 🥗"
  },
  {
    id: 6,
    src: "/Customer Meal 6.png",
    alt: "Nutritious meal from Mealzfit",
    caption: "Guilt-free and delicious! 🍮"
  },
];

export function TestimonialsGrid() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-gray-900 mb-4">
          Shared by Our Community
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Real photos from real customers enjoying their Mealzfit meals. 
          Tag us @mealzfit to be featured!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ugcImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="h-full"
          >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow group bg-white border-gray-200">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-600 text-lg mb-4">
          Share your Mealzfit moments with us!
        </p>
        <div className="flex justify-center space-x-4">
          {process.env.NEXT_PUBLIC_INSTAGRAM_URL && (
            <a
              href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 transition-colors font-medium"
            >
              @mealzfit
            </a>
          )}
        </div>
      </motion.div>
    </section>
  );
}