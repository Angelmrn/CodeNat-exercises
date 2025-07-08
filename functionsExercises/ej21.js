function getSubsetsWithLength(arr, length) {
    const result = [];

    // Recursive function to generate subsets
    function Subsets(currentSubset, start) {
        if (currentSubset.length === length) {
            result.push([...currentSubset]); // Add a copy of the currentSubset to the result
            return;
        }
        for (let i = start; i < arr.length; i++) {
            currentSubset.push(arr[i]);
            Subsets(currentSubset, i + 1);
            currentSubset.pop();
        }
    }
    Subsets([], 0);
    return result;
}

console.log(getSubsetsWithLength([1, 2, 3], 2));