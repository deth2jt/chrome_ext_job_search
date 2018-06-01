//alert('me');
// Update the relevant fields with the new data
function setDOMInfo(info) {
	if(info.permres == 'true')
	{
		var img = document.createElement('img');
		img.src = 'check.png';
		document.getElementById('permres').appendChild(img);
	}

	if(info.uscit == 'true')
	{
		var img = document.createElement('img');
		img.src = 'check.png';
		document.getElementById('uscit').appendChild(img);
	}
  //alert(info.uscit);
  //alert(info.permres);
}

// Once the DOM is ready...
window.addEventListener('DOMContentLoaded', function () {
  // ...query for the active tab...
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    // ...and send a request for the DOM info...
    chrome.tabs.sendMessage(
        tabs[0].id,
        {from: 'popup', subject: 'DOMInfo'},
        // ...also specifying a callback to be called 
        //    from the receiving end (content script)
        setDOMInfo);
  });
});


/*



var img = document.createElement('img');
	img.src = 'check.png';
	document.getElementById('permres').appendChild(img);

var img = document.createElement('img');
	img.src = 'check.png';
	document.getElementById('uscit').appendChild(img);

*/
