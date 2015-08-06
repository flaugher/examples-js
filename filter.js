
// Use filter and an anonymous callback to determine which numbers in an array are even
even = [2, 7, 6, 5, 11, 23, 12].filter( function(n) {return n % 2 === 0;} );
console.log('Even numbers are ' + even);