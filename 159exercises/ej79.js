function containstwise(arr){
    var elm1 = arr[0];
    var elm2 = arr[1];

    return (elm1 === 30 && elm2 === 30) || (elm1 === 40 && elm2 === 40);
}

console.log(containstwise([30, 30])); 
console.log(containstwise([40, 40]));
console.log(containstwise([20, 20])); 
console.log(containstwise([30])); 
console.log(containstwise([40, 30]));
console.log(containstwise([30, 40]));