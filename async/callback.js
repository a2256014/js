"use strict";

console.log(1);
setTimeout(() => {
  console.log(2);
}, 1300);
console.log(3);

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "dogyun" && password === "kim") ||
        (id === "coder" && password === "js")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "dogyun") {
        onSuccess({ name: "dogyun", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(id, password, (user) => {
  userStorage.getRoles(
    user,
    (userWithRole) => {
      alert(`hello ${userWithRole.name}`);
    },
    (error) => {
      console.log(error);
    }
  ),
    (error) => {
      console.log(error);
    };
});
