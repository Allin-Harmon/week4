for (i = 0; i <= 100; i++) {
    // console.log(i); // wasn't sure if you wanted this logged too so i just commented it out
    var fizz = i % 3;
    var buzz = i % 5;

    if ( fizz === 0 && buzz === 0 ) {
    console.log('fizzbuzz');
    } else if (buzz === 0) {
    console.log('buzz');
    }else if ( fizz === 0 ) {
    console.log ('fizz')
    }

}