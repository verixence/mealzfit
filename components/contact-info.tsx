import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import siteConfig from "@/data/site.json";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold font-display text-gray-900 mb-4">
          Contact Information
        </h2>
        <p className="text-gray-600 mb-8">
          Reach out to us through any of these channels. We typically respond within 24 hours.
        </p>
      </div>

      <div className="space-y-4">
        {/* Email */}
        <Card className="bg-white border-gray-200">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Phone Numbers */}
        <Card className="bg-white border-gray-200">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <Phone className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <div className="space-y-1">
                  {siteConfig.phones.map((phone, index) => (
                    <div key={index}>
                      <a
                        href={`tel:${phone}`}
                        className="text-gray-600 hover:text-green-600 transition-colors block"
                      >
                        {phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Location */}
        <Card className="bg-white border-gray-200">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Serving</h3>
                <p className="text-gray-600">{siteConfig.city}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Social Media */}
        <Card className="bg-white border-gray-200">
          <CardContent className="p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {process.env.NEXT_PUBLIC_INSTAGRAM_URL && (
                <a
                  href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Instagram className="h-6 w-6 text-green-600" />
                  <span className="sr-only">Instagram</span>
                </a>
              )}
              {process.env.NEXT_PUBLIC_FACEBOOK_URL && (
                <a
                  href={process.env.NEXT_PUBLIC_FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Facebook className="h-6 w-6 text-green-600" />
                  <span className="sr-only">Facebook</span>
                </a>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Business Hours */}
      <Card className="bg-white border-gray-200">
        <CardContent className="p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Business Hours</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Monday - Saturday</span>
              <span className="text-gray-900">8:00 AM - 10:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Sunday</span>
              <span className="text-gray-900">9:00 AM - 9:00 PM</span>
            </div>
            <div className="mt-4 text-xs text-gray-500">
              *Orders accepted through Swiggy & Zomato during platform hours
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}