
var unirest = require('unirest');





module.exports = function(tweets){

	tweets = tweets.slice(0, 100);

	var allTweets = "";

	console.log("tweet sayisi "+tweets.length)


	tweets.forEach(function(tweet){
		allTweets += tweet.text + "\n";

	});



	//	These code snippets use an open-source library. http://unirest.io/nodejs
	unirest.post("http://app.intelligentsearchassistant.com/main/analyzeTweet.htm")
	//.header("X-Mashape-Key", "e6jk7742uzmshc1Q6Bmyi2nZstr9p1wHmTNjsnE72AAsdf5FhP")
	.header("Content-Type", "multipart/form-data")
	.field("tweets", allTweets)
	
	//.field("endpoints", "sentiment")
	//.field("entities_type", "text")
	//.field("output_format", "json")
	.end(function (result) {
	  //res.send(result.body);
	  	if(result.status != 200){
	  		console.log(result.status);
	  		console.log(result.headers);
	  		console.log(result.body);
	  		return;
	 	} 

	 	console.log(result.body)
	 //  	// These code snippets use an open-source library.
		// unirest.get(result.body.location)
		// .header("X-Mashape-Key", "e6jk7742uzmshc1Q6Bmyi2nZstr9p1wHmTNjsnE72AAsdf5FhP")
		// .end(function (result) {
		//   	console.log(result.status, result.headers, result.body);
		  
		// 	console.log("result sayisi "+result.body.length)

		//   	tweets.forEach(function(tweet){
								
		// 		//tweet.sentiment = 0;
		// 		//tweet.calculated = true;
		// 	});
		//});
	});
}