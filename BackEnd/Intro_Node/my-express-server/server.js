// require is similar to import library 
// express is a npm library which allow us to work with different port 
// npm is community open source libraries for node */
const express = require("express");
const app = express();
const port = 3000;

// specify the port that we are listening to 
app.listen(port, ()=>{
    console.log("listening to port " + port);
});

// set what to be display once get to the website path 
app.get("/", function(request, response){
    // console.log(request);
    response.send("<h1>Hello World!</h1>");
});

app.get("/contact", (req, res)=>{
    res.send("<h1>Contact me</h1>")
})

app.get("/about", (req, res)=>{
    res.send("<h1>About me</h1>")
})


