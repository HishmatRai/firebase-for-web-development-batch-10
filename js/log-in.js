const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");
const LogIn = () => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then((res) => {
      console.log(res.user);
      message.innerHTML = "Success";
      message.style.color = "green";
      setTimeout(() => {
        if (res.user.emailVerified) {
          window.location.assign("./home.html");
        } else {
          window.location.assign("./email-verification.html");
        }
      }, 2000);
    })
    .catch((err) => {
      console.log(err);
      message.innerHTML = "Type valid email or password!";
      message.style.color = "red";
    });
};

// login with google
const loginWithGoogle = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      window.location.assign("./home.html");
      console.log("result", result);
    })
    .catch((error) => {
      console.log("error", error);
    });
};
