/*
 * Uses callback and anonymous function
 */

function mean(values, callback) {
    var total = 0;
    for (var i = 0, max = values.length; i < max; i++) {
        if (typeof callback === 'function') {
            total += callback(values[i]);
        } else {
            total += values[i];
        }
    }
    return total/max
}

// Take mean of an array of values
values = [2, 5, 7, 11, 4];
meanVal = mean(values);
console.log('mean value = ' + meanVal);

// Use anonymous function to take mean for square of each value
sqrMeanVal = mean(values, function(x) {return 2 * x;})
console.log('mean of the squares = ' + sqrMeanVal);