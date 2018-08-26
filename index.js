// Add your functions and code here
var kittens = ['milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten() {
  kittens.push('Ralph');
}
function destructivelyPrependKitten() {
  kittens.unshift('Bob');
}
function destructivelyRemoveLastKitten() {
  kittens.pop(1);
}
function destructivelyRemoveFirstKitten() {
  kittens.shift(1)
}
function appendKitten() {
var appendKitten =  kittens.concat(['broom']);
console.log(appendKitten)
}














