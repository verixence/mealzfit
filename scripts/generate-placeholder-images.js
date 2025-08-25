const fs = require('fs');
const path = require('path');

// This script creates placeholder SVG images for development
// In production, these should be replaced with actual food photos

const createPlaceholderSVG = (text, width = 400, height = 300, bgColor = '#f0f0f0', textColor = '#666') => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="${width}" height="${height}" fill="${bgColor}"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-family="Arial, sans-serif" font-size="16">${text}</text>
</svg>`;
};

const images = [
  // Menu items
  { name: 'roti-aloo-egg.jpg', text: 'Roti + Aloo + Egg' },
  { name: 'masoor-dal-roti.jpg', text: 'Masoor Dal Roti' },
  { name: 'bhendi-fry-roti.jpg', text: 'Bhendi Fry Roti' },
  { name: 'spicy-aloo-roti.jpg', text: 'Spicy Aloo Roti' },
  { name: 'curd-millets-pomegranate.jpg', text: 'Curd Millets' },
  { name: 'cozy-millet-khichdi.jpg', text: 'Millet Khichdi' },
  { name: 'chia-pudding-nuts.jpg', text: 'Chia Pudding' },
  { name: 'dark-chocolate-bites.jpg', text: 'Dark Chocolate' },
  { name: 'chicken-delight-bowl.jpg', text: 'Chicken Bowl' },
  { name: 'power-sprouts-salad.jpg', text: 'Sprouts Salad' },
  { name: 'chicken-oats-haleem.jpg', text: 'Chicken Haleem' },
  { name: 'caramelized-onion-chicken.jpg', text: 'Chicken Rice' },
  { name: 'spinach-smoothie.jpg', text: 'Spinach Smoothie' },
  { name: 'chocolate-makhana-smoothie.jpg', text: 'Chocolate Smoothie' },
  { name: 'strawberry-pineapple-fusion.jpg', text: 'Fruit Smoothie' },
  { name: 'chia-pudding-dessert.jpg', text: 'Chia Pudding' },
  { name: 'nutri-cream-dessert.jpg', text: 'Nutri Cream' },
  { name: 'dark-chocolate-dessert.jpg', text: 'Dark Chocolate' },
  
  // Page images
  { name: 'about-mission.jpg', text: 'Our Mission', width: 600, height: 400 },
  { name: 'kitchen-prep.jpg', text: 'Kitchen Prep', width: 600, height: 400 },
  { name: 'homely-meals.jpg', text: 'Homely Meals', width: 600, height: 400 },
  { name: 'diabetic-friendly.jpg', text: 'Diabetic Friendly', width: 600, height: 400 },
  { name: 'fitness-meals.jpg', text: 'Fitness Meals', width: 600, height: 400 },
  { name: 'fresh-ingredients.jpg', text: 'Fresh Ingredients', width: 600, height: 400 },
  { name: 'flexible-ordering.jpg', text: 'Flexible Ordering', width: 600, height: 400 },
  { name: 'fast-delivery.jpg', text: 'Fast Delivery', width: 600, height: 400 },
  
  // Avatars
  { name: 'avatar-karan.jpg', text: 'K', width: 100, height: 100, bgColor: '#00A884' },
  { name: 'avatar-anusha.jpg', text: 'A', width: 100, height: 100, bgColor: '#FFB020' },
  { name: 'avatar-ramesh.jpg', text: 'R', width: 100, height: 100, bgColor: '#121417' },
];

const ugcImages = [
  { name: 'customer-meal-1.jpg', text: 'Customer Meal 1' },
  { name: 'customer-meal-2.jpg', text: 'Customer Meal 2' },
  { name: 'customer-meal-3.jpg', text: 'Customer Meal 3' },
  { name: 'customer-meal-4.jpg', text: 'Customer Meal 4' },
  { name: 'customer-meal-5.jpg', text: 'Customer Meal 5' },
  { name: 'customer-meal-6.jpg', text: 'Customer Meal 6' },
];

// Create main images
images.forEach(image => {
  const svg = createPlaceholderSVG(
    image.text, 
    image.width || 400, 
    image.height || 300,
    image.bgColor,
    image.textColor
  );
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'images', image.name), svg);
});

// Create UGC images
ugcImages.forEach(image => {
  const svg = createPlaceholderSVG(image.text, 400, 300, '#f8f9fa', '#666');
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'images', 'ugc', image.name), svg);
});

console.log('✅ Placeholder images generated successfully!');
console.log('📝 Replace these with actual food photos for production.');