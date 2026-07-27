const express = require("express");


const router = express.Router();



const products=[


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





router.get("/",(req,res)=>{


res.json(products);


});




module.exports = router;
