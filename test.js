const { add } = require('./calculator');

// Test cases
try {
    console.log(add("")); // Output: 0
    console.log(add("1")); // Output: 1
    console.log(add("1,5")); // Output: 6
    console.log(add("1\n2,3")); // Output: 6
    console.log(add("//;\n1;2")); // Output: 3
    console.log(add("//***\n1***2***3")); // Output: 6

    // Test for negative numbers
    try {
        console.log(add("1,-2,3"));
    } catch (e) {
        console.error(e.message); // Output: "Negative numbers not allowed: -2"
    }

    try {
        console.log(add("1,-2,-3"));
    } catch (e) {
        console.error(e.message); // Output: "Negative numbers not allowed: -2, -3"
    }
} catch (e) {
    console.error("Test failed: ", e.message);
}
