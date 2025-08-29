// types
export type LayoutType = "card" | "fullscreen" | "specs";

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  images: string[];
  category: string;
  description: string;
  badges?: string[];
  layoutType: LayoutType;
  variants?: { name: string; options: string[] }[];
  charms?: string[];
};

export type Category = {
  slug: string;
  name: string;
  description: string;
};

// داتا مؤقتة
export const categories: Category[] = [
  { slug: "necklaces", name: "Necklaces", description: "Beautiful necklaces" },
  { slug: "bracelets", name: "Bracelets", description: "Handmade bracelets" },
  { slug: "rings", name: "Rings", description: "Stylish rings" },
  { slug: "shoes", name: "Shoes", description: "All kinds of shoes" },
  { slug: "bags", name: "Bags", description: "Stylish bags" },
];

export const products: Product[] = [
  {
    id: "1",
    slug: "gold-necklace",
    name: "Gold Plated Necklace",
    price: 1200,
    images: ["/images/products/necklace-1.jpg"],
    category: "necklaces",
    description: "Elegant gold plated necklace with a delicate chain and pendant.",
    badges: ["Best Seller"],
    layoutType: "card",
    variants: [
      { name: "Length", options: ["16in", "18in", "20in"] },
      { name: "Color", options: ["Gold", "Rose Gold", "Silver"] }
    ],
    charms: ["initial-a", "pearl-1", "gold-1"]
  },
  {
    id: "2",
    slug: "silver-bracelet",
    name: "Sterling Silver Bracelet",
    price: 850,
    images: ["/images/products/bracelet-1.jpg"],
    category: "bracelets",
    description: "Handcrafted sterling silver bracelet with intricate details.",
    badges: ["New"],
    layoutType: "fullscreen",
    variants: [
      { name: "Size", options: ["Small", "Medium", "Large"] }
    ],
    charms: ["initial-b", "pearl-2", "colored-1"]
  },
  {
    id: "3",
    slug: "pearl-ring",
    name: "Pearl Statement Ring",
    price: 650,
    images: ["/images/products/ring-1.jpg"],
    category: "rings",
    description: "Elegant pearl ring that makes a statement.",
    layoutType: "specs",
    variants: [
      { name: "Size", options: ["5", "6", "7", "8", "9"] }
    ]
  },
  {
    id: "4",
    slug: "nike-air",
    name: "Nike Air",
    price: 2000,
    images: ["/nike.jpg"],
    category: "shoes",
    description: "Popular Nike Air shoes for comfort and style.",
    layoutType: "card"
  },
  {
    id: "5",
    slug: "adidas-runner",
    name: "Adidas Runner",
    price: 1800,
    images: ["/adidas.jpg"],
    category: "shoes",
    description: "Durable Adidas running shoes.",
    layoutType: "card"
  }
];

// functions
export const getProducts = async (): Promise<Product[]> => {
  return Promise.resolve(products);
};

export const getProductBySlug = async (slug: string): Promise<Product | undefined> => {
  return Promise.resolve(products.find(product => product.slug === slug));
};

export const getProductsByCategory = async (slug: string): Promise<Product[]> => {
  return Promise.resolve(products.filter(product =>
    product.category.toLowerCase() === slug.toLowerCase()
  ));
};

export const getCategoryBySlug = async (slug: string): Promise<Category | undefined> => {
  return Promise.resolve(categories.find(c => c.slug.toLowerCase() === slug.toLowerCase()));
};
