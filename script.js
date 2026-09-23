//Products
const products = [
  {
    id: 1,
    name: "Printed Cotton Tote Bag",
    category: "Bags",
    price: "$22.00",
    image: "images/handmade.jpg",
  },
  {
    id: 2,
    name: "Crochet Coaster Set",
    category: "Home Goods",
    price: "$15.00",
  },
  {
    id: 3,
    name: "Chunky Crochet Flower Cardigan",
    category: "Apparel",
    price: "$65.00",
  },
  { id: 4, name: "Amethyst Bracelet", category: "Jewelry", price: "$20.00" },
  { id: 5, name: "Sticker Sheet", category: "Stationary", price: "$10.00" },
];

const productGrid = document.getElementById("productGrid");
const productImg = document.getElementById("productImg");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

//Function for products
function displayProducts(items) {
  productGrid.innerHTML = "";
  if (items.length === 0) {
    noResults.classList.remove("hidden");
    return;
  }
  noResults.classList.add("hidden");
  items.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
    <img src= ${product.image} alt=${product.name} width="500" height"600">
      <h3>${product.name}</h3>
      <p class="price">${product.price}</p>
      <button>See item</button>
    `;
    productGrid.appendChild(card);
  });
}

//Event Listener
searchInput.addEventListener("input", (e) => {
  const searchItem = e.target.value.toLowerCase().trim();
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchItem) ||
      product.category.toLowerCase().includes(searchItem)
  );
  displayProducts(filteredProducts);
});

displayProducts(products);
