// cran_cg's TypeScript Class
// Add link here

// Basic string exercises 
// Fill in the code for the functions below


// A. donuts
// Given an int count of a number of donuts, return a string
// of the form 'Number of donuts: <count>', where <count> is the number
// passed in. However, if the count is 10 or more, then use the word 'many'
// instead of the actual count.
// So donuts(5) returns 'Number of donuts: 5'
// and donuts(23) returns 'Number of donuts: many'

function donuts(count){
	// +++your code here+++
	let statement: string = "Number of donuts" ;
	if (count >= 10){
		statement += "many";
	}
	else{
		statement += count;
	}

	return statement;
}

// B. both_ends
// Given a string s, return a string made of the first 2
// and the last 2 chars of the original string,
// so 'spring' yields 'spng'. However, if the string length
// is less than 2, return instead the empty string.
function both_ends(s){
	//+++your code here+++
	let new_string = s.slice(0,2) + s.slice(-2);
	return new_string;
}
// C. fix_start
// Given a string s, return a string
// where all occurences of its first char have
// been changed to '*', except do not change
// the first char itself.
// e.g. 'babble' yields 'ba**le'
// Assume that the string is length 1 or more.
// Hint: s.replace(stra, strb) returns a version of string s
// where all instances of stra have been replaced by strb.
function fix_start(s){
	//+++your code here+++
	let new_string =  s[0] + s.slice(1,).replace(s[0], "*");
	return new_string;
}

// D. MixUp
// Given strings a and b, return a single string with a and b separated
// by a space '<a> <b>', except swap the first 2 chars of each string.
// e.g.
//   'mix', pod' -> 'pox mid'
//   'dog', 'dinner' -> 'dig donner'
// Assume a and b are length 2 or more.
function mix_up(a, b){
	//+++your_code_here+++
	let new_string = b.slice(0,2) + a.slice(2,) + " " + a.slice(0,2) + b.slice(2,); 
	return new_string;
}

let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() {
    alert(donuts(10));
    alert(both_ends("Hello"));
    alert(fix_start("Hello"));
    alert(mix_up("google", "microsoft"));
}

document.body.appendChild(button);
