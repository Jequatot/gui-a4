var numberoftabs = 0;

function makeTable() {
	if(errorsfound()) return;
	var temp;
	
	if(document.getElementById("xs").value > document.getElementById("xe").value) {
		temp = document.getElementById("xe").value;
		document.getElementById("xe").value = document.getElementById("xs").value;
		document.getElementById("xs").value = temp;
	}
	
	if(document.getElementById("ys").value > document.getElementById("ye").value) {
		temp = document.getElementById("ye").value;
		document.getElementById("ye").value = document.getElementById("ys").value;
		document.getElementById("ys").value = temp;
	}
	
	var tb = document.createElement("table");
	
	//clear table
	while(tb.hasChildNodes()) {
		tb.removeChild(tb.lastChild);
	}
	
	// make vertical header
	var newr = document.createElement("tr");
	var newh = document.createElement("th");
	newr.appendChild(newh);
	for(var i = document.getElementById("xs").value; i <= document.getElementById("xe").value; i++) {
		newh = document.createElement("th");
		newh.innerHTML = i;
		newr.appendChild(newh);
	}
	tb.appendChild(newr);
	
	//iterate down table
	for(var i = document.getElementById("ys").value; i <= document.getElementById("ye").value; i++) {
		newr = document.createElement("tr");
		
		//make horizonal header
		newh = document.createElement("th");
		newh.innerHTML = i;
		newr.appendChild(newh);
		
		//insert values
		for(var j = document.getElementById("xs").value; j <= document.getElementById("xe").value; j++) {
			var newd = document.createElement("td");
			newd.innerHTML = i*j;
			newr.appendChild(newd);
		}
		
		//insert row
		tb.appendChild(newr);
	}

	++numberoftabs;
	
	var tabs = $( "#tabholder" ).tabs();
	var tabhead = tabs.find( "ul" );
	$( "<li><a href='#" + numberoftabs + "'>Tab " + numberoftabs + "</a></li>" ).appendTo( tabhead );
	$( "<div id='" + numberoftabs + "'></div>" ).appendTo( tabs );
	
	tabs.tabs( "refresh" );
	document.getElementById(numberoftabs).appendChild(tb);
}

function errorsfound() {
	result = "";
	if(isNaN(parseInt(document.getElementById("xs").value))) {
		result += "ERROR: invalid value for horizontal start: " + document.getElementById("xs").value + "<br>";
	}
	
	if(isNaN(parseInt(document.getElementById("xe").value))) {
		result += "ERROR: invalid value for horizontal end: " + document.getElementById("xe").value + "<br>";
	}
	
	if(isNaN(parseInt(document.getElementById("ys").value))) {
		result += "ERROR: invalid value for vertical start: " + document.getElementById("ys").value + "<br>";
	}
	
	if(isNaN(parseInt(document.getElementById("ye").value))) {
		result += "ERROR: invalid value for vertical end: " + document.getElementById("ye").value + "<br>";
	}
	
	document.getElementById("error").innerHTML = result;
	if(result == "") return false;
	return true;
}