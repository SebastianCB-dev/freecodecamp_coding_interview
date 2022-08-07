console.clear();

function updateInventory(arr1, arr2) {
  let arrayUpdated = [];
  arr1.forEach( ele => {
    // Find element of arr1 in arr2
    const search = arr2.find( val => val[1] == ele[1]);
    const idx = arr2.findIndex(val => val[1] == ele[1]);
    if(search) {
      // Push in arrayUpdated the sum of two elements
      arrayUpdated.push([ (ele[0] + search[0]), ele[1] ]);
      // Delete element in arr2
      arr2 = [...arr2.slice(0, idx), ...arr2.slice(idx + 1, arr2.length)]
    }
    else{
      // If the element doesn't exist in arr2 this added it automatic.
      arrayUpdated.push(ele);
    }
  });
  // Add the rest of elements into arr1
  if(arr2.length > 0) {
    arrayUpdated = arrayUpdated.concat( arr2 );
  }
  // Order array
  arrayUpdated.sort( (a, b) => {
    if (a[1] > b[1]) {
      return 1;
    }
    if(a[1] < b[1]) {
      return -1;
    }
    return 0;
  });
  return arrayUpdated;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

console.log('The result is:', updateInventory(curInv, newInv));

