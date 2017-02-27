"user strict"

document.getElementById("idButton").addEventListener("click",
	checkPN);
document.getElementById("leapButton").addEventListener("click",
	checkLeap);
document.getElementById("sumButton").addEventListener("click",
	calcSum);

function checkPN(e) {
	e.preventDefault();
	var value = document.getElementById('idNumber').value;
	
	if (value.length === 10 || value.length === 10 + 1 || value.length === 12 || value.length === 12 + 1) {
		
		if (value.length === 10 || value.length === 10 + 1 ) {
			var stringValue = value.replace(/\D/g, "").split("").slice(0, 10);
		} else {
			var stringValue = value.replace(/\D/g, "").split("").slice(2, 12);
		}

		var sum = 0;
		var isValid;

		for (var i = 0; i < stringValue.length; i++) {
			
			if (i % 2 == 0) {
				if (stringValue[i] * 2 > 9) {
					sum += ((stringValue[i] * 2) - 9);
				} 
				else {
					sum += stringValue[i] * 2;
				}
			} 
			
			else {
				if (stringValue[i] * 1 > 9) {
					sum += ((stringValue[i] * 1) - 9);
				} 
				else {
					sum += stringValue[i] * 1;
				}
			}
		}
		if (sum % 10 === 0) {
			return document.getElementById("idNumberResult").innerHTML = "Valid";
		} 
		else {
			return document.getElementById("idNumberResult").innerHTML = "Not Valid";
		}
	} 
	else {
		alert ("Enter 10 or 12 digits, please.");
		return false; 
	}
}


	function checkLeap(e){
	   e.preventDefault();
	   var value = document.getElementById("leapYear").value;
	
	   var isLeapYear = ((value % 4 === 0) && (value % 100 !== 0) ||
			(value % 400 === 0));

       if(isLeapYear){
       	return document.getElementById("leapYearResult").innerHTML = value + " is a leap year.";
       }
       
       else{
       	return document.getElementById("leapYearResult").innerHTML = value + " is not a leap year.";
       }
	}

	function calcSum(e){
		e.preventDefault();
		var sum = 0;
		var input = document.getElementById("numberSum").value; //sum
		while(input){
			sum += input%10;
			input = Math.floor(input/10);
		}
		return document.getElementById("numberSumResult").innerHTML = sum;
		
	}
	

	



