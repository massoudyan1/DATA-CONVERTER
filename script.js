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
			remainder += "1";

		console.log("n = " + n);
		console.log("remainder = " + reverse(remainder));

		if(num == 0){
			document.getElementById("decToBinResult").innerHTML = reverse(remainder);
			return null;
		}
		num = parseFloat(n);
	}
}

	function decToHex(){
		let num = 0.00;
		let remainder = "";
		let n;
	
		num = document.getElementById("decToHex").value;
		
		for(;;){
			num = num /16;
			n = parseInt(num);

			console.log("n = " + n);
			console.log("remainder = " + reverse(remainder));


			if(parseFloat(num - n) * 16 < 10)
				remainder += "" + (parseFloat(num - n) * 16);
			else {
				switch (parseFloat(num - n) * 16) {
					case 10:
						remainder += "A";
						break;
					case 11:
						remainder += "B";
						break;
					case 12:
						remainder += "C";
						break;
					case 13:
						remainder += "D";
						break;
					case 14:
						remainder += "E";
						break;
					case 15:
						remainder += "F";
						break;
						
					default:
						break;
				}
			}
			parseFloat(num - n) * 16;
			if(num == 0){
				document.getElementById("decToHexResult").innerHTML = reverse(remainder);
				return null;
			}
			
			num = parseFloat(n);
		}

	
}