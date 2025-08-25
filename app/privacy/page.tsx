import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Mealzfit",
  description: "Mealzfit's privacy policy outlines how we collect, use, and protect your personal information when you use our food delivery services.",
  robots: "noindex, nofollow",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background pt-8 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-display text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            Last updated: January 1, 2025
          </p>
        </div>

        <div className="prose prose-gray max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Mealzfit, we respect your privacy and are committed to protecting your personal data. 
                This privacy policy explains how we collect, use, and safeguard your information when you 
                use our services through our website or third-party delivery platforms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Name and contact details (phone number, email address)</li>
                    <li>Delivery address information</li>
                    <li>Order history and preferences</li>
                    <li>Communication records with our customer service</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Technical Information</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>IP address and device information</li>
                    <li>Browser type and version</li>
                    <li>Website usage data and analytics</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Process and fulfill your food orders</li>
                <li>Communicate with you about your orders and our services</li>
                <li>Improve our menu offerings and customer experience</li>
                <li>Comply with legal obligations and resolve disputes</li>
                <li>Send you promotional communications (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell your personal data. We may share your information with:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Delivery partners (Swiggy, Zomato) to fulfill your orders</li>
                <li>Payment processors for secure transaction processing</li>
                <li>Service providers who help us operate our business</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal 
                data against unauthorized access, alteration, disclosure, or destruction. However, no 
                internet transmission is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Access and review your personal data</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal data</li>
                <li>Opt-out of promotional communications</li>
                <li>File a complaint with relevant data protection authorities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us at:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p>Email: mealzfit.go@gmail.com</p>
                <p>Phone: +91 87900 90505</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}