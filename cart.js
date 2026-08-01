
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ShopNova Cart</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

<header>
    <div class="logo">ShopNova</div>

    <nav>
        <a href="index.html">Home</a>
        <a href="products.html">Products</a>
        <a href="cart.html">Cart 🛒</a>
    </nav>
</header>


<main class="cart-container">

    <section class="cart-items">

        <div class="cart-product">

            <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80"
                 alt="Premium Laptop">

            <div class="product-details">

                <h2>Premium Laptop</h2>

                <p class="price">₹89,999</p>

                <p>Quantity: 1</p>

                <button class="cart-btn">Remove</button>

            </div>

        </div>

    </section>



    <aside class="price-summary">

        <h2>Price Details</h2>

        <div class="summary-row">
            <span>Price</span>
            <span>₹89,999</span>
        </div>

        <div class="summary-row">
            <span>Delivery</span>
            <span style="color:#16a34a;font-weight:bold;">FREE</span>
        </div>

        <hr style="margin:20px 0;">

        <div class="summary-row" style="font-weight:bold;font-size:20px;">
            <span>Total Amount</span>
            <span>₹89,999</span>
        </div>

        <button class="checkout-btn" onclick="goToPayment()">
            Proceed to Pay 💳
        </button>

    </aside>

</main>


<footer>
    <h3>ShopNova</h3>
    <p>Next Generation E-Commerce Platform</p>
    <p style="margin-top:10px;">
        Founded & Designed by <strong>Anuradha</strong>
    </p>
    <p style="font-size:14px;">CEO & Founder</p>
    <br>
    © 2026 ShopNova. All Rights Reserved.
</footer>

<script>
function goToPayment(){
    window.location.href = "checkout.html";
}
</script>

</body>
</html>

