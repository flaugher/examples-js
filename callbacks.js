
// A callback is any function that is called as an argument to
// another function
function pizza(topping, callback) {
    console.log('We\'re making a ' + topping + ' pizza');
    callback(topping);
}

function cook(topping) {
    console.log('Your ' + topping + ' pizza is cooking.');
}

function eat(topping) {
    console.log('Your ' + topping + ' pizza is ready to eat.');   
}

pizza('Pepperoni and mushroom', cook);
pizza('Pepperoni and mushroom', eat);