// src/data/productData.js

import fruitsCategory from "../assets/images/Fruits_category.PNG";
import dairyCategory from "../assets/images/dairy_category.PNG";
import cleaningCategory from "../assets/images/cleaning_category.PNG";
import drinksCategory from "../assets/images/drinks_category.PNG";

const products = [
  // Fruits & Vegetables
  {
    id: 1,
    name: "Bananas",
    category: "Fruits & Vegetables",
    price: 1.99,
    image: fruitsCategory,
    isOffer: false,
  },
  {
    id: 2,
    name: "Apples",
    category: "Fruits & Vegetables",
    price: 2.49,
    image: fruitsCategory,
    isOffer: true,
  },
  {
    id: 3,
    name: "Tomatoes",
    category: "Fruits & Vegetables",
    price: 1.79,
    image: fruitsCategory,
    isOffer: true,
  },
  {
    id: 4,
    name: "Carrots",
    category: "Fruits & Vegetables",
    price: 1.29,
    image: fruitsCategory,
    isOffer: false,
  },

  // Dairy & Eggs
  {
    id: 5,
    name: "Milk",
    category: "Dairy & Eggs",
    price: 0.99,
    image: dairyCategory,
    isOffer: false,
  },
  {
    id: 6,
    name: "Cheese",
    category: "Dairy & Eggs",
    price: 3.49,
    image: dairyCategory,
    isOffer: false,
  },
  {
    id: 7,
    name: "Yogurt",
    category: "Dairy & Eggs",
    price: 1.19,
    image: dairyCategory,
    isOffer: true,
  },
  {
    id: 8,
    name: "Eggs (12 pack)",
    category: "Dairy & Eggs",
    price: 2.29,
    image: dairyCategory,
    isOffer: false,
  },

  // Household Cleaning
  {
    id: 9,
    name: "Dish Soap",
    category: "Household Cleaning",
    price: 1.99,
    image: cleaningCategory,
    isOffer: false,
  },
  {
    id: 10,
    name: "Laundry Detergent",
    category: "Household Cleaning",
    price: 4.99,
    image: cleaningCategory,
    isOffer: false,
  },
  {
    id: 11,
    name: "All-Purpose Cleaner",
    category: "Household Cleaning",
    price: 3.49,
    image: cleaningCategory,
    isOffer: true,
  },
  {
    id: 12,
    name: "Paper Towels",
    category: "Household Cleaning",
    price: 2.99,
    image: cleaningCategory,
    isOffer: false,
  },

  // Drinks & Snacks
  {
    id: 13,
    name: "Cola Soda",
    category: "Drinks & Snacks",
    price: 1.49,
    image: drinksCategory,
    isOffer: false,
  },
  {
    id: 14,
    name: "Orange Juice",
    category: "Drinks & Snacks",
    price: 2.19,
    image: drinksCategory,
    isOffer: false,
  },
  {
    id: 15,
    name: "Potato Chips",
    category: "Drinks & Snacks",
    price: 1.99,
    image: drinksCategory,
    isOffer: true,
  },
  {
    id: 16,
    name: "Chocolate Bar",
    category: "Drinks & Snacks",
    price: 1.29,
    image: drinksCategory,
    isOffer: true,
  },
];

export default products;
