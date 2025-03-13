const library = {
  books: [
    {
      title: "1984",
      author: "George Orwell",
      isAvailable: true,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      isAvailable: false,
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      isAvailable: true,
    },
    {
      title: "Moby-Dick",
      author: "Herman Melville",
      isAvailable: true,
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      isAvailable: true,
    },
    {
      title: "War and Peace",
      author: "Leo Tolstoy",
      isAvailable: false,
    },
    {
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      isAvailable: true,
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      isAvailable: true,
    },
    {
      title: "Brave New World",
      author: "Aldous Huxley",
      isAvailable: true,
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      isAvailable: true,
    },
    {
      title: "The Odyssey",
      author: "Homer",
      isAvailable: true,
    },
    {
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
      isAvailable: false,
    },
    {
      title: "The Picture of Dorian Gray",
      author: "Oscar Wilde",
      isAvailable: true,
    },
    {
      title: "Les Misérables",
      author: "Victor Hugo",
      isAvailable: true,
    },
    {
      title: "Anna Karenina",
      author: "Leo Tolstoy",
      isAvailable: true,
    },
    {
      title: "Dracula",
      author: "Bram Stoker",
      isAvailable: false,
    },
  ],
  listAvailableBooks() {
    return this.books.filter((book) => book.isAvailable);
  },
  borrowBook(title) {},
  returnBook(title) {},
};

const availableBooks = library.listAvailableBooks.bind(library);

console.log(availableBooks());
