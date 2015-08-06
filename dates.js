
var today = new Date();
console.log('Today is ' + today);
console.log('Today (as string) is ' + today.toString());

var christmas = new Date('2015 12 25');
console.log('Christmas is ' + christmas);

// It's better to provide each component of date as a 
// separate argument (yr, mo, day, hr, min, sec, msec)
var halloween = new Date('2015, 10, 31');
console.log('Halloween is ' + halloween.toString());