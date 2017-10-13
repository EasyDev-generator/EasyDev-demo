const app = require('../../app.js');
const db_Manage_Film_Example_db = require('../../db/Manage_Film_Example_db_schema.js')
const properties = require('../../properties.js');
const handleError = require('../../security/util.js').handleError;
require('./custom/FilmCustom.js');

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
 */



//CRUD METHODS


//CRUD - CREATE
	
app.post(properties.api + '/film', function(req, res){
	obj = new db_Manage_Film_Example_db.Film(req.body);
	obj.save(function(err){
		if (err) return handleError(err, res);
		res.send(obj);
	});
});
	
//CRUD - REMOVE

app['delete'](properties.api + '/film/:id', function(req, res){
	db_Manage_Film_Example_db.Film.findByIdAndRemove(req.params.id, function (err) {
		  if (err) return handleError(err, res);
		  res.send(err);
	});
});

//CRUD - FIND BY cast
	
app.get(properties.api + '/film/findBycast/:key', function(req, res){

	db_Manage_Film_Example_db.Film.find({ 'cast' : req.params.key}).exec(function(err, list){
		if (err) return handleError(err, res);
		res.send(list);
	});
	
});

//CRUD - FIND BY filmMaker
	
app.get(properties.api + '/film/findByfilmMaker/:key', function(req, res){

	db_Manage_Film_Example_db.Film.find({ 'filmMaker' : req.params.key}).exec(function(err, list){
		if (err) return handleError(err, res);
		res.send(list);
	});
	
});
	
//CRUD - GET ONE
	
app.get(properties.api + '/film/:id', function(req, res){
	db_Manage_Film_Example_db.Film.findOne({_id:req.params.id}).exec(function(err, obj){
		if (err) return handleError(err, res);
		res.send(obj);
	});
});

//CRUD - GET RELATION cast
	
app.get(properties.api + '/film/:id/getcast', function(req, res){

	db_Manage_Film_Example_db.Film.findOne({ _id : req.params.id})
	.populate("cast")
	.exec(function(err, obj){
		if (err) return handleError(err, res);
		
		if(obj)
			res.send(obj.cast);
		else
			res.send();
	});
	
});
	
//CRUD - GET LIST
	
app.get(properties.api + '/film', function(req, res){
	db_Manage_Film_Example_db.Film.find().exec(function(err, list){
		if (err) return handleError(err, res);
		res.send(list);
	});
});

//CRUD - EDIT
	
app.post(properties.api + '/film/:id', function(req, res){
	db_Manage_Film_Example_db.Film.findByIdAndUpdate(req.params.id, req.body, {'new': true}, function(err, obj){
		if (err) return handleError(err, res);
		res.send(obj);
	});
});


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */


/*
Name: search
Description: 
Params: 
*/
app['get'](properties.api + '/film/search', function(req, res){
	res.send({});
});
		
