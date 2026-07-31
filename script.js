// ===============================
// SHOPNOVA CART SYSTEM
// ===============================


const addCartButton = document.querySelector(".cart-btn");


if(addCartButton){

    addCartButton.addEventListener("click", function(){


        let product = {

            name: "ShopNova Premium Laptop",

            price: 89999,

            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",

            quantity: 1

        };



        localStorage.setItem(
            "cartProduct",
            JSON.stringify(product)
        );


        alert("Product added to cart 🛒");


        window.location.href="cart.html";


    });

}
