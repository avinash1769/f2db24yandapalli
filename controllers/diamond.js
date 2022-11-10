var diamond = require('../models/diamond'); 
 
// List of all diamond 
exports.diamond_list = async function(req, res) { 
    try{ 
        thediamond = await diamond.find(); 
        res.send(thediamond); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};  
// VIEWS 
// Handle a show all view 
exports.diamond_view_all_Page = async function(req, res) { 
    try{ 
        thediamond = await diamond.find(); 
        res.render('diamond', { title: 'diamond Search Results', results: thediamond }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// for a specific diamond. 
exports.diamond_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: diamond detail: ' + req.params.id); 
}; 
 
// Handle diamond create on POST. 
exports.diamond_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: diamond create POST'); 
}; 
 
// Handle diamond delete form on DELETE. 
exports.diamond_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: diamond delete DELETE ' + req.params.id); 
}; 
 
// Handle diamond update form on PUT. 
exports.diamond_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: diamond update PUT' + req.params.id); 
}; 