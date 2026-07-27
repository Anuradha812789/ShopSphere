/* =================================
   E-COMMERCE PRO JAVASCRIPT
   Modern Shopping Functionality
================================= */


/* ================================
   PRODUCT DATABASE
================================ */


const products = [

    {
        id:1,
        name:"Premium Laptop",
        price:89999,
        image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    },


    {
        id:2,
        name:"Smart Watch",
        price:4999,
        image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },


    {
        id:3,
        name:"Wireless Headphones",
        price:2999,
        image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },


    {
        id:4,
        name:"Gaming Phone",
        price:59999,
        image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    }

];



/* ================================
   DISPLAY PRODUCTS
================================ */


const productContainer = document.querySelector(".products");


function displayProducts(items){


    if(!productContainer)
        return;


    productContainer.innerHTML="";


    items.forEach(product=>{


        productContainer.innerHTML += `

        <div class="product-card">

            <img src="${product.image}" >

            <div class="product-info">

                <h3>${product.name}</h3>

                <p class="price">
                ₹${product.price}
                </p>


                <button 
                class="add-cart"
                onclick="addToCart(${product.id})">

                Add To Cart

                </button>


            </div>

        </div>

        `;


    });


}



displayProducts(products);




/* ================================
      CART SYSTEM
================================ */



let cart = JSON.parse(localStorage.getItem("cart")) || [];




function addToCart(id){


    let product = products.find(
        item => item.id === id
    );


    cart.push(product);


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    updateCartCount();


    alert(
        product.name + " added to cart 🛒"
    );


}




/* ================================
 CART COUNT
================================ */


function updateCartCount(){


    const cartNumber =
    document.querySelector(".cart");


    if(cartNumber){

        cartNumber.innerHTML =
        `Cart (${cart.length})`;

    }

}


updateCartCount();





/* ================================
 SEARCH SYSTEM
================================ */


const searchInput =
document.querySelector(".search-box");



if(searchInput){


searchInput.addEventListener(
"keyup",
()=>{


    let value =
    searchInput.value.toLowerCase();



    let filtered =
    products.filter(product=>


        product.name
        .toLowerCase()
        .includes(value)

    );



    displayProducts(filtered);


});


}




/* ================================
 REMOVE CART ITEM
================================ */


function removeCartItem(id){


cart =
cart.filter(item=>item.id !== id);


localStorage.setItem(
"cart",
JSON.stringify(cart)
);


updateCartCount();


}




/* ================================
 DARK MODE FEATURE
================================ */


function darkMode(){


document.body.classList.toggle(
"dark"
);


}




/* ================================
 PAGE LOADING ANIMATION
================================ */


window.addEventListener(
"load",
()=>{


console.log(
"E-Commerce Pro Loaded Successfully 🚀"
);


});
