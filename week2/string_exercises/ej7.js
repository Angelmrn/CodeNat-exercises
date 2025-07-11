string_parameterize = function (str1) {
    return str1.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/g, "").replace(/\s/g, "-");// Replace all non-alphanumeric characters and spaces with hyphens and convert to lowercase
};
console.log(string_parameterize("Robin Singh from USA."));
console.log(string_parameterize("I love arrays they @ my favorite."));
