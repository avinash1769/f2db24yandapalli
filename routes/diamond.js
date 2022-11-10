var express = require('express'); 
const diamond_controlers= require('../controllers/diamond'); 
var router = express.Router(); 
 
/* GET diamond */ 
router.get('/', diamond_controlers.diamond_view_all_Page ); 
module.exports = router; 