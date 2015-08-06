
var today = new Date();
console.log('Today is ' + today);
console.log('Today (as string) is ' + today.toString());

var christmas = new Date('2015 12 25');
console.log('Christmas is ' + christmas);

// It's better to provide each component of date as a 
// separate argument (yr, mo, day, hr, min, sec, msec)
var halloween = new Date('2015, 10, 31');
console.log('Halloween is ' + halloween.toString());

// Date getters
console.log(halloween.getDay());      // 6 = thu
console.log(halloween.getDate());     // 31
console.log(halloween.getMonth());    // 9
console.log(halloween.getFullYear()); // 2015

// Timestamp representing msec since the Epoch
console.log(today.getTime());

// Date setters
var birthday = new Date();
birthday.setMonth(5);  // Months indexed from 0
birthday.setDate(8);
console.log('Birthday is ' + birthday);

var birthdate = new Date();
// Doesn't account for timezone!
birthdate.setMonth(5);  // Months indexed from 0
birthdate.setDate(8);
birthdate.setFullYear(1957);
birthdate.setHours(06);
birthdate.setMinutes(30);
console.log('Born on ' + birthdate);