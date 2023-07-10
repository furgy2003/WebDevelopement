const express = require("express");
const app = express();
const port = 3000;
app.listen(port);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

// body-parser is a library used to get the input from the page
const bodyParser = require("body-parser");

// tell which inputs/ texts are to be parsed, if parse from html then use urlencoded 
// other type of format are json 
app.use(bodyParser.urlencoded({extended: true}));

// set what to display when the action post is perform
app.post("/", (req, res) => {
    // all the html inputs within the post will be parsed and stored inside req.body 
    // to get specific element inside the req.body, we navigate using the name attribute of the html element 
    // parsed element will always be in String
    var num1 = req.body.num1;
    var num2 = req.body.num2;
    var sum = Number(num1) + Number(num2);
    res.send("The sum is " + sum);
})


// BMI calculator 
app.get("/bmicalculator", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmicalculator", (req, res) => {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight / (height * height);
    res.send("Your BMI is " + bmi);
})