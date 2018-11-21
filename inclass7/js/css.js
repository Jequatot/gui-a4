$(function() {
	var backgroundColor = $('li#one').css('background-color');
	$('ul').append('<p>' + backgroundColor + '</p>');
	$('li').css({
		'background-color': '#c5a996',
		'border': '1px solid white',
		'color': 'black',
		'text-shadow': 'none',
		'font-family': 'georgia'
	});
});