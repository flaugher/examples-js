
// Callback functions
function square(n) {
    return n * n;
}

function sum(total, n) {
    return total + n;
}

// Iterate over the array, invoking the callback 'square' on each item
mapped = [1, 2, 3].map( square );
console.log('mapped = ' + mapped);

// Iterate over the array but use callback function to cummulatively combine 
// each result to return a single value:
// reduced = ((((1 + 2) + 3) + 4) + 5)
// reduced = 15
reduced = [1, 2, 3, 4, 5].reduce( function(prev, current) {
    return prev + current;
});
console.log('reduced = ' + reduced);

// Chain map and reduce to create the sum of an array of integers
chained = [1, 2, 3].map( function(x) {return x * x;} ).reduce( function(total, x) {return total + x;} );
console.log('chained = ' + chained);

// Repeat but using functions instead
chained2 = [1, 2, 3].map(square).reduce(sum);
console.log('chained2 = ' + chained2);