function break_address(url_add) {
  
    var data = url_add.split("://");
    var protocol = data[0];
    
    data = data[1].split(".com");
    var domain = data[0];
    
    data = data[1].split("/");

    if (data[1]) {
        return [protocol, domain, data[1]];
    }

    // Returning protocol and domain if path doesn't exist
    return [protocol, domain];
}


console.log(break_address("https://www.w3resource.com/javascript-exercises/")); 
console.log(break_address("https://www.w3resource.com/"));
console.log(break_address("https://www.w3resource.com/javascript-exercises/"));