var express = require("express")
var app = express()
var cors = require('cors')
let projectCollection; 

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

const MongoClient = require('mongodb').MongoClient

//add database connection...
const uri = 'mongodb+srv://admin:admin@cluster0.u1tpsqh.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, {useNewUrlParser: true})

//create collection....
const createColllection = (collectionName) => {
    client.connect((err,db) => {
        projectCollection = client.db().collection(collectionName);
        if(!err) {
            console.log('MongoDB Connected')
        }
        else {
            console.log("DB Error: ", err);
            process.exit(1);
        }
    })
}

//insert project......
const insertProjects = (project, callback) => {
    projectCollection.insert(project,callback);
}

//get project....
const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);
}

const cardList = [
    {
        title: "Car ",
        image_link: "images/clay.jpg",
        description: "Desciption about Car"
    },
    {
        title: "Car",
        image_link: "images/477237.jpg",
        description: "Desciption about a car"
    }
]

// get api...!!
app.get('/api/projects',(req,res) => {
    getProjects((err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"Success", data: result})
        }
    })
})

// post api....
app.post('/api/projects',(req,res) => {
    console.log("New Project added", req.body)
    var newProject = req.body;
    insertProjects(newProject,(err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"Car Successfully added", data: result})
        }
    })
})

var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App listening to: "+port)
    createColllection('Pets')
})
