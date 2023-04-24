function getData() {
  return [
    { name: "abcz", email: "abcz@gmail.com" },
    { name: "hjkl", email: "hjkl@gmail.com" },
    { name: "lopi", email: "lopi@gmail.com" },
    { name: "bnmk", email: "bnmk@gmail.com" },
  ];
}

function findData(name) {
  const users = getData();
  const user = users.find((user) => user.name == name);
  return user;
}
console.log(findData("abcz"));
