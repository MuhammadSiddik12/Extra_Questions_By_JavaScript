function factorialize(num) {
  for (var i=1;num>0;num--){
    i*=num
}return i
}

factorialize(5);

// function factorialize(num) {
//   for (var product = 1; num > 0; num--) {
//     product *= num;
//   }
//   return product;
// }

// factorialize(5);