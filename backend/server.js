// =====================================
// SHOPNOVA E-COMMERCE BACKEND SERVER
// =====================================


const express = require("express");

const cors = require("cors");

const mongoose = require("mongoose");

require("dotenv").config();



const app = express();



// Middleware

app.use(cors());

app.use(express.json());




// Home API

app.get("/", (req,res)=>{


    res.json({

        message:
        "ShopNova Backend Running Successfully 🚀"

    });


});





// Products API


const products = [

{
id:1,
name:"Premium Laptop",
price:89999,
category:"Electronics"
},


{
id:2,
name:"Smart Watch",
price:4999,
category:"Wearables"
},


{
id:3,
name:"Wireless Headphones",
price:2999,
category:"Audio"
}


];





app.get("/api/products",(req,res)=>{


    res.json(products);


});






// User Register API


app.post("/api/register",(req,res)=>{


const {

name,
email,
password


}=req.body;



res.json({

message:
"User Registered Successfully 🚀",

user:{
name,
email
}

});


});








// User Login API


app.post("/api/login",(req,res)=>{


const {

email,
password


}=req.body;



if(email && password){


return res.json({

message:
"Login Successful",

token:
"sample-jwt-token"


});


}



res.status(400)
.json({

message:
"Invalid Credentials"

});



});






// Server Port


const PORT = 5000;



app.listen(PORT,()=>{


console.log(

`ShopNova Server Running On Port ${PORT}`

);


});
