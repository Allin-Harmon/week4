//! Hey everything looked good I added in a few notes on some different ways to accomplish things. Also the logic on step 8 is a little flawed I have some notes on it. I have a solution that I have excluded for now in case you'd like to resubmit for credit. Let me know what you want to do. Overall great job sorry the instructions suck.

//step 3 & 4
var game = {
	win: '0',
	loss: '0' //? There was a trailing comma, was this intentional? They are perfectly valid in JS, though it is a default setting on prettier if you don't like them I can show you where the setting is. If you do like them no sweat, a lot of people do.
};

//step 5
var choices = ['rock', 'paper', 'scissors'];

//step 6
// var random1 = (Math.floor(Math.random() * 3));
// var random2 = (Math.floor(Math.random() * 3));

// step 7
// var bot1 = choices[random1];
// var bot2 = choices[random2];

//? I know the instructions say to complete it the way you have it done but we can combine step 6 & 7 into one, check the code block below
//* Step 6 & 7
var bot1 = choices[Math.floor(Math.random() * 3)];
var bot2 = choices[Math.floor(Math.random() * 3)];

// step 8 //! This isn't working, e.g. I got "rock beats paper" in the console, this is happening b/c you are comparing strings. 'rock' > 'paper' our computers don't have a concept of rock, paper, scissors. So we have to be more explicit about what beats what.
if (bot1 > bot2) {
	game.win = '1';
} else if (bot2 > bot1) {
	game.loss = '1';
}

// step 9
var results = '';

// step 10
// if (game.win > 0) {
// 	(game.win = '1'), (results += bot2 + ' ' + 'beats' + ' ' + bot1);
// }

// step 11
// if (game.loss > 0) {
// 	(game.loss = '1'), (results += bot2 + ' ' + 'beats' + ' ' + bot1);
// }

// // step 12
// if (
// 	(game.win === '0' && game.loss === '0') ||
// 	(game.win === '1' && game.loss === '1')
// ) {
// 	results += 'tie game';
// } //? I see what you where going for here, however since the browser resets the game.win & game.loss back to 0, i.e. you will never have game.win = 1 & game.loss = 1 since you can only play one game. However if we where to keep the data persistent w/ a DB or if we could play multiple games before refreshing. We can accomplish this w/ just one block of if/else if/else statements instead of splitting them up.

if (game.win > 0) {
	results += bot1 + ' beats ' + bot2;
} else if (game.loss > 0) {
	results += bot2 + ' beats ' + bot1;
} else {
	results += 'tie game';
}

// // step 13
console.log(results);
