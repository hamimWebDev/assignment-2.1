"use strict";
{
    const repeatString = (str, num) => {
        let result = "";
        for (let i = 0; i < num; i++) {
            result += str;
        }
        return result;
    };
    // Sample Input:
    const result = repeatString("Hello!", 3);
    // Sample Output:
    console.log(result);
    //  Hello!Hello!Hello!
    //   end
}