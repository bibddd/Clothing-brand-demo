* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f5;
  color: #333;
}

.container {
  width: 80%;
  margin: 0 auto;
}

.header {
  background-color: #2c3e50;
  color: white;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1 {
  font-size: 2rem;
}

.nav ul {
  display: flex;
  list-style-type: none;
}

.nav ul li {
  margin: 0 15px;
}

.nav ul li a {
  color: white;
  text-decoration: none;
}

.hero {
  background-image: url('hero.jpg');
  background-size: cover;
  background-position: center;
  padding: 100px 0;
  color: white;
  text-align: center;
}

.hero h2 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.hero .btn {
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  font-size: 1.2rem;
}

.hero .btn:hover {
  background-color: #2980b9;
}

.products {
  padding: 50px 0;
}

.products h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
}

.product-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.product-card {
  background-color: white;
  width: 250px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-card h3 {
  font-size: 1.2rem;
  margin: 10px 0;
}

.product-card p {
  color: #7f8c8d;
  margin: 5px 0;
}

.product-card button {
  background-color: #3498db;
  color: white;
  padding: 10px;
  width: 100%;
  border: none;
  cursor: pointer;
}

.product-card button:hover {
  background-color: #2980b9;
}

.cart {
  padding: 50px 0;
}

.cart h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
}

.cart-list {
  list-style-type: none;
  padding: 0;
}

.cart-list li {
  margin: 10px 0;
  padding: 10px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.form-container {
  background-color: #ffffff;
  padding: 20px;
  margin-top: 20px;
  display: none;
  text-align: center;
}

.form-container input {
  padding: 10px;
  margin: 10px 0;
  width: 80%;
  border: 1px solid #ddd;
  border-radius: 5px;
}

button {
  background-color: #2c3e50;
  color: white;
  padding: 10px;
  width: 100px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #34495e;
}

.footer {
  background-color: #2c3e50;
  color: white;
  padding: 20px 0;
  text-align: center;
}
