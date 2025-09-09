//  প্রোডাক্ট লিস্ট
const products = [
  { id: 1, name: "Mango Tree", price: 500, tag: "Fruit Tree", desc: "Produces delicious, juicy mangoes.", category: "fruit" },
  { id: 2, name: "Guava Tree", price: 300, tag: "Fruit Tree", desc: "Sweet guavas, hardy and productive.", category: "fruit" },
  { id: 3, name: "Plum Tree", price: 450, tag: "Fruit Tree", desc: "Produces sweet plums each season.", category: "fruit" },
  { id: 4, name: "Cherry Blossom", price: 700, tag: "Flowering Tree", desc: "Beautiful pink blooms in spring.", category: "flower" },
  { id: 5, name: "Neem Tree", price: 600, tag: "Medicinal Tree", desc: "Known for medicinal properties.", category: "medicinal" },
  { id: 6, name: "Bamboo", price: 250, tag: "Bamboo", desc: "Fast growing and versatile.", category: "bamboo" },
];

const productGrid = document.getElementById("product-grid");
const cartItemsEl = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const categoriesEl = document.getElementById("categories");

// কার্ট অবজেক্ট
const cart = {};

function formatCurrency(n) {
  return "৳" + n;
}

function renderProducts(filter = "all") {
  productGrid.innerHTML = "";
  let list = products.filter((p) =>
    filter === "all" ? true : p.category === filter
  );

  // যদি all না হয় তবে শুধু ৩টা প্রোডাক্ট দেখাবে
  if (filter !== "all") {
    list = list.slice(0, 3);
  }

  list.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div>
        <div class="img">Image</div>
        <h3>${p.name}</h3>
        <div class="desc">${p.desc}</div>
        <div class="price-row">
          <span class="tag">${p.tag}</span>
          <span class="price">${formatCurrency(p.price)}</span>
        </div>
      </div>
      <button class="btn" data-id="${p.id}">Add to Cart</button>
    `;
    productGrid.appendChild(card);
  });

  // বাটনে ক্লিক ইভেন্ট
  productGrid.querySelectorAll(".btn").forEach((b) => {
    b.addEventListener("click", (e) => {
      const id = Number(e.currentTarget.dataset.id);
      addToCart(id);
    });
  });
}

function renderCart() {
  cartItemsEl.innerHTML = "";
  let total = 0;
  const ids = Object.keys(cart);

  if (ids.length === 0) {
    cartItemsEl.innerHTML =
      '<div style="color:#889; font-size:13px">No items yet</div>';
    cartTotalEl.textContent = formatCurrency(0);
    return;
  }

  ids.forEach((id) => {
    const item = cart[id];
    const subtotal = item.product.price * item.qty;
    total += subtotal;

    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <div class="meta">
        <div class="name">${item.product.name}</div>
        <div class="qty">${formatCurrency(item.product.price)} × ${item.qty}</div>
      </div>
      <button class="remove" data-id="${id}">✕</button>
    `;
    cartItemsEl.appendChild(row);
  });

  cartItemsEl.querySelectorAll(".remove").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.dataset.id;
      removeFromCart(Number(id));
    });
  });

  cartTotalEl.textContent = formatCurrency(total);
}

function addToCart(id) {
  const prod = products.find((p) => p.id === id);
  if (!prod) return;
  if (cart[id]) cart[id].qty += 1;
  else cart[id] = { product: prod, qty: 1 };
  renderCart();
}

function removeFromCart(id) {
  delete cart[id];
  renderCart();
}

categoriesEl.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;
  categoriesEl.querySelectorAll("li").forEach((x) =>
    x.classList.remove("active")
  );
  li.classList.add("active");
  renderProducts(li.dataset.filter);
});

// প্রথমবার লোড
renderProducts("all");
renderCart();


