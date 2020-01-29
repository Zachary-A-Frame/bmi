const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
     res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/", function (req, res) {
     let height = parseFloat(req.body.height)
     let weight = parseFloat(req.body.weight)

     let bmi = Math.floor(weight / (height * height))
     res.send("<h1>BMI Calculator</h1>" + "\n Your BMI is = " + bmi)
})


app.listen(3000, function() {
  console.log("Server is up running on port 3000.");
});