// Define a function that animates the characters of a string
function animate_string(id) {
    
    var element = document.getElementById(id);// Get the HTML element by its id

    // Access the text node inside the element (assuming no other children)
    var textNode = element.childNodes[0];
    
    // Extract the initial text content of the text node
    var text = textNode.data;

    // Set up an interval to rotate the characters in the text every 100 milliseconds
    setInterval(function () {
        // Move the last character to the beginning of the string
        text = text[text.length - 1] + text.substring(0, text.length - 1);

        // Update the text content of the text node with the modified string
        textNode.data = text;
    }, 100);
} 