export type MenuItem = {
  id: string;
  category: 'signature' | 'classic' | 'mocktails' | 'tapas' | 'desserts';
  name: string;
  description: string;
  price: number;
  active?: boolean;
};

export const CATEGORIES: { id: MenuItem['category']; label: string }[] = [
  { id: 'signature', label: 'Signature Cocktails' },
  { id: 'classic', label: 'Classic Cocktails' },
  { id: 'mocktails', label: 'Mocktails' },
  { id: 'tapas', label: 'Tapas' },
  { id: 'desserts', label: 'Desserts' },
];

export const MENU_ITEMS: MenuItem[] = [
  { id: 's1', category: 'signature', name: 'The Lomé Sunset', description: 'Passion fruit, rum, lime, tajin rim, layered pour', price: 8500 },
  { id: 's2', category: 'signature', name: 'Obsidian Mule', description: 'Black vodka, ginger beer, activated charcoal, lime', price: 9000 },
  { id: 's3', category: 'signature', name: 'Penthouse Negroni', description: 'Premium gin, Campari, vermouth, gold leaf garnish', price: 10500 },
  { id: 's4', category: 'signature', name: 'Copper Kiss', description: 'Bourbon, honey syrup, lemon, Angostura bitters, dried orange', price: 9500 },
  { id: 's5', category: 'signature', name: 'Monstera Fizz', description: 'Midori, cucumber, elderflower, sparkling water', price: 8000 },

  { id: 'c1', category: 'classic', name: 'Mojito', description: 'White rum, mint, lime, sugar, soda', price: 7000 },
  { id: 'c2', category: 'classic', name: 'Cosmopolitan', description: 'Vodka, triple sec, cranberry, lime', price: 7500 },
  { id: 'c3', category: 'classic', name: 'Margarita', description: 'Tequila, triple sec, lime, salt rim', price: 7500 },
  { id: 'c4', category: 'classic', name: 'Whisky Sour', description: 'Bourbon, lemon, sugar, egg white foam', price: 8000 },

  { id: 'm1', category: 'mocktails', name: 'Sahel Sunrise', description: 'Hibiscus, ginger, pineapple, lime', price: 4500 },
  { id: 'm2', category: 'mocktails', name: 'Tropical Calm', description: 'Mango, coconut water, mint, soda', price: 4500 },
  { id: 'm3', category: 'mocktails', name: 'Golden Hour', description: 'Passion fruit, turmeric, honey, sparkling water', price: 5000 },

  { id: 't1', category: 'tapas', name: 'Tuna Tataki', description: 'Sesame-crusted seared tuna, ponzu, microgreens', price: 12000 },
  { id: 't2', category: 'tapas', name: 'Wagyu Crostini', description: 'Thin-sliced wagyu, truffle mayo, brioche toast', price: 15000 },
  { id: 't3', category: 'tapas', name: 'Burrata & Heirloom Tomato', description: 'Olive oil, basil oil, sea salt, sourdough', price: 10000 },
  { id: 't4', category: 'tapas', name: 'Gambas al Ajillo', description: 'Garlic prawns in olive oil, chili, crusty bread', price: 13500 },
  { id: 't5', category: 'tapas', name: 'Grilled Halloumi', description: "Honey, za'atar, lemon, fresh herbs", price: 9000 },
  { id: 't6', category: 'tapas', name: 'Truffle Fries', description: 'Double-fried, truffle oil, parmesan, herbs', price: 6500 },

  { id: 'd1', category: 'desserts', name: 'Dark Chocolate Fondant', description: 'Warm center, vanilla bean ice cream', price: 7500 },
  { id: 'd2', category: 'desserts', name: 'Passion Fruit Panna Cotta', description: 'Mango coulis, edible flowers', price: 6500 },
  { id: 'd3', category: 'desserts', name: 'Cheese Selection', description: '3 curated cheeses, honey, crackers', price: 11000 },
];

export const TESTIMONIALS = [
  { quote: 'The most intimate rooftop in all of Lomé. Every detail is a statement.', author: 'Kwame A., Accra' },
  { quote: "I've been to rooftops across four continents. The Penthouse is different.", author: 'Sophie M., Paris' },
  { quote: "An evening here doesn't end when you leave.", author: 'David O., Lagos' },
];

export const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800&q=80',
  'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=80',
  'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80',
  'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&q=80',
  'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80',
  'https://images.unsplash.com/photo-1574096145257-fc4d44935f9c?w=800&q=80',
  'https://images.unsplash.com/photo-1519214605650-76a613ee3245?w=800&q=80',
  'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&q=80',
  'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
  'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&q=80',
  'https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?w=800&q=80',
];

export const SITE = {
  whatsapp: '22871923333',
  whatsappDisplay: '+228 71 92 33 33',
  email: 'hello@thepenthouse.tg',
  address: 'Lomé, Togo',
  hours: 'Tuesday–Sunday / 18:00 – 02:00',
  tagline: 'Above the city. Beyond the ordinary.',
};
