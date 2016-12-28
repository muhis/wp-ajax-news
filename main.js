var btn = document.getElementById('btn');
var demo = document.getElementById('demo')
btn.addEventListener('click',function(){
	var ourRequest = new XMLHttpRequest();
	  ourRequest.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	     var ourData = JSON.parse(ourRequest.responseText);
	     console.log(ourData);
	    }
	  };
	  ourRequest.open("GET", "http://zinkki.com/theshortcut/wp-json/wp/v2/posts?per_page=1", true);
	  ourRequest.send();
})

