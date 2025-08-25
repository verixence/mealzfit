"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, CheckCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("Form submitted:", data);
      setIsSubmitted(true);
      reset();
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              Message Sent Successfully!
            </h3>
            <p className="text-green-700">
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-display">Send us a Message</CardTitle>
        <p className="text-gray-600">
          Have a question or special request? Fill out the form below and we'll get back to you soon.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                Name *
              </label>
              <Input
                id="name"
                {...register("name")}
                className={errors.name ? "border-red-500" : ""}
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                Phone *
              </label>
              <Input
                id="phone"
                type="tel"
                {...register("phone")}
                className={errors.phone ? "border-red-500" : ""}
                placeholder="+91 98765 43210"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
              Email *
            </label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              className={errors.email ? "border-red-500" : ""}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
              Message *
            </label>
            <Textarea
              id="message"
              {...register("message")}
              className={`min-h-[120px] ${errors.message ? "border-red-500" : ""}`}
              placeholder="Tell us about your dietary preferences, special requirements, bulk orders, or any questions you have..."
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            * Required fields. We respect your privacy and will never share your information.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}