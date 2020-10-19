//! Great work. Added a few extras and some feedback check it out, let me know if you have questions.

for (i = 0; i <= 100; i++) {
	//? missing var keyword on line 1, I have it added in my example below.
	// console.log(i); // wasn't sure if you wanted this logged too so i just commented it out //? Yes I did want to see this number though there wasn't any specific instructions to do so. This works in an example below I added a means of accomplishing the same thing except now it only writes the number if its divisible by 3, 5, or both, additionally they're on the same line.
	var fizz = i % 3; //! This was really clever, I've always written out each time. Great work!
	var buzz = i % 5;

	//? You mentioned it before in one of our discussions so I added in an example of how you could check for 0 and skip that one, since it is technically divisible by 3 or 5 with no remainder. Alternative to my solution an easier work around would be to just start i @ 1 instead of 0.
	if (fizz === 0 && buzz === 0) {
		console.log('fizzbuzz');
	} else if (buzz === 0) {
		console.log('buzz');
	} else if (fizz === 0) {
		console.log('fizz');
	}
}

// for (var i = 0; i <= 100; i++) {
// 	var fizz = i % 3;
// 	var buzz = i % 5;

// 	if (i === 0) {
// 		continue; //? Check if i is 0, move on to next iteration
// 	} else if (fizz === 0 && buzz === 0) {
// 		console.log(i + ' fizbuzz');
// 	} else if (buzz === 0) {
// 		console.log(i + ' buzz');
// 	} else if (fizz === 0) {
// 		console.log(i + ' fizz');
// 	}
// }
