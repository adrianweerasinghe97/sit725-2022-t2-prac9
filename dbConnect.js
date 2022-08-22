require('dotenv').config()

const MongoClient = require('mongodb').MongoClient

//add database connection...
const uri = 'mongodb+srv://admin:admin@cluster0.u1tpsqh.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, {useNewUrlParser: true})

//create collection....
    client.connect((err,db) => {
        if(!err) {
            console.log('MongoDB Connected')
        }
        else {
            console.log("DB Error: ", err);
            process.exit(1);
        }
    })


exports.MongoClient = client;