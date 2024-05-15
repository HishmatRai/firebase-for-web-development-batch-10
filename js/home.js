firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("user onAuthStateChanged >>>>>", user);
  } else {
    window.location.assign("./log-in.html");
  }
});



// current  users
const currentUserHandler = ()=>{
  var user = firebase.auth().currentUser;
  console.log("current user",user)

}
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
