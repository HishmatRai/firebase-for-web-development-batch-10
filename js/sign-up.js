const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");
const signUp = () => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((res) => {
      console.log("Success", res.user);
      message.innerHTML = "Success";
      message.style.color = "green";
      firebase
        .auth()
        .currentUser.sendEmailVerification()
        .then(() => {
          console.log("Email verification sent!");
          setTimeout(() => {
            email.value = "";
            password.value = "";
            window.location.assign("./email-verification.html");
          }, 2000);
        });
    })
    .catch((err) => {
      console.log("Error", err.message);
      message.innerHTML = err.message;
      message.style.color = "red";
    });
};
