const AWS = require('aws-sdk')
const path = require('path')
const express = require('express')
const app = express()
const port = 3000
const router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended:false}));


router.get('/',function(req,res){
 res.sendFile(path.join('/home/ubuntu/418YAssignment3/index.html'));
});

router.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html'); //Gets the html
});



 router.post('/submission', function(req, res) {
	var first = parseInt(req.body.firstNumber);
	var second = parseInt(req.body.lastNumber);
    var sum = Number(first + second);
    res.send('The total is: ' + Number(sum));
   });



//console.log(path.join('/dist', 'index.html'));
app.use(express.static(__dirname + "/HTMLPages/"));
app.use('/', router);
app.listen(process.env.port || 3000);
console.log('Running at Port 3000');
