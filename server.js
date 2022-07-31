const express = require('express')
const app = express()

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
// app.listen(3000)


// Calculator

    //Add
var cal=function(number1,number2) {
   var result = number1+number2;
   return result
}

   //Subtract
   var cal= function(number1, number2) {
    var result = number1-number2;
    return result
}

   //Divide
   var cal= function(number1, number2) {
    var result = number1/number2;
    return result
}

   //Multiplication
   var cal= function(number1, number2) {
    var result = number1*number2;
    return result
}


//ADD
app.get('/add',function(req,res){
    var number1 = parseInt(req.query.number1);
    var number2 = parseInt(req.query.number2);
    var result  = cal(number1,number2)
    res.send('The Result is : ' +result)
})

//Subtract
app.get('/deduct',function(req,res){
    var number1 = parseInt(req.query.number1);
    var number2 = parseInt(req.query.number2);
    var result  = cal(number1,number2)
    res.json({statusCode: 200, data: result, message: "Calculation Success"})
})

//Divide
app.get('/divide',function(req,res){
    var number1 = parseInt(req.query.number1);
    var number2 = parseInt(req.query.number2);
    var result  = cal(number1,number2)
    res.json({statusCode: 200, data: result, message: "Calculation Success"})
})

//Multiply
app.get('/mult',function(req,res){
    var number1 = parseInt(req.query.number1);
    var number2 = parseInt(req.query.number2);
    var result  = cal(number1,number2)
    res.json({statusCode: 200, data: result, message: "Calculation Success"})
})











var port = process.env.port || 3000;

app.listen(port,function(req,res){
    console.log("App running at http://localhost:"+port)
})