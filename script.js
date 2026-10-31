//Products
const products = [
  //Loop to Loop
  {
    id: 1,
    name: "Rose Cardigan",
    category: "Wearable, crochet, rose, Loop to Loop",
    price: "$130 (Price adjusted for size)",
    image: "images/bluepinkrosesweater.jpeg",
    description:
      "This is a beautiful cardigan that showcases roses all over the front and back. Made with cotton yarn, it has a gorgeous and clean look. This is the perfect addition to your wardrobe especially if you love flowers.",
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
    description:
      "An elegant pink bracelet made with mixed material beads and plastic beads with floral detailing.",
  },
  {
    id: 8,
    name: "Iridescent Strip Bracelet",
    category: "Bracelet, Stardrip, beads, sparkle, jewelry, clear",
    price: "$15",
    image: "images/iridescent.jpg",
    description:
      "An iridescent bracelet made of glass beads and gold plastic beads that adds sparkle to every outfit.",
  },
  {
    id: 9,
    name: "Bubble Bracelet",
    category: "Bracelet, Stardrip, beads, sparkle, jewelry, clear",
    price: "$16",
    image: "images/bubble.jpg",
    description:
      "A whimsical iridescent bracelet inspired by floating bubbles.",
  },

  {
    id: 10,
    name: "Summer Sky Bracelet/Anklet",
    category: "Bracelet, Stardrip, beads, sparkle, jewelry, blue, anklet",
    price: "$20",
    image: "images/summersky.jpg",
    description:
      "A charming sky blue and iridescent piece that can be worn as either a bracelet or anklet.",
  },
  {
    id: 11,
    name: "Dragonfly Butterfly",
    category: "Bracelet, Stardrip, beads, sparkle, jewelry, multi color",
    price: "$20",
    image: "images/dragonfly.jpg",
    description:
      "An iridescent teal bracelet of frosted glass beads inspired by dragonflies darting over water.",
  },
  //Roo's Treasure Shop
  {
    id: 12,
    name: "Spice Jar Labels (set of 20)",
    category: "Stationary, Roo's Treasure Shop, labels, spice jars, ",
    price: "$20",
    image: "images/spicejar.png",
  },
  {
    id: 13,
    name: "Ramadan Greeting Cards (Set of 3)",
    category: "Stationary, Roo's Treasure Shop, greeting cards, ramadan",
    price: "$20",
    image: "images/greetingcard.png",
  },
  {
    id: 14,
    name: "Booked & Busy Bookmart Set (3pc)",
    category: "Stationary, Roo's Treasure Shop, Bookmark, book",
    price: "$15",
    image: "images/bookmarks.png",
  },
  {
    id: 15,
    name: "All I Need is Matcha Magnet",
    category: "Stationary, Roo's Treasure Shop, magnet, matcha, pink",
    price: "$5",
    image: "images/matcha.png",
  },
  {
    id: 16,
    name: "Bismillah Floral Can Glass Set",
    category: "Stationary, Roo's Treasure Shop, cup, glass, muslim",
    price: "$19",
    image: "images/jarcup.png",
  },

  //The Wandering Maker
  {
    id: 17,
    name: "Bedazzled Cat Keychain",
    category: "Wandering Maker, keychain, bedazzled, pink, purple",
    price: "$6",
    image: "images/catkeychains.jpeg",
  },
  {
    id: 18,
    name: "Rose Pin",
    category: "Wandering Maker, rose, pin, red, flower",
    price: "$3 each",
    image: "images/rosepin.jpeg",
  },
  {
    id: 19,
    name: "Fruit Earrings Set",
    category: "Wandering Maker, earring, jewelry, fruit, tops",
    price: "$10",
    image: "images/fruitset.jpeg",
  },
  {
    id: 20,
    name: "Pressed Flower Magnet Set",
    category: "Wandering Maker, magent, flower, frame, vintage",
    price: "$5",
    image: "images/frames.jpeg",
  },
  {
    id: 21,
    name: "Bedazzled Initial Keychain",
    category: "Wandering Maker, bedazzled, keychain, intial, letter ",
    price: "$8",
    image: "images/letterkeychains.jpg",
  },
];

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

