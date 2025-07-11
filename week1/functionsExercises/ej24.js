function bubbleSort(arr) {

    var swapp;
    var n = arr.length - 1;
    
    // Use a do-while loop to repeatedly iterate through the array until no swaps are needed
    do {
        swapp = false;
        for (var i = 0; i < n; i++) {
            // Check if the current element is less than the next element
            if (arr[i] < arr[i + 1]) {
                var temp = arr[i];// Swap the elements if they are in the wrong order
                arr[i] = arr[i + 1];// Assign the next element to the current position
                arr[i + 1] = temp;
                swapp = true;
            }
        }
        n--;// Reduce the range of the next iteration since the last element is now sorted
    } while (swapp); 

    return arr;
}

console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])); 