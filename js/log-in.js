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
        window.location.assign("./home.html");
      }, 2000);
    })
    .catch((err) => {
      console.log(err);
      message.innerHTML = "Type valid email or password!";
      message.style.color = "red";
    });
};
