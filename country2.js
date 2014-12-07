var config = require('./config.js');

config.twitter = {
		
  consumer_key:'7xQmnGg8C5DRz2rWYmAHTubQk',
	consumer_secret:'czC6rBJ2wruN5fortXhmEA8IcWgxbfH08kw7qIzQgqO0TsOiJD',
	access_token:'272509120-zBZKAZahA23xn2pneSEblBQSGscX8IrlECjOI14s',
	access_token_secret:'G2iebSkkkxbgYEzU6e7Vby8l0NVklEUo58ExrbfIkiV07'
};

var fetcher = require('startup-istanbul-tweet-fetcher')(config);

fetcher.saveCountries();