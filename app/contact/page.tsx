import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/contact-info";
import { FAQ } from "@/components/faq";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch | Mealzfit",
  description: "Contact Mealzfit for questions about our healthy meals, special dietary requirements, or bulk orders. Serving Hyderabad with fresh, nutritious food.",
  keywords: ["contact mealzfit", "customer support", "healthy food questions", "Hyderabad delivery", "dietary requirements"],
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-gray-900 mb-4">
            Get in <span className="text-green-600">Touch</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Have questions about our meals, special dietary requirements, or bulk orders? 
            We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ContactInfo />
          <ContactForm />
        </div>

        <FAQ />
      </div>
    </div>
  );
}