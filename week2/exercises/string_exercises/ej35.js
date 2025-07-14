strip_html_tags = function (str) {

    if ((str === null) || (str === '')) {
        return false;
    } else {
        str = str.toString();
    }
    return str.replace(/<[^>]*>/g, '');// Remove HTML tags from the string
}

console.log(strip_html_tags('<p>PHP Exercises</p>'));