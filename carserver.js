const express = require('express')
const app = express()

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


//CAR ARRAY
var cars = [];

//Add new car
app.post('/car', function(req,res){
    const car = req.body;

    console.log(car);
    cars.push(car);

    res.json({statusCode: 200, message: "Car is added into the database.  Please go back to the previous page to add more cars"})
});


//Get all cars
app.get('/car', function(req,res) {
    res.json(cars);
})




var port = process.env.port || 3000;

app.listen(port,function(req,res){
    console.log("App running at http://localhost:"+port)
})