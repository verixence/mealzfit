"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import siteData from "@/data/site.json";

export function FAQ() {
  return (
    <section className="py-16">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Find answers to common questions about our meals, ingredients, and delivery process.
        </p>
      </motion.div>

      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible className="w-full">
          {siteData.faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left hover:text-green-600 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-600 mb-4">
          Have a question that's not answered here?
        </p>
        <p className="text-sm text-gray-600">
          Contact us at{" "}
          <a
            href={`mailto:${siteData.email}`}
            className="text-green-600 hover:text-green-700 transition-colors"
          >
            {siteData.email}
          </a>{" "}
          or call us at{" "}
          <a
            href={`tel:${siteData.phones[0]}`}
            className="text-green-600 hover:text-green-700 transition-colors"
          >
            {siteData.phones[0]}
          </a>
        </p>
      </motion.div>
    </section>
  );
}