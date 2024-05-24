const email = document.getElementById("email");
const fullName = document.getElementById("full-name");
const phone = document.getElementById("phone");
const loading = document.getElementById("loading");
const container = document.getElementById("container");
let uid;
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    if (user.emailVerified) {
      console.log("user onAuthStateChanged >>>>>", user);
      uid = user.uid;
      firebase
        .database()
        .ref("users/" + user.uid)
        .on("value", (userRes) => {
          loading.style.display = "none";
          container.style.display = "block";
          fullName.value = userRes.val().fullName;
          phone.value = userRes.val().phone;
          email.value = userRes.val().email;
          console.log("user res", userRes.val());
        });
      // loading.style.display = "none";
      // container.style.display = "block";
      // email.innerHTML = user.email;
      // fullName.innerHTML = user.displayName;
      // profile.src = user.photoURL;
    } else {
      window.location.assign("./email-verification.html");
    }
  } else {
    window.location.assign("./log-in.html");
  }
});

// log out
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

// update email
const updateEmailInput = document.getElementById("update-email");
const UpdateEmailHandler = () => {
  const user = firebase.auth().currentUser;
  user
    .updateEmail(updateEmailInput.value)
    .then(() => {
      // alert("Update successful");
      user.sendEmailVerification().then(() => {
        // Email verification sent!
        // ...
        window.location.assign("./email-verification.html");
      });
    })
    .catch((error) => {
      console.log(":error", error);
    });
};

// delete accound
const deleteAccount = () => {
  const user = firebase.auth().currentUser;
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      user.delete().then(() => {
        window.location.assign("./log-in.html");
      });
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    }
  });
};

// update user
const updateUser = () => {
  firebase
    .database()
    .ref("users/" + uid)
    .update({
      fullName: fullName.value,
      phone: phone.value,
    });
};
