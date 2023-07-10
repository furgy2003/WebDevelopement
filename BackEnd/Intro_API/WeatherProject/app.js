// API is an interface or the set of instruction and agreements that we have to follow
// in order to use and access external database 
// http is the standard library to request for http 
// it is not npm library and comes with when installing the node
const https = require("https");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res) => {
    // pass in the url that we want to send the GET request to 
    // the return data in JSON or other format such as XML will be in response 
    const apiKey = "7be04a9ae4f5e7aa4fbe831b2a12083c";
    const cityName = req.body.cityName;
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=" + unit;
    https.get(url, (response) => {
        // tap into the status code of the get request, if 200 then OK
        console.log(response.statusCode);
        // upon extracting the data return by the https request perform the code inside {}
        // extracted data is in hexadecimal string
        response.on("data", (data) => {
            // convert the data from hexa string to JS object 
            const weatherObject = JSON.parse(data);
            // use dot (.) to access the attribute of the object and index [] to acess the item in array 
            const temp = weatherObject.main.temp
            const description = weatherObject.weather[0].description;
            const iconUrl = "https://openweathermap.org/img/wn/" + weatherObject.weather[0].icon + "@2x.png"  
            res.write("<h1>The temperature in " + cityName + " is " + temp + " degree celcius</h1>");
            res.write("<p>The weather is " + description + "</p>");
            res.write('<img src="'+ iconUrl +'" />');
            res.send();
        })
    });
})

app.listen(port, () => {
    console.log("Listening to port 3000");
})