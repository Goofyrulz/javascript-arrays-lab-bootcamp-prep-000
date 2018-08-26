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
var appendKitten =  kittens.concat(['broom']);

function appendKitten() {
  kittens.push('Broom');
}














function removeFirstKitten() {
  console.log(kittens.slice(1));
}
