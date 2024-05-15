const email=  document.getElementById("email")
firebase.auth().onAuthStateChanged((user)=>{
    console.log(user)
    email.innerHTML = user.email
})