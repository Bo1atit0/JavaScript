// process.argv is an array containing command line arguments
// The first element is 'node', the second element is the file name, and the rest are the actual arguments

const price = process.argv.slice(2); // Slice to get only the actual arguments

let discount = price >= 100 ? 10 : 0;
console.log (`Total Price = N${price - (discount / 100) * price}`)
