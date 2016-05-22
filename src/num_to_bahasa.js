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

	NumberToBahasa.prototype.parse = function(number) {
		//todo : implement validation
		var str = number + "";
		var arr = str.split("");

		var result = "";
		var index = 0;
		for (var i = arr.length - 1; i >= 0; i--) {
			if (arr[index] == "0") {
				index++;
				continue;
			}
			result += ((arr[index] == "1" ? bahasaMap[arr[index]] : bahasaMap[arr[index]] + " ") + numOfDigitsMap[i + 1] + " ");
			index++;
		}

		return result;
	}

	window.NumberToBahasa = NumberToBahasa;

}(window);