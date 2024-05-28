let uid;
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    if (user.emailVerified) {
      console.log("user onAuthStateChanged >>>>>", user);
      uid = user.uid;
    } else {
      window.location.assign("./email-verification.html");
    }
  } else {
    window.location.assign("./log-in.html");
  }
});
const input = document.getElementById("input");
const addHandler = () => {
  let addData = firebase.database().ref("todos/").push({
    todoValue: input.value,
    uid: uid,
  });
  firebase
    .database()
    .ref("todos/" + addData.key)
    .update({
      id: addData.key,
    });
  //   console.log("addData", addData.key);
  input.value = "";
};

// get data
// firebase
//   .database()
//   .ref("todos/")
//   .on("child_added", (res) => {
//     console.log(res.val());
//   });
const ul = document.getElementById("ul");
firebase
  .database()
  .ref("todos/")
  .on("value", (res) => {
    ul.innerHTML = "";
    res.forEach((todoRes, index) => {
      if(todoRes.val().uid === uid){
// 15  || 3
// 2 || 3

// 100 - 250 || 10

        console.log("all todos",todoRes.val())
      }
      const li = document.createElement("li");
      ul.append(li);
      li.innerText = todoRes.val().todoValue;
      if (todoRes.val().uid === uid) {
        // edit button
        const editButton = document.createElement("button");
        li.appendChild(editButton);
        editButton.innerText = "Edit";
        // delte button
        const deleteButton = document.createElement("button");
        li.appendChild(deleteButton);
        deleteButton.innerText = "Delete";
        // edit function
        editButton.addEventListener("click", () => {
          let editTodo = prompt("Edit todo", todoRes.val().todoValue);
          firebase
            .database()
            .ref("todos/" + todoRes.val().id)
            .update({
              todoValue: editTodo,
            });
        });

        // delete function
        deleteButton.addEventListener("click", () => {
          // deleteButton.parentNode.remove();
          firebase
            .database()
            .ref("todos/" + todoRes.val().id)
            .remove();
        });
      }
    });
  });
