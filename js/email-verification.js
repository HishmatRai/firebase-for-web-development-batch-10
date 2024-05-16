const email = document.getElementById("email");
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    if (user.emailVerified) {
      window.location.assign("./home.html");
    } else {
      console.log(user);
      email.innerHTML = user.email;
    }
  } else {
    window.location.assign("./log-in.html");
  }
});

const resendEmailHandler = () => {
  firebase
    .auth()
    .currentUser.sendEmailVerification()
    .then(() => {
      alert("Email verification sent!");
    });
};


const goHomeHandler  = () =>{
    window.location.reload()
}