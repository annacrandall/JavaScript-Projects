function palindrome(str) {
    const stripped = str.toLowerCase().replace(/\W|_/g, "")
    console.log(stripped)
    const reversed = stripped.split("").reverse().join(''); 
    return stripped === reversed 
    }
    
    console.log(palindrome("_eye"));
    