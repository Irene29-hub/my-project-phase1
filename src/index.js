let cart = [];
let ownproducts = [];

function displayProducts(products = allProducts) {
  const postlist = document.getElementById("displayProducts");
  postlist.innerHTML = "";

  products.forEach(product => {
    const postdiv = document.createElement("div");
    postdiv.className = "post-preview";

const titleElement = document.createElement("h3");
titleElement.textContent = product.title;

const imgElement = document.createElement("img");
imgElement.src = product.thumbnail;
imgElement.alt = product.title;
imgElement.width = 200;

const priceElement = document.createElement("p");
priceElement.textContent = `Price: Ksh${product.price}`;

const addButton = document.createElement("button");
addButton.textContent = "Add to Cart";
addButton.addEventListener("click", (e) => {
  e.stopPropagation();
  addToCart(product);
});

postdiv.addEventListener("click", () => handlePostClick(product.id));
postdiv.appendChild(titleElement);
postdiv.appendChild(imgElement);
postdiv.appendChild(priceElement);
postdiv.appendChild(addButton);
postlist.appendChild(postdiv);
  });
}

function fetchDresses() {
  fetch('https://dummyjson.com/products/category/womens-dresses')
    .then(response => {
      if (!response.ok) throw new Error("response not ok");
      return response.json();
    })
    .then(post => {
      allProducts = post.products;
      displayProducts();
    })
    .catch(error => {
      alert("Sorry, something went wrong while fetching dresses.");
      console.error(error);
    });
}

function addToCart(product) {
  cart.push(product);
  updateCartTotal();
  alert(`${product.title} added to cart!`);
}

function updateCartTotal() {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById("cart-total").textContent = total.toFixed(2);
}

function handlePostClick(id) {
  alert("You clicked product ID: " + id);
}

function handleSearchInput(e) {
  const searchTerm = e.target.value.toLowerCase();
  const filtered = allProducts.filter(product =>
    product.title.toLowerCase().includes(searchTerm)
  );
  displayProducts(filtered);
}

function handleThemeToggle(e) {
  document.body.classList.toggle("dark-mode", e.target.checked);
}

window.onload = () => {
  fetchDresses();

  document.getElementById("searchInput").addEventListener("input", handleSearchInput);
  document.getElementById("themeToggle").addEventListener("change", handleThemeToggle);
};