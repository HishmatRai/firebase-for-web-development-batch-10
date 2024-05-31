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


// db.collection("users").where("email", "==", 'abc@gmail.com')
//   .get()
//   .then((res) => {
//     res.forEach((userRes, userIndex) => {
//         console.log("res--------------", userRes.data());
//     });
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });


// real time data get
db.collection("users")
    .onSnapshot((querySnapshot) => {
        var cities = [];
        querySnapshot.forEach((doc) => {
            // cities.push(doc.data());
            console.log(doc.data())
        });
        // console.log("Current cities in CA: ", cities.join(", "));
    });


    // file upload
    const fileUpload = (event)=>{
      let file = event.target.files[0];
      // f
      console.log(file)
      var storageRef = firebase.storage().ref();
      var uploadTask = storageRef.child(`profile/${file.name}`).put(file);
      uploadTask.on('state_changed', 
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      }, 
      (error) => {
        // Handle unsuccessful uploads
      }, 
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log('File available at', downloadURL);
        });
      }
    );
    
    }