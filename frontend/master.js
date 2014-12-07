function fetchTweets(){
	
	$.ajax('http://localhost:8888/tweets',{
		data:{
			from:moment().subtract(1,'hours').toJSON(),
			to:moment().toJSON()
		},
		success:function(data){
			console.log(data);
			draw(data);
		}
	});
	
	
}

fetchTweets();

function draw(data){
	
	Raphael('worldmap','100%','100%',function() {

    var r = this;
		
		var wm = $('#worldmap');
		
		r.setViewBox(0,0,1000,400,true);
		
    var over = function () {
       this.c = this.c || this.attr("fill");
       this.stop().animate({fill: "#FFCB33"}, 500);
    },
		
    out = function () {
      this.stop().animate({fill: this.c}, 500);
    };
				
    r.setStart();
		
    for(var country in worldmap.shapes) {
		
			var path = worldmap.shapes[country];
      r.path(path).attr({stroke: "#ccc6ae", fill: "#eeeeee", "stroke-opacity": 0.25});
    }
		
    var world = r.setFinish();
	
		world.hover(over, out);
    
		/*
    world.getXY = function (lat, lon) {
        return {
            cx: lon * 2.6938 + 465.4,
            cy: lat * -2.6938 + 227.066
        };
    };
    world.getLatLon = function (x, y) {
        return {
            lat: (y - 227.066) / -2.6938,
            lon: (x - 465.4) / 2.6938
        };
    };*/
		
		/*
    var latlonrg = /(\d+(?:\.\d+)?)[\xb0\s]?\s*(?:(\d+(?:\.\d+)?)['\u2019\u2032\s])?\s*(?:(\d+(?:\.\d+)?)["\u201d\u2033\s])?\s*([SNEW])?/i;
    
		world.parseLatLon = function (latlon) {
        var m = String(latlon).split(latlonrg),
            lat = m && +m[1] + (m[2] || 0) / 60 + (m[3] || 0) / 3600;
        if (m[4].toUpperCase() == "S") {
            lat = -lat;
        }
        var lon = m && +m[6] + (m[7] || 0) / 60 + (m[8] || 0) / 3600;
        if (m[9].toUpperCase() == "W") {
            lon = -lon;
        }
        return this.getXY(lat, lon);
    };
		
    cities.onclick = function (e) {
      e = e || window.event;
      var target = e.target || e.srcElement || document;
      if (target.tagName == "A") {
          var txt = decodeURIComponent(target.href.substring(target.href.indexOf("#") + 1)),
              attr = world.parseLatLon(txt);
          ll.value = txt;
          attr.r = 0;
          dot.stop().attr(attr).animate({r: 5}, 1000, "elastic");
          
          return false;
      }
    };*/
});
	
}

