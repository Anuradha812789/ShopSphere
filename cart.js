function addToCart(){


    const product = {

        id:1,

        name:"Premium Laptop",

        price:79999,

        image:"laptop.jpg",

        quantity:1

    };


    localStorage.setItem(
        "cart",
        JSON.stringify(product)
    );


    alert("Premium Laptop Added To Cart 🛒");


    window.location.href="cart.html";


}
