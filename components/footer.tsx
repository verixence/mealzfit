import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import siteConfig from "@/data/site.json";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold font-display text-white">
              Mealzfit
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              Eat Smart. Live Strong. Stay Fit with Mealzfit.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/menu" className="text-sm text-gray-300 hover:text-green-400 transition-colors">
                Menu
              </Link>
              <Link href="/about" className="text-sm text-gray-300 hover:text-green-400 transition-colors">
                About
              </Link>
              <Link href="/why-mealzfit" className="text-sm text-gray-300 hover:text-green-400 transition-colors">
                Why Mealzfit
              </Link>
              <Link href="/testimonials" className="text-sm text-gray-300 hover:text-green-400 transition-colors">
                Testimonials
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-400" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-gray-300 hover:text-green-400 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
              {siteConfig.phones.map((phone, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-green-400" />
                  <a
                    href={`tel:${phone}`}
                    className="text-sm text-gray-300 hover:text-green-400 transition-colors"
                  >
                    {phone}
                  </a>
                </div>
              ))}
              <p className="text-sm text-gray-300">
                Serving: {siteConfig.city}
              </p>
            </div>
          </div>

          {/* Social & Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4">
              {process.env.NEXT_PUBLIC_INSTAGRAM_URL && (
                <a
                  href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              )}
              {process.env.NEXT_PUBLIC_FACEBOOK_URL && (
                <a
                  href={process.env.NEXT_PUBLIC_FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
              )}
            </div>
            <div className="space-y-2">
              <Link href="/privacy" className="block text-sm text-gray-300 hover:text-green-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-sm text-gray-300 hover:text-green-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © 2025 Mealzfit. All Rights Reserved.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>Designed by</span>
              <a
                href="https://www.verixence.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/logo.png"
                  alt="Verixence"
                  width={16}
                  height={16}
                  className="object-contain"
                />
                <span className="text-gray-400 hover:text-green-400 transition-colors">Verixence</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}