firebase.auth().onAuthStateChanged((user) => {
  setTimeout(() => {
    if (user) {
      if (user.emailVerified) {
        window.location.assign("./pages/home.html");
      } else {
        window.location.assign("./pages/email-verification.html");
      }
    } else {
      window.location.assign("./pages/log-in.html");
    }
  }, 2000);
});
