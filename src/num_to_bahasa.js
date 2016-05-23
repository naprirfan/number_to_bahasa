! function(window){
	'use strict';

	/*
	NUMBER TO WORD DICTIONARY
	key : number of digits
	value : number of units
	*/
	const numOfDigitsMap = {
		"1" : "",
		"2" : "puluh",
		"3" : "ratus",
		"4" : "ribu",
		"5" : "puluh",
		"6" : "ratus",
		"7" : "juta",
		"8" : "puluh",
		"9" : "ratus",
		"10" : "milyar",
		"11" : "puluh",
		"12" : "ratus",
		"13" : "triliun",
		"14" : "puluh",
		"15" : "ratus",
		"16" : "ribu"
	};

	const bahasaMap = {
		"." : "koma",
		"," : "koma",
		"1" : "se",
		"2" : "dua",
		"3" : "tiga",
		"4" : "empat",
		"5" : "lima",
		"6" : "enam",
		"7" : "tujuh",
		"8" : "delapan",
		"9" : "sembilan"
	}

	function NumberToBahasa() {

	}

	function isNumeric(n) {
  		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	NumberToBahasa.prototype.parse = function(number) {

		if (!isNumeric(number)) return "Input is not a number";
		
		var str = number + "";
		var arr = str.split("");

		//if number is too big
		if (number > 9999999999999999) {
			return "number is too big";
		}

		var result = "";
		var index = 0;
		var isDecimal = false;
		for (var i = arr.length - 1; i >= 0; i--) {
			if (bahasaMap[arr[index]] == "koma") {
				isDecimal = true;
				index++;
				result += "koma ";
				break;
			}

			if (arr[index] == "0") {
				index++;
				continue;
			}
			//special, case
			if (i === 0 && arr[index] == "1") {
				result += "satu";
			}
			else {
				result += ((arr[index] == "1" ? bahasaMap[arr[index]] : bahasaMap[arr[index]] + " ") + numOfDigitsMap[i + 1] + " ");
				index++;	
			}
		}

		if (isDecimal) {
			for (var i = index; i < arr.length; i++) {
				result += ((bahasaMap[arr[i]] == "se" ? "satu" : bahasaMap[arr[i]])+ " ");
			}
		}

		return result;
	}

	window.NumberToBahasa = NumberToBahasa;

}(window);