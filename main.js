// var arr1 = [1,2,3];
// arr1.push(4);

// var arr2 = ["Stimpson", "J", "cat"];
// arr2.push("happy", "joy");
// console.log(arr1,arr2)

// var dogs = {
//     Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
//   };
//   var myDog = "Hunter";
//   var myBreed = dogs[myDog];
//   console.log(myBreed);

// var collection = {
//     2548: {
//       albumTitle: 'Slippery When Wet',
//       artist: 'Bon Jovi',
//       tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//       albumTitle: '1999',
//       artist: 'Prince',
//       tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//       artist: 'Robert Palmer',
//       tracks: []
//     },
//     5439: {
//       albumTitle: 'ABBA Gold'
//     }
//   };
  
//   // Only change code below this line
//   function updateRecords(object, id, prop, value) {
    
//     return object;
//   }
// updateRecords(collection, 5439, 'artist', 'ABBA');

function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for (var i=0;i<arr.length;i++){
      for (var j=0;j<arr[i].length;j++){
        product=product*arr[i][j]
      }
    }
    // Only change code above this line
    return product;
  }
  
console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));