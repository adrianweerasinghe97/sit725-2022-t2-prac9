var express = require("express")
var router = express.Router();




router.get('/',(req,res) => {
    getProjects((err,result) => {
            res.json({statusCode: 400, message: "success", data: {'Name': 'Adrian'}});
    })
})


module.exports = router;