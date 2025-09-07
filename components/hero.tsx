"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Heart, Zap } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu-preview");
    menuSection?.scrollIntoView({ behavior: "smooth" });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const floatAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  const sparkleAnimation = {
    scale: [1, 1.2, 1],
    rotate: [0, 180, 360],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/HomepageBanner.png"
          alt="Delicious healthy meals with smoothies"
          fill
          className="object-cover object-center scale-105 hover:scale-110 transition-transform duration-700 ease-out"
          priority
          sizes="100vw"
        />
        {/* Softer gradient overlay for better text readability and warmth */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/30 via-green-800/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 via-transparent to-green-800/10" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/15 via-transparent to-transparent" />
      </div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-24 h-24 bg-green-300/25 rounded-full blur-xl shadow-lg"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 left-10 w-36 h-36 bg-green-300/20 rounded-full blur-xl shadow-lg"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-20 h-20 bg-emerald-400/25 rounded-full blur-lg shadow-lg"
        animate={{
          x: [0, 20, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Icons */}
      <motion.div
        className="absolute top-32 left-20 hidden lg:block"
        animate={floatAnimation}
      >
        <motion.div
          animate={sparkleAnimation}
          className="p-3 bg-white/10 backdrop-blur-sm rounded-full"
        >
          <Sparkles className="h-6 w-6 text-green-300" />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-20 hidden lg:block"
        animate={{
          y: [10, -10, 10],
          transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="p-3 bg-white/10 backdrop-blur-sm rounded-full"
        >
          <Heart className="h-6 w-6 text-red-300" />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-10 hidden md:block"
        animate={{
          y: [-15, 15, -15],
          x: [0, 10, 0],
          transition: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <motion.div
          animate={{
            rotate: [0, 360],
            transition: {
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }
          }}
          className="p-3 bg-white/10 backdrop-blur-sm rounded-full"
        >
          <Zap className="h-6 w-6 text-green-300" />
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-display text-white mb-6 leading-tight"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              >
                Healthy Living
              </motion.span>
              
              <motion.div 
                className="flex items-center justify-center gap-4 my-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 1, ease: "backOut" }}
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-green-300" />
                </motion.div>
              </motion.div>
              
              <motion.span
                className="block text-white"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
              >
                Starts Here
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className="mb-10">
            <motion.p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium"
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              Choose Health Choose Happiness
              <br className="hidden sm:block" />
              <span className="text-green-300 font-bold">Mealzfit</span> - Nourish Your Body Naturally
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            {(process.env.NEXT_PUBLIC_SWIGGY_URL || true) && (
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white min-w-[220px] h-14 text-lg font-bold shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 rounded-full border-2 border-orange-300/50"
                >
                  <a
                    href={process.env.NEXT_PUBLIC_SWIGGY_URL || "https://www.swiggy.com/direct/brand/681253?source=swiggy-direct&subSource=generic"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <motion.span
                      animate={{
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      🛵
                    </motion.span>
                    Order on Swiggy
                  </a>
                </Button>
              </motion.div>
            )}
            
            {(process.env.NEXT_PUBLIC_ZOMATO_URL || true) && (
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white min-w-[220px] h-14 text-lg font-bold shadow-2xl hover:shadow-red-500/25 transition-all duration-300 rounded-full border-2 border-red-300/50"
                >
                  <a
                    href={process.env.NEXT_PUBLIC_ZOMATO_URL || "https://www.zomato.com/hyderabad/mealzfit-masab-tank/order"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <motion.span
                      animate={{
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      🍽️
                    </motion.span>
                    Order on Zomato
                  </a>
                </Button>
              </motion.div>
            )}
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.button
            onClick={scrollToMenu}
            className="group flex flex-col items-center justify-center space-y-2 text-white/80 hover:text-white transition-colors mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.span 
              className="text-sm sm:text-base font-medium"
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}
            >
              Browse Our Menu
            </motion.span>
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-colors"
            >
              <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      {/* Cute Sparkle Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-300/60"
            initial={{
              opacity: 0,
              scale: 0
            }}
            animate={{
              y: [-20, -120],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 8 + 12}px`
            }}
          >
            ✨
          </motion.div>
        ))}
        {/* Cute food emojis floating around */}
        {['🥗', '🥤', '🍓', '🥑', '🌱', '💚'].map((emoji, i) => (
          <motion.div
            key={`emoji-${i}`}
            className="absolute text-2xl"
            initial={{
              opacity: 0.7,
              scale: 0.8
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, Math.random() * 10 - 5, 0],
              scale: [0.8, 1.1, 0.8]
            }}
            transition={{
              duration: Math.random() * 3 + 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>
    </section>
  );
}