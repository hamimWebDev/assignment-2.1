"use strict";
{
    //  start
    const logString = (input) => {
        typeof input === "string"
            ? console.log("Hello, TypeScript!")
            : console.error("Input is not a string.");
    };
    // Sample Input 1:
    logString("Hello, TypeScript!");
    // Sample Output 1:
    // "Hello, TypeScript!"
    // Sample Input 2:
    logString(42);
    // Output: Error:
    // Input is not a string.
    //  end
}
