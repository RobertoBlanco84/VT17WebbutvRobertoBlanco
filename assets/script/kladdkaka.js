"use strict"

	function amountFunction() {
    document.getElementById("amount").addEventListener("onchange", amountFunction);
        var amount = document.getElementById("amount").value;
	 	
	 	if(amount === "14"){
	 	 document.getElementById("butter").innerHTML = "140";
	     document.getElementById("eggs").innerHTML = "2,8";
	     document.getElementById("suger").innerHTML = "4,2";
	     document.getElementById("flour").innerHTML = "2,8";
	     document.getElementById("cocoa").innerHTML = "1,4";
	     document.getElementById("vanillaSuger").innerHTML = "1,4";
	     document.getElementById("salt").innerHTML = "1,4";
	 	}
	 	if(amount === "12"){
	 	 document.getElementById("butter").innerHTML = "120";
	     document.getElementById("eggs").innerHTML = "2,4";
	     document.getElementById("suger").innerHTML = "3,6";
	     document.getElementById("flour").innerHTML = "2,4";
	     document.getElementById("cocoa").innerHTML = "1,2";
	     document.getElementById("vanillaSuger").innerHTML = "1,2";
	     document.getElementById("salt").innerHTML = "1,2";
	 	}
	   	if(amount === "10"){
	     document.getElementById("butter").innerHTML = "100";
	     document.getElementById("eggs").innerHTML = "2";
	     document.getElementById("suger").innerHTML = "3";
	     document.getElementById("flour").innerHTML = "2";
	     document.getElementById("cocoa").innerHTML = "1";
	     document.getElementById("vanillaSuger").innerHTML = "1";
	     document.getElementById("salt").innerHTML = "1";
	    }

	    if(amount === "8"){
	     document.getElementById("butter").innerHTML = "80";
	     document.getElementById("eggs").innerHTML = "1,6";
	     document.getElementById("suger").innerHTML = "2,4";
	     document.getElementById("flour").innerHTML = "1,6";
	     document.getElementById("cocoa").innerHTML = "0,8";
	     document.getElementById("vanillaSuger").innerHTML = "0,8";
	     document.getElementById("salt").innerHTML = "0,8";
	    }

	    if(amount === "6"){
	     document.getElementById("butter").innerHTML = "60";
	     document.getElementById("eggs").innerHTML = "1,2";
	     document.getElementById("suger").innerHTML = "1,8";
	     document.getElementById("flour").innerHTML = "1,2";
	     document.getElementById("cocoa").innerHTML = "0,6";
	     document.getElementById("vanillaSuger").innerHTML = "0,6";
	     document.getElementById("salt").innerHTML = "0,6";
	    }

	    if(amount === "4"){
	     document.getElementById("butter").innerHTML = "40";
	     document.getElementById("eggs").innerHTML = "0,8";
	     document.getElementById("suger").innerHTML = "1,2";
	     document.getElementById("flour").innerHTML = "0,8";
	     document.getElementById("cocoa").innerHTML = "0,4";
	     document.getElementById("vanillaSuger").innerHTML = "0,4";
	     document.getElementById("salt").innerHTML = "0,4";
	    }

	    if(amount === "2"){
	     document.getElementById("butter").innerHTML = "20";
	     document.getElementById("eggs").innerHTML = "0,4";
	     document.getElementById("suger").innerHTML = "0,6";
	     document.getElementById("flour").innerHTML = "0,4";
	     document.getElementById("cocoa").innerHTML = "0,2";
	     document.getElementById("vanillaSuger").innerHTML = "0,2";
	     document.getElementById("salt").innerHTML = "0,2";
	    }
    }
    
    /*
    var isClicked = true;
    document.getElementsByClassName('star').addEventListener('onmouseover', colorBlack);
    function colorBlack(x){
    	
    	if(!isClicked){
        var black = x.style.color = "black";
    	x.style.color = 'black';
    	}
    	isClicked = false;	  
    }

    document.getElementsByClassName('star').addEventListener('onmouseout',colorRed);
	function colorRed(x) {
  	
  		if(!isClicked){
  		var red = x.style.color = "red"; 
  		x.style.color = 'red'; 
  		}
  		isClicked = false;		
  	}
  	
  	document.getElementById('star').addEventListener('onclick', colorGreen);
  	function colorGreen(x){
  		x.style.color = 'green';
  		isClicked = true;
  		
  		for (var i = 0; i < x.length; i++) {
        if(x[5] === isClicked)
        x[5].style.color = "green";
        }  

	}*/

	/*document.getElementById('rate').addEventListener('onclick', update);
	function update(rate){

	}*/

  	//AJAX
  	window.onload = loadRate();

  	function loadRate(){
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function(){
	
		if(this.readyState === 4 && this.status === 200){
		var json = JSON.parse(this.responseText);
		var rating = json.rating.toFixed(1);	 
            document.getElementById('api').innerText = "Recept: " + json.recipe + ". Röster: " + json.votes + " Betyg:  " + rating;
        }
        else{
        	document.getElementById('loading');
        }
																		
		}
		xhttp.open("GET",  "https://edu.oscarb.se/sjk15/api/recipe/?api_key=fd061472a036810f&recipe=kladdkaka", true);
		xhttp.send();	
	}
	// Slut på loadRate();

  	function update(value){
	var xhttp = new XMLHttpRequest();
	
	
	xhttp.onreadystatechange = function(){
		
		if(this.readyState === 4 && this.status === 200){
		displayUserRate(value);	
		loadRate();
		}
   }
	xhttp.open("GET",  "https://edu.oscarb.se/sjk15/api/recipe/?api_key=fd061472a036810f&recipe=kladdkaka&rating=" + value, true);
	xhttp.send();	
}


function displayUserRate(vote){
	  	document.getElementsByClassName('stars').innerHTML = alert("Du röstade " + vote + " stjärnor. Tack!");

}





 

