// step 1-4 set up 

var num1 = prompt("Enter a number"); //step 5a 
console.log(num1); //step 5b

var num2 = prompt("Enter another number"); //step 6a 
console.log(num2); //step 6b

num3 = Math.pow(Number(num1), Number(num2));
alert(num3); //step 7

console.log(Math.floor(Math.random() * 3) + 1);//step 8

var arr = ['a', 'b', 'c', 'd', 'e', 'f']; //step 9
arr.pop('f'); //step 10       | or arr.pop([5]);
console.log(arr);

arr.push('g'); //step 11
// console.log(arr);

arr.shift('a'); //step 12
// console.log(arr);

arr.unshift(1); //step 13
console.log(arr); //step 14

arr.splice(2, 3, ['cat', 'dog', 'rabbit']);//step 15  or did you mean this arr.splice(2, 3, 'cat', 'dog', 'rabbit');?
// console.log(arr); 

var copied = arr.slice(0, 5);//step 16
// console.log(copied);

console.log(copied[2][1]);//step 17
