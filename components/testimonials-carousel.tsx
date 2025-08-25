"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import siteData from "@/data/site.json";

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = siteData.testimonials;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg">
            Hear from the people who have made Mealzfit part of their healthy lifestyle
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-0 shadow-lg">
                <CardContent className="p-8 sm:p-12 text-center">
                  <Quote className="h-12 w-12 text-orange-600 mx-auto mb-6" />
                  <blockquote className="text-xl sm:text-2xl text-gray-900 mb-8 italic font-medium">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="relative w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center overflow-hidden">
                      {testimonials[currentIndex].avatar ? (
                        <Image
                          src={testimonials[currentIndex].avatar!}
                          alt={testimonials[currentIndex].name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <span className="text-orange-600 font-semibold text-xl">
                          {testimonials[currentIndex].name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-lg text-gray-900">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-gray-600">
                        {testimonials[currentIndex].location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white shadow-md"
            onClick={goToPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white shadow-md"
            onClick={goToNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-orange-600' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}