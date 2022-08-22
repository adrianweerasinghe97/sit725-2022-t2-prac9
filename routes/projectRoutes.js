var express = require("express")
var router = express.Router();




let client = require("../dbConnect");
let projectsCollection;
setTimeout(() => {
    projectsCollection = client.MongoClient.db().collection("project");
}, 2000)


//insert project......
const insertProjects = (project, callback) => {
    projectCollection.insert(project,callback);
}

//get project....
const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);
}


// get api...!!
router.get('/',(req,res) => {
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
router.post('/',(req,res) => {
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


module.exports = router;