import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Mealzfit",
  description: "Mealzfit's terms of service outline the conditions for using our healthy food delivery services in Hyderabad.",
  robots: "noindex, nofollow",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background pt-8 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-display text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground">
            Last updated: January 1, 2025
          </p>
        </div>

        <div className="prose prose-gray max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Mealzfit's services, you agree to be bound by these Terms of Service 
                and our Privacy Policy. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Mealzfit provides healthy food preparation and delivery services in Hyderabad through 
                third-party delivery platforms including Swiggy and Zomato. Our services include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Homely, diabetic-friendly, and fitness-focused meal preparation</li>
                <li>Online ordering through partner platforms</li>
                <li>Food delivery through third-party services</li>
                <li>Customer support and meal customization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Ordering and Payment</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Order Placement</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Orders are placed through our partner platforms (Swiggy, Zomato). By placing an order, 
                    you confirm that all information provided is accurate and complete.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Pricing and Payment</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All prices are subject to change without notice. Payment is processed through our 
                    partner platforms according to their terms and conditions.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Delivery and Fulfillment</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Delivery times are estimates and may vary due to factors beyond our control</li>
                <li>We are not responsible for delays caused by third-party delivery services</li>
                <li>You must be available to receive your order at the specified delivery address</li>
                <li>We reserve the right to cancel orders in cases of extreme weather or other emergencies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Food Safety and Allergens</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Food Safety</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We follow strict food safety protocols and hygiene standards. However, you are 
                    responsible for checking the condition of food upon delivery and consuming it promptly.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Allergen Information</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Please inform us of any food allergies or dietary restrictions. While we take care 
                    to prevent cross-contamination, we cannot guarantee that any meal is completely 
                    free from allergens.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cancellation and Refunds</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Cancellation policies are governed by our partner platforms' terms</li>
                <li>Refunds for quality issues will be processed according to our quality guarantee</li>
                <li>We reserve the right to refuse service to customers who abuse our policies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on our website, including recipes, images, and branding, is the property 
                of Mealzfit and is protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, Mealzfit shall not be liable for any indirect, 
                incidental, special, or consequential damages arising from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective 
                immediately upon posting. Your continued use of our services constitutes acceptance 
                of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p>Email: mealzfit.go@gmail.com</p>
                <p>Phone: +91 87900 90505</p>
                <p>Address: Serving Hyderabad</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}