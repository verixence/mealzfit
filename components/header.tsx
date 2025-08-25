"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Why Mealzfit", href: "/why-mealzfit" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glassmorphism">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/Mealzfit Logo (1).png"
              alt="Mealzfit Logo"
              width={300}
              height={100}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {(process.env.NEXT_PUBLIC_SWIGGY_URL || true) && (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <a
                  href={process.env.NEXT_PUBLIC_SWIGGY_URL || "https://www.swiggy.com/restaurant/mealzfit-hyderabad-123456"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order on Swiggy
                </a>
              </Button>
            )}
            {(process.env.NEXT_PUBLIC_ZOMATO_URL || true) && (
              <Button
                asChild
                size="sm"
                className="bg-green-600 hover:bg-green-700"
              >
                <a
                  href={process.env.NEXT_PUBLIC_ZOMATO_URL || "https://www.zomato.com/hyderabad/mealzfit-123456"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order on Zomato
                </a>
              </Button>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white border-0">
              <div className="flex flex-col space-y-3 mt-6">
                <Link
                  href="/"
                  className="mb-6 block text-center"
                  onClick={() => setIsOpen(false)}
                >
                  <Image
                    src="/images/Mealzfit Logo (1).png"
                    alt="Mealzfit Logo"
                    width={200}
                    height={67}
                    className="h-12 w-auto object-contain mx-auto"
                    priority
                  />
                </Link>
                
                <nav className="flex flex-col space-y-4 text-center">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="pt-6 space-y-3">
                  {(process.env.NEXT_PUBLIC_SWIGGY_URL || true) && (
                    <Button
                      asChild
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white border-0"
                    >
                      <a
                        href={process.env.NEXT_PUBLIC_SWIGGY_URL || "https://www.swiggy.com/restaurant/mealzfit-hyderabad-123456"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Order on Swiggy
                      </a>
                    </Button>
                  )}
                  {(process.env.NEXT_PUBLIC_ZOMATO_URL || true) && (
                    <Button
                      asChild
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      <a
                        href={process.env.NEXT_PUBLIC_ZOMATO_URL || "https://www.zomato.com/hyderabad/mealzfit-123456"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Order on Zomato
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}