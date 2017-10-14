
const app = require('../../../app.js');
const db_Manage_Film_Example_db = require('../../../db/Manage_Film_Example_db_schema.js');
const logger = require('../../../logger.js');
const handleError = require('../../../security/util.js').handleError;
const properties = require('../../../properties.js');


// start documentation
/*
 * SCHEMA DB Film
 * 
	{
		genre: {
			type: 'String',
			enum : ["Action","Crime","Fantasy","Horror"], 
		},
		title: {
			type: 'String', 
			required : true
		},
		year: {
			type: 'Number'
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		cast: [{
			type: Schema.ObjectId,
			ref : "Film"
		}],
		filmMaker: {
			type: Schema.ObjectId, 
			required : true,
			ref : "Film"
		},
		
	}
 * 
 * 
 * 
 * 
 */
// end documentation

// INSERT HERE YOURS CUSTOM METHODS



/*
Name: search
Description: Method for search films
Params: 
	title - String
	genre - String
*/
app['get'](properties.api + '/film/search', function(req, res){

	// SEARCH CRITERIA
	var criteria = {
		title : new RegExp(req.query.title, "i"),
		genre : new RegExp(req.query.genre, "i")
	}

	// EXECUTE QUERY
	db_Manage_Film_Example_db.Film.find(criteria).exec( function (err, list) {
		if (err) return handleError(err, res);
		res.send(list);
	})

});


//CRUD - GET ONE
	
app.get(properties.api + '/film/:id', function(req, res){
	db_Manage_Film_Example_db.Film.findOne({_id:req.params.id}).populate('filmMaker').exec(function(err, obj){
		if (err) return handleError(err, res);
		res.send(obj);
	});
});
			
