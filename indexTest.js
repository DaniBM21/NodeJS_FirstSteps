// Require modules
const math = require('./maths');
const os = require('os');
const fs = require('fs');

/* Print results
console.log(math.add(6,2));
console.log(math.substract(6,2));
console.log(math.multiply(6,2));
console.log(math.divide(6,2)); 

console.log(os.platform());
console.log(os.release());
console.log(os.freemem());
console.log(os.totalmem()); */

fs.writeFile('./texto.txt', 'linea 1', function(err) {
    if (err) console.log(err);
    console.log("File created");
});

fs.readFile('./texto.txt', function(err, data) {
    if (err) console.log(err);
    console.log(data.toString());
});

console.log('Ultima linea de codigo');