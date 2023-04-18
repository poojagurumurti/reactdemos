const showbook = ({ name: bookName, author }) => {
  console.log(`The book ${bookName} is authorized by ${author}`);
};

const book = {
  id: 100,
  name: "Javascript:The Good Parts",
  author: "Douglas",
  price: 378,
  publisher: "Shroff",
};
showbook(book);
