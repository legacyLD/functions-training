function combineWords(word1, word2) {
    // TODO: Place your code here
    return (word1 + word2);
}

var result = combineWords('dog', 'house');
console.log(result);
// displays 'doghouse'

function repeatPhrase(phrase, n) {
	for(var i = 0; i < n; i++) {
		console.log(phrase);
	}
}

repeatPhrase("Hello", 5);
// displays
// Hello
// Hello
// Hello
// Hello
// Hello

function toTheNthPower(number, power) {
    // TODO: Place your code here
    result = 1;
    for(i=0; i<power; i++) {
    result *= number;
    }
    return result;
}

var result = toTheNthPower(4, 5);
console.log(result);

function areaOfACircle(radius) {
    // TODO: Place your code here
    //pi*r*r
    for(i=0; i<1; i++) {
        radius *= radius;
        //console.log(radius);
    }
    return radius * Math.PI;
}

var result = areaOfACircle(2);
console.log(result);
// displays approximately 12.57

function pythagoreanTheorem(a, b) {
    // TODO: Place your code here
    var twoSidesMath = (a*a)+(b*b);
    result = Math.sqrt(twoSidesMath);
    return result;
}

var result = pythagoreanTheorem(3, 4);
console.log(result);
// should display 5;

function isXEvenlyDivisibleByY(x, y) {
    // TODO: Place your code here
    if (x%y==0) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

var result = isXEvenlyDivisibleByY(99, 3);
console.log(result);
// displays true

//THIS ONE IS NOT FINISHED!!
function countVowels(word) {
    var wordLetters = word.split('');
    console.log(wordLetters);
    var vowels = ["a", "e", "i", "o", "u", "y"];
    for(n=0; n<=wordLetters.lenth; n++) {
        var currentLetter = wordLetters[n];
        var currentVowel = vowels[n];
        if(currentLetter==currentVowel) {
            return result = result + 1;
        }
        else {
            return result = "You word has no vowels."
        }
    }
}

var result = countVowels("atealing");
console.log(result);
// displays 3
