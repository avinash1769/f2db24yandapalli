var express = require('express');
const diamond_controlers= require('../controllers/diamond');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('diamond', {title:'Search Results diamond'});
// });
/* GET detail diamond page */ 
router.get('/detail', diamond_controlers.diamond_view_one_Page);
/* GET diamond */ 
router.get('/', diamond_controlers.diamond_view_all_Page);
/* GET create diamond page */ 
router.get('/create', diamond_controlers.diamond_create_Page); 
/* GET create update page */ 
router.get('/update', diamond_controlers.diamond_update_Page); 
/* GET delete costume page */ 
router.get('/delete', diamond_controlers.diamond_delete_Page); 
router.get('/diamond/:id', diamond_controlers.diamond_detail);
module.exports = router;
 

 
