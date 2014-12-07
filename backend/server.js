'use strict';

var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var http = require('http').Server(app);

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

var CountrySchema = new mongoose.Schema({
	
	twitterId:String,
	
	name:String,
	
	code:String,
	
	lat:String,
	
	lng:String
	
});

var SummarySchema = new mongoose.Schema({
	
	country:{
		type:mongoose.Schema.ObjectId,
		ref:'country'
	},
	
	average:Number,
	
	count:Number,
	
	date:Date
	
});

var Country = mongoose.model('country',CountrySchema);

var Summary = mongoose.model('summary',SummarySchema);

app.get('/tweets',function(req,res){
	
	var input = req.query;
	
	Summary.find({
		date:{$lt:input.to,$gt:input.from}
	}).populate('country').exec(function(err,summaries){
	
		res.json(summaries);	
	});
});

mongoose.connect("mongodb://si-admin:si-admin@ds055690.mongolab.com:55690/startup-istanbul-hackhaton");

http.listen(8888, function(){
	
});
