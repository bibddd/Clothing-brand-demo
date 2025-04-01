const products = [
  { id: 1, category: 'Mens', name: "Classic Hoodie", price: "$49.99", image: "hoodie.jpg", description: "A cozy, stylish hoodie for all seasons.", reviews: 5, details: "Made from high-quality cotton, available in various sizes." },
  { id: 2, category: 'Mens', name: "Vintage T-Shirt", price: "$29.99", image: "tshirt.jpg", description: "A retro-styled t-shirt for everyday comfort.", reviews: 4, details: "100% cotton, available in multiple colors." },
  { id: 3, category: 'Mens', name: "Denim Jacket", price: "$79.99", image: "jacket.jpg", description: "A classic denim jacket that never goes out of style.", reviews: 5, details: "Durable denim, perfect for all seasons." },
  { id: 4, category: 'Womens', name: "Sports Shoes", price: "$99.99", image: "shoes.jpg", description: "Comfortable and stylish sports shoes for all activities.", reviews: 5, details: "Lightweight and breathable, available in multiple sizes." },
  { id: 5, category: 'Womens', name: "Leather Belt", price: "$19.99", image: "belt.jpg", description: "A premium leather belt to complement any outfit.", reviews: 4, details: "Genuine leather, adjustable length." },
  { id: 6, category: 'Kids', name: "Summer Hat", price: "$14.99", image: "hat.jpg", description: "A stylish hat perfect for summer days.", reviews: 4, details: "Breathable material, one size fits all." },
  { id: 7, category: 'Accessories', name: "Wrist Watch", price: "$149.99", image: "watch.jpg", description: "A luxurious wrist watch with a classic design.", reviews: 5, details: "Water-resistant, available in various styles." },
  { id: 8, category: 'Accessories', name: "Sunglasses", price: "$24.99", image: "sunglasses.jpg", description: "Trendy sunglasses to protect your eyes and enhance your style.", reviews: 4, details: "UV protection, available in multiple colors." },
  // Add more products up to 30
];

let cart = [];
let user = null;

function displayProducts(category = '') {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Clear the existing list

  let filteredProducts = category ? products.filter(product => product.category === category) : products;

  filteredProducts.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("col-md-3", "
