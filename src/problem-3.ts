{
  //  start

  const filterEvenNumbers = (numbers: number[]): number[] => {
    const evenNumbers: number[] = numbers.filter((num) => num % 2 === 0);
    return evenNumbers;
  };

  // Sample Input:
  const result = filterEvenNumbers([1, 2, 3, 4, 5, 6]);

  // Sample Output:
  console.log(result);
  //   [ 2, 4, 6 ]

  //  end
}
