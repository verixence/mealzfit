"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-500 via-green-600 to-green-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
            Because food is more than calories—it's care, comfort, and confidence.
          </h2>
          <p className="text-orange-100 text-lg mb-8">
            Ready to start your healthy eating journey? Order now and taste the difference.
          </p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {process.env.NEXT_PUBLIC_SWIGGY_URL && (
              <Button
                asChild
                size="lg"
                className="min-w-[200px] bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a
                  href={process.env.NEXT_PUBLIC_SWIGGY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order on Swiggy
                </a>
              </Button>
            )}
            {process.env.NEXT_PUBLIC_ZOMATO_URL && (
              <Button
                asChild
                size="lg"
                className="min-w-[200px] bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a
                  href={process.env.NEXT_PUBLIC_ZOMATO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order on Zomato
                </a>
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}