//The challenge is how to access the users returned from the getData() function after one second. One classical approach is to use the callback.

//Bcz getData() returns empty array te users array is empty
//it is lookong ok byt can generate te callback hell when add more function into the same code sp we can solve it using promises
function getData(callback) {
  // let users = [];
  setTimeout(() => {
    callback = [
      { name: "abcz", email: "abcz@gmail.com" },
      { name: "hjkl", email: "hjkl@gmail.com" },
      { name: "lopi", email: "lopi@gmail.com" },
      { name: "bnmk", email: "bnmk@gmail.com" },
    ];
  }, 1000);
}

function findData(name, callback) {
  //   const users = getData();
  getData((users) => {
    const user = users.find((user) => user.name == name);
  });

  callback(user);
}
findData("abcz", console.log);
