function twosumsarr(arr) {
  var result = [0, 0]; 
  for(var i = 0; i < arr.length; i++) 
  {	
    if(i % 2){
        result[1] += arr[i]; 
    }else{
        result[0] += arr[i]; 
    }
  }
  return result;
}


console.log(twosumsarr([1, 3, 6, 2, 5, 10])); 
console.log(twosumsarr([1, 2, 3, 4, 5]));
console.log(twosumsarr([10, 20, 30, 40, 50, 60, 70, 80]));