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



   db.collection("totos/")
      .doc()
      .set({
        name: "Testing",
        email: "info@gmail.com",
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
};
