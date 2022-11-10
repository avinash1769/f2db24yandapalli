var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var diamond_controller = require('../controllers/diamond'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// DIAMOND ROUTES /// 
 
// POST request for creating a diamond.  
router.post('/diamond', diamond_controller.diamond_create_post); 
 
// DELETE request to delete diamond. 
router.delete('/diamond/:id', diamond_controller.diamond_delete); 
 
// PUT request to update diamond. 
router.put('/diamond/:id', diamond_controller.diamond_update_put); 
 
// GET request for one diamond. 
router.get('/diamond/:id', diamond_controller.diamond_detail); 
 
// GET request for list of all diamond items. 
router.get('/diamond', diamond_controller.diamond_list); 
 
module.exports = router; 