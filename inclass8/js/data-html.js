// NOTE: If you run this file locally
// You will not get a server status and the example will fail
// Comment out lines 9 and 11 if you are working locally

var xhr = new XMLHttpRequest();                 // get the pipe to the XML data

xhr.onload = function() {                       // if loaded...
  // The following conditional check will not work locally - only on a server
  if(xhr.status === 200) {                       // if loaded correctly...
    document.getElementById('content').innerHTML = xhr.responseText; // insert data into html content
  }
};

xhr.open('GET', 'data/data.html', true);        // get xml data
xhr.send(null);                                 // send through pipe