var unirest = require('unirest');
var async = require('async');

module.exports = function(tweets){
	
	/*
		
		0 7
		7 10
		
	*/
	
	var page = 7;
	var pageCount = tweets.length/page;
	var start,end;
	
	for(var i=0;i<pageCount;i++){
		
		start = i*page;
		end = (i == pageCount)?pageCount:(i*page+page);
		
		console.log('end:'+end);
		
		var allTweets = "";
		
		for(var j=start;j<end;j++){
		
			console.log(j);
			
			allTweets += tweets[j].text + "\n";
		}
		
		unirest.post("http://app.intelligentsearchassistant.com/main/analyzeTweet.htm")
			//.header("X-Mashape-Key", "e6jk7742uzmshc1Q6Bmyi2nZstr9p1wHmTNjsnE72AAsdf5FhP")
			.header("Content-Type", "multipart/form-data")
			.field("tweets", allTweets)
		
			//.field("endpoints", "sentiment")
			//.field("entities_type", "text")
			//.field("output_format", "json")
			.end(function(result) {
			//res.send(result.body);
			
			var body = JSON.parse(result.body);
			
			if(result.status != 200 || body.status != 0){
				
					console.log('error analyzing tweets');
					console.log(result.status);
					console.log(result.headers);
					console.log(result.body);
					return;
			} 
		
			var tweet;
			
			for(var j=start;j<end;j++){
		
				tweet = tweets[j];
				tweet.sentiment = body.object[j-start];
				tweet.calculated = true;
				
				console.log(tweet.sentiment + ':' + tweet.text);
			}
		});
	}
	
	console.log("tweet sayisi "+tweets.length);

}