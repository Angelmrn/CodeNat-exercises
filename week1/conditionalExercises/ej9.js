function three_digit_armstrong_number() {

    for (var i = 1; i < 10; ++i) {//loop through Centenary digits 1 to 9
        for (var j = 0; j < 10; ++j) {//loop through Decenary digits 0 to 9
            for (var k = 0; k < 10; ++k) {//loop through Unitary digits 0 to 9

                var pow = Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3);//sum of cubes of each digits
                var plus = i * 100 + j * 10 + k;//construct the original number
                if (pow === plus) {
                    console.log(pow);
                }
            }
        }
    }
}
three_digit_armstrong_number(); 