function userId({ id }) {
  return id;
}
function whoIs({ displayName, fullName: { firstName: name } }) {
  console.log(displayName + " is " + name);
}

//destructing parameter
var user = {
  id: 100,
  displayName: "Jim ",
  fullName: {
    firstName: "James",
    // lastName: "halpert",
  },
};
console.log("userId:" + userId(user));
whoIs(user); //destructure objects into function parameters
