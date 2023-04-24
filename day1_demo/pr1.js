function getData() {
  // var promise = new Promise(function(resolve,reject))
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { name: "abcd", email: "abcd@gmail.com" },
        { name: "qwerty", email: "qwerty@gmail.com" },
      ]);
    }, 1000);
  });
}
function onFulfilled(users) {
  console.log(users);
}
const promise = getData();
promise.then(onFulfilled);
