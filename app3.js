//step 3 & 4
var game = { 
    win: '0',
    loss: '0',
}

//step 5
var choices = ['rock', 'paper', 'scissors'];

//step 6 
var random1 = (Math.floor(Math.random() * 3));
var random2 = (Math.floor(Math.random() * 3));

// step 7
var bot1 = choices[random1];
var bot2 = choices[random2];

// step 8
if ( bot1 > bot2 ) {
    game.win = '1';
} else if ( bot2 > bot1 ) {
    game.loss = '1';
}

// step 9
var results = '';

// step 10
if ( game.win > 0 ) { 
    game.win = '1',
    results += bot2 + ' ' + 'beats' + ' ' + bot1;
}

// step 11
if ( game.loss > 0 ) {
    game.loss = '1',
    results +=  bot2 + ' ' + 'beats' + ' ' + bot1;
}

// // step 12
if ( game.win === '0' && game.loss === '0'  || game.win === '1' && game.loss === '1' ) {
    results += 'tie game';
}

// // step 13
console.log(results);