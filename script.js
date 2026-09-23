//Products
const products = [
  //Loop to Loop
  {
    id: 1,
    name: "Rose Cardigan",
    category: "Wearable, crochet, rose, Loop to Loop",
    price: "$130 (Price adjusted for size)",
    image: "images/bluepinkrosesweater.jpeg",
  },
  {
    id: 2,
    name: "Cup Cozy",
    category: "Home, Cup, Cozy, Winter, Loop to Loop, crochet",
    price: "$5",
    image: "images/greencupcozy.jpeg",
  },
  {
    id: 3,
    name: "Large Tote Bag",
    category: "Bag, tote, brown, Loop to Loop, crochet",
    price: "$45",
    image: "images/browncrochettote.jpeg",
  },
  {
    id: 4,
    name: "3pc Vase & Trinket tray Set",
    category: "Ceramic, Eco Resin, Home, Brown, Loop to Loop",
    price: "$30",
    image: "images/brownecoresin.jpeg",
  },
  {
    id: 5,
    name: "Moon Keychain",
    category: "Keychain, crochet,  Loop to Loop, moon, yellow, small",
    price: "$5",
    image: "images/moonkeychain.jpeg",
  },
  {
    id: 5,
    name: "Rose Bouquet Keychain",
    category: "Keychain, Loop to Loop, rose, flower, medium, crochet",
    price: "$10",
    image: "images/rosebouquetkeychain.jpeg",
  },
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
    <img src= ${product.image} alt=${product.name} width="200" height"200
    ">
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
