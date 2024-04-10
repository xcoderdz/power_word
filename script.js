// script by abderrahman
const ABC = {
	"a": 1,
	"b": 2,
	"c": 3,
	"d": 4,
	"e": 5,
	"f": 6,
	"g": 7,
	"h": 8,
	"i": 9,
	"j": 10,
	"k": 11,
	"l": 12,
	"m": 13,
	"n": 14,
	"o": 15,
	"p": 16,
	"q": 17,
	"r": 18,
	"s": 19,
	"t": 20,
	"u": 21,
	"v": 22,
	"w": 23,
	"x": 24,
	"y": 25,
	"z": 26
	}

let inputWord = document.getElementById("text");
let don = document.getElementById("result");

function cheked(number){
	if (number == 0){
		don.style.color= "black";
	}else if (number <= 49){
		don.style.color= "red";
	}else if (number <= 79){
		don.style.color= "orange";
	}else {
		don.style.color= "green";
	}
}

function calc(arayOne, arayTwo){
	// lop in arays
	let result = 0;
	for (let x in arayOne){
		for (let y in arayTwo){
			if (arayTwo[y] == x){
				result += arayOne[x]
			}
		}
	}
	cheked(result);
	return don.innerHTML = "The Result : " + result + "%"
}
//calc(ABC, inputWord.value)

