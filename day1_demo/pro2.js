//The challenge is how to access the users returned from the getData() function after one second. One classical approach is to use the callback.
//Bcz getData() returns empty array te users array is empty
function getData() {
  let users = [];
  setTimeout(() => {
    users = [
      { name: "abcz", email: "abcz@gmail.com" },
      { name: "hjkl", email: "hjkl@gmail.com" },
      { name: "lopi", email: "lopi@gmail.com" },
      { name: "bnmk", email: "bnmk@gmail.com" },
    ];
  }, 1000);
  return users;
}

function findData(name) {
  const users = getData();
  const user = users.find((user) => user.name == name);
  return user;
}
console.log(findData("abcz"));
