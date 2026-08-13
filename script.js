// Master Inventory Array - 13 Curated Ultra-Premium Local Luxury Items
const products = [
  {
    id: 1,
    name: "Rolex Oyster Perpetual",
    price: 850000,
    description: "Exquisite blue floral motif dial with a fluted silver bezel and premium oystersteel presidential bracelet.",
    image: "images/luxury-banner.jpg"
  },
  {
    id: 2,
    name: "Paris Haute Couture Gown",
    price: 245000,
    description: "Stunning hand-embellished emerald and sapphire silk gown meticulously designed for red-carpet elite events.",
    image: "images/suit.jpg"
  },
  {
    id: 3,
    name: "Riviera Monogram Shoulder Bag",
    price: 185000,
    description: "Classic premium monogram handbag featuring a refined calfskin build layout and elegant gold-chain accents.",
    image: "images/bag.jpg"
  },
  {
    id: 4,
    name: "Milanese Velvet Dinner Tuxedo",
    price: 210000,
    description: "Bespoke Italian-tailored mohair velvet dinner jacket outfitted with premium silk lapels and custom hardware layers.",
    image: "images/tuxedo.jpg"
  },
  {
    id: 5,
    name: "Maranello Carbon Key Organizer",
    price: 45000,
    description: "Ultra-premium handcrafted leather alignment wallet housing designed for high-society exotic supercar keys.",
    image: "images/supercar-key.jpg"
  },
  {
    id: 6,
    name: "Beoplay Executive ANC Earbuds",
    price: 110000,
    description: "True wireless audio architecture encased in a copper housing featuring adaptive active noise cancellation filters.",
    image: "images/earbuds.jpg"
  },
  {
    id: 7,
    name: "Neroli Portofino Citrus Elixir",
    price: 38000,
    description: "An incredibly elite Mediterranean signature fragrance combining fresh Tunisian neroli and Sicilian lemon extracts.",
    image: "images/perfume.jpg"
  },
  {
    id: 8,
    name: "Saffiano Executive Attaché Case",
    price: 260000,
    description: "Rigid corporate boardroom briefcase in cross-grain sapphire leather with premium numeric secure padlocks.",
    image: "images/briefcase.jpg"
  },
  {
    id: 9,
    name: "Royal Indigo Jaipur Lounge Set",
    price: 14500,
    description: "Premium pure block-printed cotton relaxing loungewear tailored with matching blackout comfortable sleep masks.",
    image: "images/loungewear.jpg"
  },
  {
    id: 10,
    name: "Maybach Platinum Executive Aviators",
    price: 195000,
    description: "Lightweight aerospace-grade silver titanium double-bridge frames finished with polarized protective lenses.",
    image: "images/sunglasses.jpg"
  },
  {
    id: 11,
    name: "Sovereign Red-Sole Oxford Shoes",
    price: 115000,
    description: "Elite men's dress shoes handcrafted in Paris from whole-grain Italian leather, featuring the signature luxury red lacquer sole.",
    image: "images/mens-shoes.jpg"
  },
  {
    id: 12,
    name: "Cinderella Crystal Stilettos",
    price: 165000,
    description: "Breathtaking women's luxury heels layered with hand-applied Swarovski crystals and premium silk satin lining.",
    image: "images/womens-shoes.jpg"
  },
  {
    id: 13,
    name: "Imperial 24k Gold Lip Blush",
    price: 54000,
    description: "Ultra-premium vanity presentation set housing rare botanical satin lipsticks encased in pure heavy gold-ribbed cylinders.",
    image: "images/makeup.jpg"
  }
];

// Initialize Cart array from LocalStorage safely
let cart = JSON.parse(localStorage.getItem('shopnova_cart')) || [];

// Master Dynamic Grid Layout Renderer
function displayProducts() {
    const featuredGrid = document.getElementById('featured-products');
    const catalogGrid = document.getElementById('all-products-container');
    
    let productHTML = '';
    
    products.forEach(product => {
        productHTML += `
            <div class="product-card">
                <div class="img-container">
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='https://placeholder.com'">
                </div>
                <div class="card-details">
                    <h3>${product.name}</h3>
                    <p class="description-text">${product.description}</p>
                    <p class="price">₹${product.price.toLocaleString('en-IN')}</p>
                    <button class="add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
    });

    if (featuredGrid) featuredGrid.innerHTML = productHTML;
    if (catalogGrid) catalogGrid.innerHTML = productHTML;
}

// Add Items to Cart Function
function addToCart(productId) {
    const item = products.find(p => p.id === productId);
    if (item) {
        cart.push(item);
        localStorage.setItem('shopnova_cart', JSON.stringify(cart));
        alert(`${item.name} added to your shopping cart!`);
        updateCartTotal();
    }
}

// Interactive Live Cart Removal Logic with Automatic Array Splicing
function removeFromCart(index) {
    cart.splice(index, 1); // Delete 1 element at position index
    localStorage.setItem('shopnova_cart', JSON.stringify(cart));
    updateCartTotal(); // Re-render table and total numbers instantly
}

// Update Cart Metric Displays with Real-Time Delete Handle Row Layouts
function updateCartTotal() {
    const cartContainer = document.getElementById('cart-items-container');
    const totalDisplay = document.getElementById('cart-total-display');
    
    if (!cartContainer) return;
    
    if (cart.length === 0) {
        cartContainer.innerHTML = `<tr><td colspan="4" style="text-align: center; color: #64748b; padding: 40px 0;">Your cart is currently empty. Ready to find something premium?</td></tr>`;
        if (totalDisplay) totalDisplay.innerHTML = '₹0';
        return;
    }
    
    let tableHTML = '';
    let grandTotal = 0;
    
    cart.forEach((item, index) => {
        grandTotal += item.price;
        tableHTML += `
            <tr>
                <td style="display: flex; align-items: center; gap: 15px;">
                    <img src="${item.image}" class="cart-item-img" onerror="this.src='https://placeholder.com'">
                    <span style="font-weight: 600; color: #0a192f;">${item.name}</span>
                </td>
                <td>₹${item.price.toLocaleString('en-IN')}</td>
                <td>1</td>
                <td style="font-weight: 700; color: #138808; display: flex; justify-content: space-between; align-items: center;">
                    <span>₹${item.price.toLocaleString('en-IN')}</span>
                    <button class="remove-item-btn" onclick="removeFromCart(${index})" title="Remove item" style="background: none; border: none; color: #ef4444; cursor: pointer; font-size: 16px; padding: 4px 8px; margin-left: 10px;">🗑️</button>
                </td>
            </tr>
        `;
    });
    
    cartContainer.innerHTML = tableHTML;
    if (totalDisplay) totalDisplay.innerHTML = `₹${grandTotal.toLocaleString('en-IN')}`;
}

// Live Search Filter Input
function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        const desc = card.querySelector('.description-text').innerText.toLowerCase();
        if (title.includes(searchInput) || desc.includes(searchInput)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}

// Toggles Social Panel Dropdown Visibility
function toggleSocialGateway(event) {
    if(event) event.stopPropagation();
    const dropdown = document.getElementById('socialGatewayMenu');
    dropdown.classList.toggle('active-gateway');
}

// Clear state if clicked outside menu box
document.addEventListener('click', () => {
    const dropdown = document.getElementById('socialGatewayMenu');
    if (dropdown) dropdown.classList.remove('active-gateway');
});

document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    updateCartTotal();
});
