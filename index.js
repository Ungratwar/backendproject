const express = require("express");
const app = express();
const PORT = 5060;
const cors = require("cors");
const conn  = require("./db");





conn.connection.on("connected", (err) => {
    if(err){
        console.error(err);

    }else{
        console.log("Connected to mongodb");
    }
})

app.use(cors());
app.use(express.json());
app.use("/user", require("./Routes/user"));

app.listen(PORT, () => {
    console.log("Server is start");

});