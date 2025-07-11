function primeNum(num) {
    
    for (var i = num + 1;; i++) {

        var isPrime = true;

        for (var div = 2; div * div <= i; div++) { 
            if (i % div === 0) {
                isPrime = false;
                break;
            }
        }
        // If 'isPrime' is still true, return 'i' (it's a prime number)
        if (isPrime) {
            return i;
        }
    }
}

console.log(primeNum(3));
console.log(primeNum(17));
console.log(primeNum(23));
console.log(primeNum(29));