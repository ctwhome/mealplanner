import { writable } from 'svelte/store';

const initialRecipes = [
  {
    name: "Vegan Lentil Curry",
    ingredients: [
      { name: "red lentils", category: "Legumes", place: "Supermarket" },
      { name: "coconut milk", category: "Canned Goods", place: "Supermarket" },
      { name: "curry powder", category: "Spices", place: "Supermarket" },
      { name: "onion", category: "Vegetables", place: "Market" },
      { name: "garlic", category: "Vegetables", place: "Market" },
      { name: "ginger", category: "Vegetables", place: "Market" },
      { name: "spinach", category: "Vegetables", place: "Market" },
      { name: "rice", category: "Grains", place: "Supermarket" }
    ],
    picture: "https://images.unsplash.com/photo-1631294677886-0f3793d3fdb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Quinoa Stuffed Bell Peppers",
    ingredients: [
      { name: "bell peppers", category: "Vegetables", place: "Market" },
      { name: "quinoa", category: "Grains", place: "Supermarket" },
      { name: "black beans", category: "Legumes", place: "Supermarket" },
      { name: "corn", category: "Vegetables", place: "Market" },
      { name: "tomatoes", category: "Vegetables", place: "Market" },
      { name: "cumin", category: "Spices", place: "Supermarket" },
      { name: "chili powder", category: "Spices", place: "Supermarket" },
      { name: "avocado", category: "Fruits", place: "Market" }
    ],
    picture: "https://images.unsplash.com/photo-1621510456681-2330135e5871?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Vegan Buddha Bowl",
    ingredients: [
      { name: "sweet potato", category: "Vegetables", place: "Market" },
      { name: "chickpeas", category: "Legumes", place: "Supermarket" },
      { name: "kale", category: "Vegetables", place: "Market" },
      { name: "avocado", category: "Fruits", place: "Market" },
      { name: "tahini", category: "Condiments", place: "Supermarket" },
      { name: "lemon juice", category: "Produce", place: "Market" },
      { name: "quinoa", category: "Grains", place: "Supermarket" },
      { name: "cherry tomatoes", category: "Vegetables", place: "Market" }
    ],
    picture: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Mushroom Risotto",
    ingredients: [
      { name: "arborio rice", category: "Grains", place: "Supermarket" },
      { name: "mushrooms", category: "Vegetables", place: "Market" },
      { name: "vegetable broth", category: "Canned Goods", place: "Supermarket" },
      { name: "white wine", category: "Beverages", place: "Liquor Store" },
      { name: "onion", category: "Vegetables", place: "Market" },
      { name: "garlic", category: "Vegetables", place: "Market" },
      { name: "nutritional yeast", category: "Condiments", place: "Health Food Store" },
      { name: "thyme", category: "Herbs", place: "Market" }
    ],
    picture: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
  }
];

export const recipes = writable(initialRecipes);
export const mealPlan = writable({
  Monday: [],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: [],
  Sunday: []
});