var config = require('./config.js');
var fetcher = require('startup-istanbul-tweet-fetcher')(config);
var unirest = require('unirest');

fetcher.calcSentiment();

