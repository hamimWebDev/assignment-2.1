{
  //  start
  const reverseArray = <T>(myArray: T[]): T[] => {
    const reverse = myArray.reverse();
    return reverse;
  };
  // Sample Input 1:
  const result1 = reverseArray(["apple", "banana", "cherry"]);

  // Sample Input 2:
  const result2 = reverseArray([10, 20, 30]);

  // Sample Output 1:
  console.log(result1);
  //   [ 'cherry', 'banana', 'apple' ]

  // Sample Output 2:
  console.log(result2);
  //   [ 30, 20, 10 ]

  //  end
}