const modal = document.getElementById("productModal");
const closeModalBtn = document.getElementById("closeModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalPrice = document.getElementById("modalPrice");
const modalDescription = document.getElementById("modalDescription");
const contactCreatorBtn = document.getElementById("contactCreatorBtn");
//Crochet Filter for Homepage
const crochetProducts = products.filter((product) =>
  product.category.toLowerCase().includes("crochet")
);
const crochetGrid = document.getElementById("crochetGrid");

//Stationary Filter for Homepage
const stationaryProducts = products.filter((product) =>
  product.category.toLowerCase().includes("stationary")
);
const stationaryGrid = document.getElementById("stationaryGrid");

//Stationary Filter for Homepage
const jewelryProducts = products.filter((product) =>
  product.category.toLowerCase().includes("jewelry")
);
const jewelryGrid = document.getElementById("jewelryGrid");

const path = window.location.pathname;
const page = path.split("/").pop();

if (crochetGrid) {
  crochetProducts.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" width="200" height="200">
      <h3>${product.name}</h3>
      <p class="price">${product.price}</p>
      <button class="see-item-btn" data-id="${product.id}">See item</button>
    `;

    card
      .querySelector(".see-item-btn")
      .addEventListener("click", () => openModal(product));

    crochetGrid.appendChild(card);
  });
}

if (stationaryGrid) {
  stationaryProducts.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" width="200" height="200">
      <h3>${product.name}</h3>
      <p class="price">${product.price}</p>
      <button class="see-item-btn" data-id="${product.id}">See item</button>
    `;

    card
      .querySelector(".see-item-btn")
      .addEventListener("click", () => openModal(product));

    stationaryGrid.appendChild(card);
  });
}

if (jewelryGrid) {
  jewelryProducts.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" width="200" height="200">
      <h3>${product.name}</h3>
      <p class="price">${product.price}</p>
      <button class="see-item-btn" data-id="${product.id}">See item</button>
    `;

    card
      .querySelector(".see-item-btn")
      .addEventListener("click", () => openModal(product));

    jewelryGrid.appendChild(card);
  });
}

//Calling certain items for certain pages
const getProductsByPageName = (pageName) => {
  if (pageName === "looptoloop.html") {
    return products.filter((product) =>
      product.category.includes("Loop to Loop")
    );
  } else if (pageName === "roostreasures.html") {
    return products.filter((product) =>
      product.category.includes("Roo's Treasure Shop")
    );
  } else if (pageName === "stardrip.html") {
    return products.filter((product) => product.category.includes("Stardrip"));
  } else if (pageName === "thewanderingmaker.html") {
    return products.filter((product) =>
      product.category.includes("Wandering Maker")
    );
  } else {
    return products;
  }
};

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
    <img src= ${product.image} alt=${product.name} width="200" height"200">
      <h3>${product.name}</h3>
      <p class="price">${product.price}</p>
      <button class="see-item-btn" data-id="${product.id}">See item</button>
    `;
    const button = card.querySelector(".see-item-btn");
    button.addEventListener("click", () => openModal(product));

    productGrid.appendChild(card);
  });
}

function openModal(product) {
  if (!modal) return;
  modalImage.src = product.image;
  modalImage.alt = product.name;
  modalTitle.textContent = product.name;
  modalPrice.textContent = product.price;
  modalDescription.textContent =
    product.description || "No description available for this item.";
  if (contactCreatorBtn) {
    contactCreatorBtn.href = `contact.html?product=${product.id}`;
  }

  modal.classList.remove("hidden");
}

if (closeModalBtn) {
  closeModalBtn.addEventListener("click", () => {
    if (modal) modal.classList.add("hidden");
  });
}

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

displayProducts(getProductsByPageName(page));

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
