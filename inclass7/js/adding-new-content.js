$(function() {
	$('ul').before('<p>Just Updated</p>');
	$('li.hot').prepend('+');
	var liarr = $('li');
	liarr.last().after('<li id="four"><em>gluten free</em> soy sauce</li>')
});