```javascript name=script.js
const products = [
  { id: 1, name: "Classic Hoodie", price: "$49.99", image: "hoodie.jpg", description: "A cozy, stylish hoodie for all seasons." },
  { id: 2, name: "Vintage T-Shirt", price: "$29.99", image: "tshirt.jpg", description: "A retro-styled t-shirt for everyday comfort." },
  { id: 3, name: "Denim Jacket", price: "$79.99", image: "jacket.jpg", description: "A classic denim jacket that never goes out of style." },
];

let cart = [];
let user = null;

function displayProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Clear the existing list

  products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <p>${product.description}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productList.appendChild(productCard);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = ""; // Clear the existing cart items

  cart.forEach(product => {
    const cartItem = document.createElement("li");
    cartItem.textContent = `${product.name}: ${product.price}`;
    cartList.appendChild(cartItem);
  });
}

function checkout() {
  if (!user) {
    alert("Please log in to proceed with checkout.");
    return;
  }

  const shippingInfo = prompt("Enter shipping info (Name, Address, City, Zip)");
  if (shippingInfo) {
    alert(`Order confirmed! Shipping info: ${shippingInfo}`);
    cart = []; // Clear the cart
    updateCart();
  }
}

function toggleLoginSignup() {
  const form = document.getElementById("signup-login-form");
  const formTitle = document.getElementById("form-title");

  if (form.style.display === "none" || form.style.display === "") {
    form.style.display = "block";
    formTitle.textContent = user ? "Log Out" : "Signup";
  } else {
    form.style.display = "none";
  }
}

function submitForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please provide both email and password.");
    return;
  }

  if (user) {
    // Logout the user
    user = null;
    document.getElementById("user-info").textContent = "You are logged out";
    toggleLoginSignup();
  } else {
    // Signup the user
    user = { email, password };
    document.getElementById("user-info").textContent = `Logged in as ${email}`;
    toggleLoginSignup();
  }
}

// Initial setup
displayProducts();
```
