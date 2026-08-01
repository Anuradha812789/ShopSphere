
// ===============================
// SHOPNOVA CART SYSTEM
// ===============================

function addToCart() {

    // Save product in browser storage

    const product = {
        name: "Premium Laptop",
        price: 89999,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80"
    };

    localStorage.setItem("shopnova_cart", JSON.stringify(product));

    // Success message

    alert("✅ Product added successfully to cart!");

    // Open cart page

    window.location.href = "cart.html";
}



// ===============================
// LOAD CART DATA
// ===============================

function loadCart() {

    const data = localStorage.getItem("shopnova_cart");

    if (!data) return;

    const product = JSON.parse(data);

    const nameEl = document.getElementById("cart-name");
    const priceEl = document.getElementById("cart-price");
    const totalEl = document.getElementById("cart-total");
    const imageEl = document.getElementById("cart-image");

    if (nameEl) nameEl.textContent = product.name;

    if (priceEl) priceEl.textContent = "₹" + product.price.toLocaleString();

    if (totalEl) totalEl.textContent = "₹" + product.price.toLocaleString();

    if (imageEl) imageEl.src = product.image;
}



// ===============================
// REMOVE ITEM
// ===============================

function removeItem() {

    localStorage.removeItem("shopnova_cart");

    alert("🗑️ Item removed from cart");

    window.location.reload();
}



// ===============================
// AUTO LOAD
// ===============================

window.onload = loadCart;

