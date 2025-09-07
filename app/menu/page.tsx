import { MenuGrid } from "@/components/menu-grid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Menu Collection - Healthy Food Delivery | Mealzfit",
  description: "Discover our handcrafted selection of healthy, delicious meals made fresh daily. Browse 20+ dishes including rice bowls, salads, smoothies, and more.",
  keywords: ["menu", "healthy food", "diabetic friendly", "fitness meals", "protein", "Hyderabad delivery", "fresh meals"],
};

export default function MenuPage() {
  return <MenuGrid />;
}