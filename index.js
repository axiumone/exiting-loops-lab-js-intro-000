function breakOut(array, changeValue, stopValue) {
  for(var i = 0; i < array.length; i++){
    if(array[i] !== stopValue){
      array[i] = changeValue;
    } else {
      break;
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for(var i = 0; i < array.length; i++){
    if(array[i] === skipValue) {
      continue;
    } else {
      array[i] = changeValue;
    }
  }
  return array;
}


function findBy(array, findFn) {
<<<<<<< HEAD
  for(var i = 0; i < array.length; i++){
    if(findFn(array[i]))
      return array[i]
=======
  var findFn = "";
  for(var i = 0; i < array.length; i++){
    if(array[i] === findFn) {
      findFn = array[i];
      return findFn
    } else {
      // return findFn = null;
    }
>>>>>>> 9b84a3e1b6a266d14ed62f84414407a21776e623
  }
}
