function confirmEnding(str, target) {
 return str.slice(str.length - target.length) ===  target;}
console.log(confirmEnding("Bastian", "n"))