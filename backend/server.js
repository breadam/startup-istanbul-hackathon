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

var TweetSchema = new mongoose.Schema({
		
	twitterId:String,

	createdAt:Date,
	
	savedAt:{
		type:Date,
		default:Date.now
	},
	
	country:{
		twitterId:String,
		name:String,
		code:String,
	},
	
	sentiment:{
		type:Number,
		default:0
	},
	
	calculated:{
		type:Boolean,
		default:false
	}
});

var Tweet = mongoose.model('tweet',TweetSchema);

app.get('/tweets',function(req,res){
	
	var input = req.query;
	
	Tweet.find({
		createdAt:{$lt:input.to,$gt:input.from}
	},function(err,tweets){
		
		/**/
		
		res.json(tweets.length);
		
	});
	
	
});

mongoose.connect("mongodb://si-admin:si-admin@ds055690.mongolab.com:55690/startup-istanbul-hackhaton");

http.listen(8888, function(){
	
});
