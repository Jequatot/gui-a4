$(function() {
	$('li:contains("pine")').text('almonds');
	$('li.hot').html(function(i, text) {
		return '<em>' + text + '</em>';
	});
	$('li#one').remove();
});