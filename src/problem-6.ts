{
  //  start

  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };

  const isRecentBook = (book: Book): boolean => {
    const currentYear: number = new Date().getFullYear();
    const recentBook: boolean = currentYear - book.publishedYear <= 5;
    return recentBook;
  };
  // Sample Input :
  const book1: Book = {
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2022,
  };

  const result = isRecentBook(book1);

  // Sample Output:
  console.log(result);
  //   true;

  //  end
}
