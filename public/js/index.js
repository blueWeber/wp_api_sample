// index.js

var url = "http://blueweber.cafe24.com/wordpress/wp-json/wp/v2/posts?per_page=5";

function loadWPAPI() {
	$.ajax({
		url: url
	})
	.done(function(data) {
		parseData(data);
	});
}

function parseData(data) {
	var l = data.length;
	
	for(var i = 0; i < l; i++) {
		var div = $('<div></div>');
		var title = data[i].title.rendered;
		div.text(title);

		$('body').append(div);
	}
}

//
$(document).ready(function() {
	loadWPAPI();
});