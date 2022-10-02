const AWS = require('aws-sdk')
const path = require('path')
const express = require('express')
const app = express()
const port = 3000
const router = express.Router();


router.get('/',function(req,res){
 res.sendFile(path.join('/home/ubuntu/418YAssignment3/index.html'));
});

//console.log(path.join('/dist', 'index.html'));
app.use(express.static(__dirname + "/HTMLPages"));
app.use('/', router);
app.listen(process.env.port || 3000);
console.log('Running at Port 3000');
