function palindrome(str) {
    const stripped = str.toLowerCase().replace(/\W|_/g, ""); 
    const reversed = stripped.split("").reverse().join(''); 
    return stripped === reversed 
    }
    
    console.log(palindrome("_eye"));
    