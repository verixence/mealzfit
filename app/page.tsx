import { Hero } from "@/components/hero";
import { CategoryPills } from "@/components/category-pills";
import { MenuPreview } from "@/components/menu-preview";
import { WhyMealzfit } from "@/components/why-mealzfit";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryPills />
      <MenuPreview />
      <WhyMealzfit />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
