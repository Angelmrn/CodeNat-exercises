protect_email = function (user_email) {
    var avg, splitted, part1, part2;
    splitted = user_email.split("@");// Split the email into two parts using "@" as the separator
    part1 = splitted[0];
    // Calculate the average length of the first part of the email
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));// Get the first part of the email before the "@" symbol minus the average length
    part2 = splitted[1];// Get the second part of the email after the "@" symbol
    return part1 + "...@" + part2;
};

// Call the protect_email function with the input "robin_singh@example.com" and log the result to the console
console.log(protect_email("robin_singh@example.com"));