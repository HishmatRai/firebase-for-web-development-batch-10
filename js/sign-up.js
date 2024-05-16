const email = document.getElementById("email");
const password = document.getElementById("password");
const fullName = document.getElementById("full-name");
const phone = document.getElementById("phone");
const profile = document.getElementById("profile");
const message = document.getElementById("message");
const signUp = () => {
  console.log(phone.value)
  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((res) => {
      console.log("Success", res.user);
      message.innerHTML = "Success";
      message.style.color = "green";
      const user = firebase.auth().currentUser;

      user.sendEmailVerification().then(() => {
        user.updateProfile({
          displayName: fullName.value,
          phoneNumber: phone.value,
          photoURL: profile.value,
        });
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
