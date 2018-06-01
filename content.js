
var elements = document.getElementsByTagName('*');

var cit='false';
var perm='false';

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var count = element.childNodes.length;

    //var lmn = document.createElement("h5");
    var str = '';
    var html = '';
    var text = '';
    for (var j = 0; j < element.childNodes.length ;  j++) 
    {
	//var match = false;
        node = element.childNodes[j];
	//alert(node.tagName );
	text = node.nodeValue;
        if (node.nodeType === 3) 
	{

            
   	    //alert(text );
		str = "U.S. Citizen";
		if(text.indexOf(str) > -1)
		{
			
			
			cit = 'true';
			var textSection = element.innerHTML;
			var cut = textSection.split(str);
			
			var clr = 'red';
			//var indexVal = textSection.indexOf("U.S. Citizen");
			html = cut[0] + '<font color="' + clr + '">' + 'U.S.Citizen' + ' </font>' + cut[1];
			element.innerHTML = html;
			
		}

		str = 'Top Secret';
		if(text.indexOf(str) > -1)
		{
			cit = 'true';
			var textSection = element.innerHTML ;
			var cut = textSection.split(str);
			
			var clr = 'red';
			//var indexVal = textSection.indexOf("U.S. Citizen");
			html = cut[0] + '<font color="' + clr + '">' + 'TopSecret' + ' </font>' + cut[1];
			element.innerHTML = html;
			
		}



		str = "security clearance";
		if(text.indexOf(str) > -1)
		{
			cit = 'true';
			var textSection = element.innerHTML ;
			var cut = textSection.split(str);
			
			var clr = 'red';
			//var indexVal = textSection.indexOf("U.S. Citizen");
			html = cut[0] + '<font color="' + clr + '">' + 'securityclearance' + ' </font>' + cut[1];
			element.innerHTML = html;
			
		}
	


		str = "TS/SCI";
	    	if(text.indexOf(str) > -1)
		{
			cit = 'true';
			var textSection = element.innerHTML ;
			var cut = textSection.split(str);
			
			var clr = 'red';
			//var indexVal = textSection.indexOf("U.S. Citizen");
			html = cut[0] + '<font color="' + clr + '">' + 'TSSCI' + ' </font>' + cut[1];
			element.innerHTML = html;
			
		}
		
	
		str = "SECURITY CLEARANCES";
	    	if(text.indexOf(str) > -1)
		{
			cit = 'true';
			var textSection = element.innerHTML ;
			var cut = textSection.split(str);
			
			var clr = 'red';
			//var indexVal = textSection.indexOf("U.S. Citizen");
			html = cut[0] + '<font color="' + clr + '">' + 'SECURITYCLEARANCES' + ' </font>' + cut[1];
			element.innerHTML = html;
			
		}


		str = "Public Trust Level";
	    	if(text.indexOf(str) > -1)
		{
			perm = 'true';
			var textSection = element.innerHTML ;
			var cut = textSection.split(str);
			
			var clr = 'red';
			//var indexVal = textSection.indexOf("U.S. Citizen");
			html = cut[0] + '<font color="' + clr + '">' + 'PublicTrustLevel' + ' </font>' + cut[1];
			element.innerHTML = html;
			
		}
	
		str = "DoD";
	    	if(text.indexOf(str) > -1)
		{
			cit = 'true';
			var textSection = element.innerHTML ;
			var cut = textSection.split(str);
			
			var clr = 'red';
			//var indexVal = textSection.indexOf("U.S. Citizen");
			html = cut[0] + '<font color="' + clr + '">' + 'DD' + ' </font>' + cut[1];
			element.innerHTML = html;
			
		}


		str = "Permanent Resident";
	    	if(text.indexOf(str) > -1)
		{
			perm = 'true';
			var textSection = element.innerHTML ;
			var cut = textSection.split(str);
			
			var clr = 'purple';
			//var indexVal = textSection.indexOf("U.S. Citizen");
			html = cut[0] + '<font color="' + clr + '">' + 'PermanentResident' + ' </font>' + cut[1];
			element.innerHTML = html;
			
		}
   	    
        }
    }
}

element.innerHTML = element.innerHTML + '<input type="hidden" name="uscit" id="uscit" value="' + cit + '"/>';
element.innerHTML = element.innerHTML + '<input type="hidden" name="permres" id="permres" value="' + perm + '"/>';
//alert(document.getElementById('uscit').value);


// Inform the background page that 
// this tab should have a page-action
chrome.runtime.sendMessage({
  from:    'content',
  subject: 'showPageAction'
});

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (msg, sender, response) {
  // First, validate the message's structure
  if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
    // Collect the necessary data 
    // (For your specific requirements `document.querySelectorAll(...)`
    //  should be equivalent to jquery's `$(...)`)
    var domInfo = {
      //alert(document.getElementById('uscit').value);
      uscit:  document.getElementById('uscit').value,
      permres: document.getElementById('permres').value
    };

    // Directly respond to the sender (popup), 
    // through the specified callback */
    response(domInfo);
  }
});



