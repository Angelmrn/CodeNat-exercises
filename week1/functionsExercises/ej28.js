function functionAsParameter( refreshCallback) {
    // Call the refreshCallback function
    refreshCallback();
}

function refreshStudentList() {
    console.log('Hello World');
}

functionAsParameter(refreshStudentList); 