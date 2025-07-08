function array_binarySearch(arr, delement) {

   var mid = Math.floor(arr.length / 2);// Calculate the middle index

   if (arr[mid] === delement){
      return mid;

   }else if (arr.length === 1) {
      return null;

   }else if (arr[mid] < delement) {// If the middle element is less than the search element
      var arr = arr.slice(mid + 1);// Create a new array from the middle to the end
      var res = array_binarySearch(arr, delement);
      if (res === null){
         return null;
      }else {
         // If false, return the adjusted index by adding mid + 1 to the result
         return mid + 1 + res;
      }
   }else {
      var arr1 = arr.slice(0, mid);
      return array_binarySearch(arr1, delement);
   }
}

var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];

console.log(array_binarySearch(myArray, 6)); 
 