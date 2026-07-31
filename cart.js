function addToCart(){

    let product = {

        name:"Premium Laptop",

        price:79999,

        image:"laptop.jpg",

        quantity:1

    };


    localStorage.setItem(
        "cart",
        JSON.stringify(product)
    );


    alert("Product Added To Cart");

}
