const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const app = express();
const port = 3000; 

// allow us to use the static files or images which is put inside the public folder 
app.use(express.static('public'));

var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
})

app.post("/failure", (req, res) => {
    res.redirect("/");
})

app.post("/", urlencodedParser, (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    // user is JS object created following the mailchimp API standard 
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    "FNAME": firstName,
                    "LNAME": lastName
                }
            }
        ]        
    };

    const JSONdata = JSON.stringify(data);

    // object passed to the request function of https 
    const options = {
        "method": "POST",
        "auth": "user1:572769713ed5de6b485d6cda317d0431-us10" // API key 
    };

    const url = "https://us10.api.mailchimp.com/3.0/lists/14ccf86b11"

    // store the https request of the mailchimp to a variable called request 
    const request = https.request(url, options, (response) => {
        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        }
        else {
            res.sendFile(__dirname + "/failure.html");
        }
        response.on("data", (data) => {
            console.log(JSON.parse(data));
        });
    })

    // write the JSON strinfied data to mailchimp
    request.write(JSONdata);
    request.end();

    const statusCode = req.body.status;
})

app.listen(port, () => {
    console.log("server is running on port " + port);
})

