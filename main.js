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
	  ourRequest.open("GET", "https://learnwebcode.github.io/json-example/animals-1.json", true);
	  ourRequest.send();
})

function renderHTML(data){
	for (i=0; i< data.length; i++){
		demo.insertAdjacentHTML('beforeend','</br>' + data[i].name);
	}
	
}