var numberoftabs = 0;

function makeTable(newtab) {
	if(errorsfound()) return;
	var temp;
	var xs = parseInt(document.getElementById("xs").value);
	var xe = parseInt(document.getElementById("xe").value);
	var ys = parseInt(document.getElementById("ys").value);
	var ye = parseInt(document.getElementById("ye").value);
	
	if(xs > xe) {
		temp = xe;
		xe = xs;
		xs = temp;
	}
	
	if(ys > ye) {
		temp = ye;
		ye = ys;
		ys = temp;
	}
	
	var tb
	if(newtab)
		tb = document.createElement("table");
	else tb = document.getElementById("dynamic-table");
	
	//clear table
	while(tb.hasChildNodes()) {
		tb.removeChild(tb.lastChild);
	}
	
	// make vertical header
	var newr = document.createElement("tr");
	var newh = document.createElement("th");
	newr.appendChild(newh);
	for(var i = xs; i <= xe; i++) {
		newh = document.createElement("th");
		newh.innerHTML = i;
		newr.appendChild(newh);
	}
	tb.appendChild(newr);
	
	//iterate down table
	for(var i = ys; i <= ye; i++) {
		newr = document.createElement("tr");
		
		//make horizonal header
		newh = document.createElement("th");
		newh.innerHTML = i;
		newr.appendChild(newh);
		
		//insert values
		for(var j = xs; j <= xe; j++) {
			var newd = document.createElement("td");
			newd.innerHTML = i*j;
			newr.appendChild(newd);
		}
		
		//insert row
		tb.appendChild(newr);
	}
	if(newtab) {
		++numberoftabs;
		
		var tabs = $( "#tabholder" ).tabs();
		var tabhead = tabs.find( "ul" );
		$( "<li id='tab" + numberoftabs + "'><a href='#" + numberoftabs + "'>" + xs + "-" + xe + ', ' + ys + "-" + ye + "</a><button onclick='deleteTab(" + numberoftabs + ")'>x</button></li>" ).appendTo( tabhead );
		$( "<div id='" + numberoftabs + "'></div>" ).appendTo( tabs );
		
		tabs.tabs( "refresh" );
		document.getElementById(numberoftabs).appendChild(tb);
	}
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

function deleteAllTabs() {
	for(var i = 0; i <= numberoftabs; ++i) {
		if(document.getElementById("tab" + i) != null)
			deleteTab(i);
	}
}

function deleteTab(tabnum) {
	tab = document.getElementById("tab" + tabnum);
	tab.parentNode.removeChild(tab);
	tabcontent = document.getElementById(tabnum);
	tabcontent.parentNode.removeChild(tabcontent);
}