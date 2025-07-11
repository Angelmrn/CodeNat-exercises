var chr = '';

// Outer loop for rows
for (var x = 1; x <= 6; x++) {
    for (var y = 1; y < x; y++) {
        chr = chr + ("*");//Add 1 more * for each loop iteration
    }

    console.log(chr);
    
} 
