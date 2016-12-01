function combineWords(word1, word2) {
    return (word1 + word2);
}

var result = combineWords('dog', 'house');
console.log(result);

////////////////////////////////////////////////////////////////////////////
function repeatPhrase(phrase, n) {
	for(var i = 0; i < n; i++) {
		console.log(phrase);
	}
}

repeatPhrase("Hello", 5);

////////////////////////////////////////////////////////////////////////////
function toTheNthPower(number, power) {
    result = 1;
    for(i=0; i<power; i++) {
    result *= number;
    }
    return result;
}

var result = toTheNthPower(4, 5);
console.log(result);

////////////////////////////////////////////////////////////////////////////
function areaOfACircle(radius) {
    //pi*r*r
    for(i=0; i<1; i++) {
        radius *= radius;
    }
    return radius * Math.PI;
}

var result = areaOfACircle(2);
console.log(result);

////////////////////////////////////////////////////////////////////////////
function pythagoreanTheorem(a, b) {
    var twoSidesMath = (a*a)+(b*b);
    result = Math.sqrt(twoSidesMath);
    return result;
}

var result = pythagoreanTheorem(3, 4);
console.log(result);

////////////////////////////////////////////////////////////////////////////
function isXEvenlyDivisibleByY(x, y) {
    if (x%y==0) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

var result = isXEvenlyDivisibleByY(99, 3);
console.log(result);

////////////////////////////////////////////////////////////////////////////
function countVowels(word) {
	  word = word.toLowerCase();
    var wordLetters = word.split('');
    var vowels = ["a", "e", "i", "o", "u", "y"];
    console.log(wordLetters);
    console.log(vowels);
    var howMany = 0;
	for(var i = 0; i < word.length; i++) {
		if( wordLetters[i] === vowels[0] || wordLetters[i] === vowels[1] || wordLetters[i] === vowels[2] || wordLetters[i] === vowels[3] ||  wordLetters[i] === vowels[4] ||  wordLetters[i] === vowels[5]){
			howMany++;
		}
	}
	return howMany;
}
var result = countVowels("Stealing");
console.log(result);

////////////////////////////////////////////////////////////////////////////
function findWdi(arr){
     for(i=0; i<arr.length; i++) {
         if(arr[i]==='wdi') {
             return true;
         }
     } return false;
 }
//findWdi([9,'Bart Simpson', true, 'wdi']) // returns true
findWdi(['a','b','c']) // returns false

////////////////////////////////////////////////////////////////////////////
function printTriangle(length) {
    for(i=1; i<=length; i++) {
        var asterisk = "*";
        var tree = asterisk.repeat(i)
        console.log(tree);
    }
}

printTriangle(5);

////////////////////////////////////////////////////////////////////////////
function printPyramid(length) {
for(i=1; i<=length; i++) {
    var asterisk = " * ";
    var space = " ";
    var tree = space.repeat(i + 1 - length) + asterisk.repeat(i);
    console.log(tree);
}
}

printPyramid(10);
