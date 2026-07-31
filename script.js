// ================================
// SHOPSPHERE CART SYSTEM
// ================================


let cart = JSON.parse(localStorage.getItem("cart")) || [];


// ================================
// ADD TO CART
// ================================


let addButton = document.querySelector(".cart-btn");


if(addButton){

    addButton.addEventListener("click", function(){

        let product = {

            id: "laptop001",

            name: "ShopSphere Premium Laptop",

            price: 89999,

            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",

            quantity: 1

        };


        cart.push(product);


        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );


        alert("Laptop Added To Cart 🛒");


        window.location.href = "cart.html";


    });

}



// ================================
// SHOW CART
// ================================


let cartItems = document.getElementById("cart-items");


if(cartItems){

    displayCart();

}



function displayCart(){


    cartItems.innerHTML = "";


    let total = 0;


    let cartData = JSON.parse(
        localStorage.getItem("cart")
    ) || [];



    if(cartData.length === 0){


        cartItems.innerHTML =

        "<h2>Your Cart is Empty 🛒</h2>";


        document.getElementById("total-price").innerHTML =
        "₹0";


        return;

    }



    cartData.forEach(product => {


        total += product.price * product.quantity;



        cartItems.innerHTML += `


        <div class="cart-product">


        <img src="${product.image}" width="150">


        <h2>${product.name}</h2>


        <h3>
        ₹${product.price}
        </h3>


        <p>
        Quantity: ${product.quantity}
        </p>


        <button onclick="removeProduct('${product.id}')">

        ❌ Remove

        </button>


        </div>


        `;


    });



    document.getElementById("total-price").innerHTML =
    "₹" + total;



}



// ================================
// REMOVE PRODUCT
// ================================


function removeProduct(id){


    let cartData = JSON.parse(
        localStorage.getItem("cart")
    ) || [];



    cartData = cartData.filter(
        item => item.id !== id
    );



    localStorage.setItem(
        "cart",
        JSON.stringify(cartData)
    );



    displayCart();


}
