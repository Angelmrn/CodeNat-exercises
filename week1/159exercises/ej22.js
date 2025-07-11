function removecaracterspec(str, pos){
    part1 = str.slice(0, pos);
    part2 = str.slice(pos + 1, str.length);

    return part1 + part2;
}

console.log(removecaracterspec("JavaScript", 0)); // "avaScript"
console.log(removecaracterspec("JavaScript", 10)); // "JavaScript"
console.log(removecaracterspec("Javacript", 4)); // "Javacript"