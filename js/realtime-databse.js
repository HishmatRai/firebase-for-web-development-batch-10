const addDataHanlder = () => {
    const id = "userfsfdsfdsfdsfsf8fsd7f71"
    // var database = firebase.database();
  firebase
    .database()
    .ref("todos/" + id)
    .set({
      name: "XYZ",
      email:"onfo@gmail.com",
      phone:"0323233",
      address:"Mithi",
      isVerified:false
    });
};

// var firstName = "iHunar";
// var lastName = "Academy";
// // var fullName = "Your name is " + "("+firstName + " " + lastName+")";
// var fullName = `Your name is  (${firstName} ${lastName})`;

// console.log(fullName);

var a = false;
// if(a){ // a === true
//     console.log("a === true")
// }else{
//     console.log("a === false")
// }
a ? console.log("a === true") : console.log("a === false");
