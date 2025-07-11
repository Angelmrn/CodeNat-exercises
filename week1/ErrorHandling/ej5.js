function emptyArr(arr){
    if(arr.length === 0){
        throw new Error("Error: The array is empty");
    }else{
        return arr;
    }
}

try{
    var arr1 = [1,2,3,4,5];
    var arr2 = [];
    emptyArr(arr1);
    emptyArr(arr2);
    //if the array is empty, it will enter the catch block
}catch(error){
    console.log("Error: ", error.message); 
}