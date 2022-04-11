const arr = [1, 2, 3];
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log(typeof arr);
console.log(arr.constructor);
console.log(Array.prototype);
console.log(arr.splice(1, 1));
arr[arr.length] = arr.length;
console.log(arr);
console.log(arr.splice(1, 2, 20, 30, 2, 7, 4, 9, 6));
console.log(arr);

const remove = function (array, item) {
  const index = array.indexOf(item);
  console.log(arguments);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
};

console.log(remove(arr, 20));
console.log(Array.from);
console.log(arr.sort((x, y) => (x > y ? -1 : 1)));
console.log(arr);
arr.forEach((item, index, arr1) => {
  console.log(`요소값:${item} 인덱스 : ${index} 배열 : ${arr1}`);
});

class User {
  constructor() {
    this.users = [
      { id: 1, name: "kim" },
      { id: 2, name: "lee" },
    ];
  }

  findIdBy(id) {
    return this.users.filter((user) => user.id === id);
  }

  remove(id) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}

const users = new User();
console.log(users);
console.log(users.findIdBy(1));
console.log(users.remove(1));
console.log(users);
console.log(Date());

arr1 = [];
for (let i = 0; i < 4; i++) {
  arr1[i] = Symbol(i);
}
console.log(arr1);
