const express = require("express");

const cors = require("cors");

require("dotenv").config();


const app = express();



app.use(cors());

app.use(express.json());




// Routes


app.use(
"/api/auth",
require("./routes/auth")
);



app.use(
"/api/products",
require("./routes/products")
);





app.get("/",(req,res)=>{


res.send(
"ShopNova API Running 🚀"
);


});





const PORT=5000;



app.listen(PORT,()=>{


console.log(

`Server running on ${PORT}`

);


});
