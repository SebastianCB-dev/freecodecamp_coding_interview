console.clear();

function sym(...args) {
  let result;
  // Delete duplicates in all arrays
  const no_duplicates = args.map( arr => arr.filter( (val, idx, arr) => arr.indexOf(val) === idx));

  if(no_duplicates.length <= 2) {
    result = simple_difference_symmetric(no_duplicates);
  }
  else {
    result = advanced_difference_symmetric(no_duplicates);
  }
  return result;
}

function simple_difference_symmetric(arrays2D) {
  // This function find the difference symmetric between two array
  let result = [];
  let val = 1;
  arrays2D.forEach( (array) => {
    array.forEach(number => {
      if(!arrays2D[val].includes(number)) {
        result.push(number);
      }
    });
    val = 0;
  })
  return result.sort();
}

function advanced_difference_symmetric(arraysND) {
  // This function find the difference symmetric between three or more arrays.
  let result = arraysND[0];
  arraysND.forEach( (_, idx) => {
    if(idx < arraysND.length - 1) {
      const array = [result, arraysND[idx + 1]];
      result = simple_difference_symmetric(array);
    }
  });
  return result.sort();
}

console.log('The result is:', sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));

