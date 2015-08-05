
// Callback function
function square(n) {
    return n * n;
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