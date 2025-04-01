const products = [
  { id: 1, category: 'Mens', name: "Classic Hoodie", price: "$49.99", image: "images/hoodie.jpg", description: "A cozy, stylish hoodie for all seasons.", reviews: 5, details: "Made from high-quality cotton, available in various sizes." },
  { id: 2, category: 'Mens', name: "Vintage T-Shirt", price: "$29.99", image: "images/tshirt.jpg", description: "A retro-styled t-shirt for everyday comfort.", reviews: 4, details: "100% cotton, available in multiple colors." },
  { id: 3, category: 'Mens', name: "Denim Jacket", price: "$79.99", image: "images/jacket.jpg", description: "A classic denim jacket that never goes out of style.", reviews: 5, details: "Durable denim, perfect for all seasons." },
  { id: 4, category: 'Womens', name: "Sports Shoes", price: "$99.99", image: "images/shoes.jpg", description: "Comfortable and stylish sports shoes for all activities.", reviews: 5, details: "Lightweight and breathable, available in multiple sizes." },
  { id: 5, category: 'Womens', name: "Leather Belt", price: "$19.99", image: "images/belt.jpg", description: "A premium leather belt to complement any outfit.", reviews: 4, details: "Genuine leather, adjustable length." },
  { id: 6, category: 'Kids', name: "Summer Hat", price: "$14.99", image: "images/hat.jpg", description: "A stylish hat perfect for summer days.", reviews: 4, details: "Breathable material, one size fits all." },
  { id: 7, category: 'Accessories', name: "Wrist Watch", price: "$149.99", image: "images/watch.jpg", description: "A luxurious wrist watch with a classic design.", reviews: 5, details: "Water-resistant, available in various styles." },
  { id: 8, category: 'Accessories', name: "Sunglasses", price: "$24.99", image: "images/sunglasses.jpg", description: "Trendy sunglasses to protect your eyes and enhance your style.", reviews: 4, details: "UV protection, available in multiple colors." },
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
    productCard.classList.add("col-md-3");
    productCard.innerHTML = `
      <div class="card mb-4">
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.price}</p>
          <p class="card-text">${product.description}</p>
          <a href="product.html?id=${product.id}" class="btn btn-primary">View Details</a>
        </div>
      </div>
    `;
    productList.appendChild(productCard);
  });
}

function filterProducts
