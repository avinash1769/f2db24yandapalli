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
 

// for a specific diamond. 
exports.diamond_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await diamond.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// List of all diamond 
exports.diamond_create_post = async function(req, res) { 
    try{ 
        thediamond = await diamond.find(); 
        res.send(thediamond); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 


// Handle diamond delete on DELETE. 
exports.diamond_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await diamond.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 // Handle diamond update form on PUT. 
// exports.diamond_update_put = function(req, res) { 
//     res.send('NOT IMPLEMENTED: diamond update PUT' + req.params.id); 
// }; 

// List of all diamond 
// exports.diamond_update_put = async function(req, res) { 
//     try{ 
//         thediamond = await diamond.find(); 
//         res.send(thediamond); 
//     } 
//     catch(err){ 
//         res.status(500); 
//         res.send(`{"error": ${err}}`); 
//     }   
// }; 

// Handle diamond create on POST. 
exports.diamond_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new diamond(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"diamond_type":"goat", "diamond_size":12, "size":"large"} 
    document.diamond_type = req.body.diamond_type; 
    document.diamond_name = req.body.diamond_name; 
    document.diamond_size = req.body.diamond_size; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 


// Handle diamond update form on PUT. 
exports.diamond_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await diamond.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.diamond_type)toUpdate.diamond_type = req.body.diamond_type; 
        if(req.body.diamond_name) toUpdate.diamond_name = req.body.diamond_name; 
        if(req.body.diamond_size) toUpdate.diamond_size = req.body.diamond_size; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.diamond_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await diamond.findById(req.query.id) 
        res.render('diamonddelete', { title: 'diamond Delete', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for creating a diamond. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.diamond_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('diamondcreate', { title: 'diamond Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a show one view with id specified by query 
exports.diamond_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await diamond.findById( req.query.id) 
        res.render('diamonddetail', { title: 'diamond Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
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
//Handle building the view for updating a diamond. 
// query provides the id 
exports.diamond_update_Page =  async function(req, res) { 
    console.log("update view for diamond_type "+req.query.id) 
    try{ 
        let result = await diamond.findById(req.query.id) 
        res.render('diamondupdate', { title: 'diamond Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
