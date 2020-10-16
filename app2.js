//! Everything looked great! I hope javascript is going well so far, my main feedback on this one is that you had slight misstep on the .shift() & .pop() method. Otherwise everything else looked good, keep up the good work!

// step 1-4 set up

//? Just commenting these out to disable the pop-ups, everything looked great
// var num1 = prompt('Enter a number'); //step 5a
// console.log(num1); //step 5b

// var num2 = prompt('Enter another number'); //step 6a
// console.log(num2); //step 6b

// num3 = Math.pow(Number(num1), Number(num2));
// alert(num3); //step 7
// alert(num1 ** num2); //? Just another way to do the same thing

console.log(Math.floor(Math.random() * 3) + 1); //step 8

var arr = ['a', 'b', 'c', 'd', 'e', 'f']; //step 9
// arr.pop('f'); //step 10       | or arr.pop([5]); //! Pop removes the last item of the array, it doesn't require any parameters. I still works even if you pass in the parameter though. 
// console.log(arr);
arr.pop();

arr.push('g'); //step 11
// console.log(arr);

// arr.shift('a'); //step 12 //! Shift removes the first item from the array and accepts no parameters. It still works when you pass a parameter in, just like in class we could pass in to many parameters (you shouldn't) and it works fine. It just gets added to the arguments array.
arr.shift();  
// console.log(arr);

arr.unshift(1); //step 13
console.log(arr); //step 14

arr.splice(2, 3, ['cat', 'dog', 'rabbit']); //step 15  or did you mean this arr.splice(2, 3, 'cat', 'dog', 'rabbit');? //? I meant how you've done it, ['cat', 'dog', 'rabbit] I wanted to include a multi dimensional array example.
// console.log(arr);

var copied = arr.slice(0, 5); //step 16
// console.log(copied);

console.log(copied[2][1]); //step 17
