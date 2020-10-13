/**
 * ! Feedback:
 * Not a lot to add feedback on here, this is a pretty straight forward homework. However there is some feedback on a few things here.
 * Some notes: As long as you're not sacrificing readability less lines of code is always better than more. Seems like you have a pretty
 * good handle on all the concepts covered from the first lecture.
 */

//step 1 through 5 not show-able in comments

console.log('Hello world!'); //step 6
console.warn('This is a warning!'); //step 7
console.error('Error! System critical!'); // step 8

var var1 = 'String'; //step 9 and 10

console.log(var1); //step 11
console.log('\n'); //step 12
// console.log(''); //! another way to enter a blank line
console.log(var1); //shows the blank line

var var2 = 4; //step 13

console.log(var1 + var2); //step 14
//step 15 - guess is String4 //! Correct, good work

//! Nice job! One other type we have is the Object type.
/* A way to multi line comment
Some types covered in class today
strings, numbers, boolean, undefined
--step 16a */

/**
 * An alternate way to multi line comment used for more important info
 * Some types covered in class today
 * strings, numbers, boolean, undefined
 *
 * --step 16b
 *
 */

console.log(typeof var1); //step 17
//step 18 - guess is string //! Correct, good job

var var3 = 'text'; //step 19

console.log(var3); //step 20

var3 = true; //step 20

console.log(var3); //step 21

var1 = 5; //step 22
var2 = '5'; //step 23

console.log(var1 + Number(var2)); //step 24 //! Great work
/**
 * I like your solution for step 24 here. I did pretty much the same I just used parseInt() instead of Number()
 * To explain a little more the reason I like it is because you did it all in one line instead of two. for example
 *      var1 = Number(var1);
 *      var solution = var1 + var2;
 *      console.log(solution);
 * Either are valid however I don't like to create unnecessary variables or add extra lines of code if I don't have too.
 * However don't sacrifice readability for less lines of code. I still consider this very readable.
 */
