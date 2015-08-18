// main.js

var url = 'https://api.github.com/orgs/riojs-org/repos',
	request = new XMLHttpRequest();

request.open('GET', url);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var resp = JSON.parse(request.responseText);
    	console.log(resp.length);

  } else {
    // We reached our target server, but it returned an error
  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();