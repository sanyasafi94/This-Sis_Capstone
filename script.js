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
    id: 6,
    name: "Rose Bouquet Keychain",
    category: "Keychain, Loop to Loop, rose, flower, medium, crochet",
    price: "$10",
    image: "images/rosebouquetkeychain.jpeg",
  },
  //Stardrip Couture Products
  {
    id: 7,
    name: "Pink Peony Bracelet",
    category: "Bracelet, Stardrip, beads, sparkle, jewelry, pink",
    price: "$15",
    image: "images/pinkpeony.jpg",
  },
  {
    id: 8,
    name: "Iridescent Strip Bracelet",
    category: "Bracelet, Stardrip, beads, sparkle, jewelry, clear",
    price: "$15",
    image: "images/iridescent.jpg",
  },
  {
    id: 9,
    name: "Bubble Bracelet",
    category: "Bracelet, Stardrip, beads, sparkle, jewelry, clear",
    price: "$16",
    image: "images/bubble.jpg",
  },
  {
    id: 10,
    name: "Rose Bouquet Keychain",
    category: "Keychain, Loop to Loop, rose, flower, medium, crochet",
    price: "$10",
    image: "images/rosebouquetkeychain.jpeg",
  },
  {
    id: 11,
    name: "Summer Sky Bracelet/Anklet",
    category: "Bracelet, Stardrip, beads, sparkle, jewelry, blue, anklet",
    price: "$20",
    image: "images/summersky.jpg",
  },
  {
    id: 12,
    name: "Dragonfly Butterfly",
    category: "Bracelet, Stardrip, beads, sparkle, jewelry, multi color",
    price: "$20",
    image: "images/dragonfly.jpg",
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
