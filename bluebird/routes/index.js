var express = require('express');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/


router.get('/', function(req,res){
  res.render('index', {
		title: 'BlueBird',
		fname: 'Brennan',
		lname: 'Miller',
		age: 28
  });

});


/*
 *
router.get('/', function(req,res){
  res.render('index', {
		title: 'BlueBird'
  }});

});
 */

module.exports = router;
