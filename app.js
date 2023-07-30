const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());

app.use(cors());

const port = process.env.PORT || 5000;


app.post("/file",(req,res)=>{
    

})



app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
