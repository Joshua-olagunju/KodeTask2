// Task 1: Function to reverse a string
// This function takes a string as input and returns the reversed version
function reverseString(str) {
    // Split the string into an array of characters, reverse the array, and join back into a string
    return str.split('').reverse().join('');
}

// Example usage:
console.log(reverseString("Hello")); // Output: "olleH"