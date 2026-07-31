// =====================================
// SHOPNOVA E-COMMERCE CART SYSTEM
// =====================================


// Get Cart Data

let cart = JSON.parse(localStorage.getItem("cart")) || [];




// =====================================
// ADD PRODUCT TO CART (Laptop Page)
// =====================================

const addCartButton = document.querySelector(".cart-btn");


if(addCartButton){


    addCartButton.addEventListener("click", function(){


        let product = {

            id: 1,

            name: "ShopNova Premium Laptop",

            price: 89999,

            image:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",

            quantity: 1

        };



        // Check existing product

        let existingProduct = cart.find(
            item => item.id === product.id
        );



        if(existingProduct){

            existingProduct.quantity++;

        }

        else{

            cart.push(product);

        }



        saveCart();



        alert("Product added to cart 🛒");


        window.location.href = "cart.html";


    });


}






// =====================================
// SAVE CART
// =====================================


function saveCart(){


    localStorage.setItem(

        "cart",

        JSON.stringify(cart)

    );


}






// =====================================
// DISPLAY CART PRODUCTS
// =====================================


const cartItems = document.getElementById("cart-items");


if(cartItems){


    displayCart();


}





function displayCart(){


    cartItems.innerHTML = "";



    if(cart.length === 0){


        cartItems.innerHTML = `

        <h2>
        Your Cart is Empty 🛒
        </h2>

        `;


        document.getElementById("total-price").innerHTML =
        "₹0";


        return;


    }




    let total = 0;




    cart.forEach(function(product){



        total += product.price * product.quantity;



        cartItems.innerHTML += `


        <div class="cart-product">


            <img src="${product.image}">


            <div>


                <h2>
                ${product.name}
                </h2>


                <p>
                Price: ₹${product.price}
                </p>



                <p>

                Quantity:

                <button onclick="changeQuantity(${product.id}, -1)">
                -
                </button>


                ${product.quantity}


                <button onclick="changeQuantity(${product.id}, 1)">
                +
                </button>


                </p>



                <button onclick="removeProduct(${product.id})">

                ❌ Remove

                </button>



            </div>


        </div>


        `;


    });




    document.getElementById("total-price").innerHTML =

    "₹" + total;



}







// =====================================
// CHANGE QUANTITY
// =====================================


function changeQuantity(id, change){



    let product = cart.find(

        item => item.id === id

    );



    if(product){


        product.quantity += change;



        if(product.quantity <= 0){

            removeProduct(id);

            return;

        }


    }



    saveCart();

    displayCart();


}







// =====================================
// REMOVE PRODUCT
// =====================================


function removeProduct(id){



    cart = cart.filter(

        item => item.id !== id

    );



    saveCart();


    displayCart();


}







// =====================================
// CHECKOUT BUTTON
// =====================================


const checkoutButton = document.querySelector(".checkout-btn");



if(checkoutButton){


    checkoutButton.addEventListener(

        "click",

        function(){


            if(cart.length === 0){


                alert("Your cart is empty");


            }

            else{


                window.location.href="checkout.html";


            }



        }


    );


}
