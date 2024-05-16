firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    if (user.emailVerified) {
      console.log("user onAuthStateChanged >>>>>", user);
    } else {
      window.location.assign("./email-verification.html");
    }
  } else {
    window.location.assign("./log-in.html");
  }
});

// current  users
const currentUserHandler = () => {
  var user = firebase.auth().currentUser;
  console.log("current user", user);
};
const logOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.location.assign("./log-in.html");
    })
    .catch((error) => {
      // An error happened.
    });
};
