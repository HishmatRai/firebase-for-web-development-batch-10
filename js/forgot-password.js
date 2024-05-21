const email  = document.getElementById("email");
const resetPasswordHandler = ()=>{
    firebase.auth().sendPasswordResetEmail(email.value) .then(() => {
      console.log("Password reset email sent!")
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
       console.log(error)
      });
}