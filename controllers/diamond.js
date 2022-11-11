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
// Handle diamond create on POST. 
exports.diamond_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new diamond(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"diamond_name":"purelyheart","diamond_size":4.9,"diamond_type":"llaVII"} 
    document.diamond_name = req.body.diamond_name; 
    document.diamond_size = req.body.diamond_size; 
    document.diamond_type = req.body.diamond_type; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
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
// Handle diamond delete form on DELETE. 
exports.diamond_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: diamond delete DELETE ' + req.params.id); 
}; 

// Handle diamond update form on PUT. 
exports.diamond_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await diamond.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.diamond_type)  
               toUpdate.diamond_type = req.body.diamond_type; 
        if(req.body.diamond_size) toUpdate.diamond_size = req.body.diamond_size; 
        if(req.body.diamond_name) toUpdate.diamond_name = req.body.diamond_name; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 