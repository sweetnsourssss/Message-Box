var express = require('express');
var router = express.Router();
const path=require('path');
const fs=require('fs');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.post('/submit-form',function(req,res){
  const senderName=req.body.senderName;
  const message=req.body.message;
  const data=`NAME: ${senderName} \nMESSAGE: ${message}\n\n`;
  fs.appendFile("Samaira.txt",data,err=>{
    if (err){
      console.log(err);
      return;
    }
    else{
      res.render('submitted');
    }
  })
})

module.exports = router;
