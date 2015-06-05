$(document).ready(function() {
	$.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=LASTFM_USERNAME&api_key=LASTFM_API_KEY&limit=2&format=json&callback=?", function(data) {
		    var html = '';
		    var counter = 1;
		    $.each(data.recenttracks.track, function(i, item) {
			        if(counter == 1) {
			        html += 'Listening to: <span><a href="' + item.url + '" target="_blank">' + item.name + '</a> - ' + item.artist['#text'] + '</span>';
			        }
			        counter++
		    });

		    $('.listening-to').append(html);

	});

});
