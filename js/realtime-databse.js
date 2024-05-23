const fullName = document.getElementById("full-name");
const phone = document.getElementById("phone");
const addDataHanlder = () => {
  // const id = "user3";
  // // var database = firebase.database();
  // firebase
  //   .database()
  //   .ref("users/" + id)
  //   .set(
  //     {
  //       fullName: fullName.value,
  //       phone: phone.value,
  //     },
  //     (error) => {
  //       if (error) {
  //         console.log("The write failed...");
  //       } else {
  //         console.log("Data saved successfully!");
  //         fullName.value ="";
  //         phone.value = ""
  //       }
  //     }
  //   );

  // auto id
  firebase
    .database()
    .ref("users/")
    .push(
      {
        fullName: fullName.value,
        phone: phone.value,
      },
      (error) => {
        if (error) {
          console.log("The write failed...");
        } else {
          console.log("Data saved successfully!");
          fullName.value = "";
          phone.value = "";
        }
      }
    );
};

// get data

// firebase
//   .database()
//   .ref("users/" + "user1")
//   .on("value", (res) => {
//     console.log(res.val());
//   });

const container = document.getElementById("container");
const loading = document.getElementById("loading");
firebase
  .database()
  .ref("users/")
  .on("value", (res) => {
    loading.style.display = "none";
    container.style.display = "block";
    container.innerHTML = "";
    if (res.val()) {
      res.forEach((value, index) => {
        const card = document.createElement("div");
        container.appendChild(card);
        var name = document.createElement("p");
        card.appendChild(name);
        name.innerText = "Full Name :- " + value.val().fullName;
        // console.log(value.val().phone);
      });
    } else {
      var meessage = document.createElement("p");
      container.appendChild(meessage);
      meessage.innerText = "Data not found!";
    }
  });

// var firstName = "iHunar";
// var lastName = "Academy";
// // var fullName = "Your name is " + "("+firstName + " " + lastName+")";
// var fullName = `Your name is  (${firstName} ${lastName})`;

// console.log(fullName);

// var a = false;
// if(a){ // a === true
//     console.log("a === true")
// }else{
//     console.log("a === false")
// }
// a ? console.log("a === true") : console.log("a === false");

// update data
const updateDataHandler = () => {
  firebase
    .database()
    .ref("users/" + "-Ny_pRmjfjyQRPoWSgkr")
    .update({
      fullName: "iSkillers 123",
      phone: "03232323232323",
      email: "info@gmail.com",
    });
};

var a = "Cfdsf";
// a  ? console.log("a === true") : console.log("a === false");
// a && console.log("a === true");

// a === "A"
//   ? console.log("A")
//   : a === "B"
//   ? console.log("B")
//   :a === "C" ? console.log("C") : console.log(".....");
