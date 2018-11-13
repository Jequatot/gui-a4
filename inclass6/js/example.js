var list = document.getElementById('one').parentNode;

// ADD NEW ITEM TO END OF LIST
var newitem = document.createElement('li');
newitem.innerHTML = 'cream';
list.appendChild(newitem);

// ADD NEW ITEM START OF LIST
var newitem = document.createElement('li');
newitem.innerHTML = 'kale';
list.insertBefore(newitem, document.getElementById('one'));

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var items = document.getElementsByTagName('li');
for(i = 0; i < items.length; i++) {
	items[i].className = "cool";
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
document.getElementsByTagName("h2")[0].innerHTML += ": " + items.length + " items";