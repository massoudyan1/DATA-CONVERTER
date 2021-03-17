console.log("script startet");
function reverse(s){
    return s.split("").reverse().join("");
}

function decToBin(){
	let num = 0.00;
	let remainder = "";
	let n;

	num = document.getElementById("decToBin").value;
	
	for(;;){
		num = num /2;
		n = parseInt(num);

		if( parseFloat(num - n) == 0) 
			remainder += "0";
			else 
			remainder += 1;

		console.log("n = " + n);
		console.log("remainder = " + reverse(remainder));

		if(num == 0){
			document.getElementById("decToBinResult").innerHTML = reverse(remainder);
			return null;
		}
		num = parseFloat(n);
	}


	
}