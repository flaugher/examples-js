
// Create JavaScript object
var superman = {
    name: 'Superman',
    "real name": 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman', 'Supergirl', 'Superboy'],
    fly: function() {
        return 'Up, up and away!'
    }
};

// Convert to string of JSON data
jsonSuperman = JSON.stringify(superman);
console.log('jsonSuperman: ' + jsonSuperman);

// Convert JSON string back to JavaScript object
jsSuperman = JSON.parse(jsonSuperman);
console.log(jsSuperman);