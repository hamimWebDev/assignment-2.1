"use strict";
{
    const isRecentBook = (book) => {
        const currentYear = new Date().getFullYear();
        const recentBook = currentYear - book.publishedYear <= 5;
        return recentBook;
    };
    // Sample Input :
    const book1 = {
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
