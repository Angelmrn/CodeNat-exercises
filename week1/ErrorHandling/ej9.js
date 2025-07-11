function errInvalidUrl(url) {
  try {
    const decodedURI = decodeURI(url);
    console.log('Decoded URI:', decodedURI);
  } catch (error) {
    // Check if the error is a URIError
    if (error instanceof URIError) {
      console.log('URIError:', error.message);
    } else {
      // If the error is not a URIError, log the error message with 'Error' prefix
      console.log('Error:', error.message);
    }
  }
}


errInvalidUrl('https://example.com/'); // Valid URI
errInvalidUrl('https://example.com/%%invalidURI'); // Invalid URI