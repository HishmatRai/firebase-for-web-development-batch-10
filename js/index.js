firebase.auth().onAuthStateChanged((user) => {
  setTimeout(() => {
    if (user) {
      window.location.assign("./pages/home.html");
    } else {
      window.location.assign("./pages/log-in.html");
    }
  }, 2000);
});
