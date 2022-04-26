"use strict";

//state : pending -> fulfilled or rejected

const promise = new Promise((resolve, reject) => {
  console.log("doing something...");
  setTimeout(() => {
    resolve("dogyun");
  }, 2000);
});
promise
  .then((v) => {
    console.log(v);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

class UserStorage {
  loginUser(id, password) {
    return new Promise((result, reject) => {
      setTimeout(() => {
        if (
          (id === "dogyun" && password === "kim") ||
          (id === "coder" && password === "js")
        ) {
          result(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }
  getRoles(user) {
    return new Promise((result, reject) => {
      setTimeout(() => {
        if (user === "dogyun") {
          result({ name: "dogyun", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then(console.log);
