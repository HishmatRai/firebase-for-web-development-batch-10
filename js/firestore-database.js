const db = firebase.firestore();
const addDataHandler = () => {
  //   db.collection("totos/")
  //     .doc("id2")
  //     .set({
  //       name: "Testing",
  //       email: "info@gmail.com",
  //     })
  //     .then(() => {
  //       console.log("Document successfully written!");
  //     })
  //     .catch((error) => {
  //       console.error("Error writing document: ", error);
  //     });
  // Add a new document with a generated id.
  //   db.collection("users/")
  //     .add({
  //       name: "Testing",
  //       email: "info@gmail.com",
  //     })
  //     .then(() => {
  //       console.log("Document successfully written!");
  //     })
  //     .catch((error) => {
  //       console.error("Error writing document: ", error);
  //     });
  //  db.collection("totos/")
  //     .doc()
  //     .set({
  //       name: "Testing",
  //       email: "info@gmail.com",
  //     })
  //     .then(() => {
  //       console.log("Document successfully written!");
  //     })
  //     .catch((error) => {
  //       console.error("Error writing document: ", error);
  //     });
};

// get data
// db.collection("users")
//   .doc("id2fdfd")
//   .get()
//   .then((res) => {
//     console.log("res", res.data());
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });

// db.collection("users")
//   .get()
//   .then((res) => {
//     res.forEach((userRes, userIndex) => {
//       // if(userRes.data().name === "ABC"){
//         console.log("res--------------", userRes.data());

//       // } 
//       // if(userRes.data().verified){
//       //   console.log("verified", userRes.data());

//       // }
//     });
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });


db.collection("users").where("email", "==", 'abc@gmail.com')
  .get()
  .then((res) => {
    res.forEach((userRes, userIndex) => {
        console.log("res--------------", userRes.data());
    });
  })
  .catch((err) => {
    console.log("error", err);
  });