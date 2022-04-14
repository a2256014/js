// const arr = [1, 2, 3];
// console.log(arr.length);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// console.log(typeof arr);
// console.log(arr.constructor);
// console.log(Array.prototype);
// console.log(arr.splice(1, 1));
// arr[arr.length] = arr.length;
// console.log(arr);
// console.log(arr.splice(1, 2, 20, 30, 2, 7, 4, 9, 6));
// console.log(arr);

// const remove = function (array, item) {
//   const index = array.indexOf(item);
//   console.log(arguments);
//   if (index !== -1) {
//     array.splice(index, 1);
//   }
//   return array;
// };

// console.log(remove(arr, 20));
// console.log(Array.from);
// console.log(arr.sort((x, y) => (x > y ? -1 : 1)));
// console.log(arr);
// arr.forEach((item, index, arr1) => {
//   console.log(`요소값:${item} 인덱스 : ${index} 배열 : ${arr1}`);
// });

// class User {
//   constructor() {
//     this.users = [
//       { id: 1, name: "kim" },
//       { id: 2, name: "lee" },
//     ];
//   }

//   findIdBy(id) {
//     return this.users.filter((user) => user.id === id);
//   }

//   remove(id) {
//     this.users = this.users.filter((user) => user.id !== id);
//   }
// }

// const users = new User();
// console.log(users);
// console.log(users.findIdBy(1));
// console.log(users.remove(1));
// console.log(users);
// console.log(Date());

// arr1 = [];
// for (let i = 0; i < 4; i++) {
//   arr1[i] = Symbol(i);
// }
// console.log(arr1);

// {
//   var x = 10;
// }
// console.log(x);
// console.log(![]);

// // && 두개가 전부 참일 때 참 반환 -> 앞이 false면 뒤에는 볼 이유도 없으니 앞 반환
// console.log(true && "이거 실행"); //앞이 참일 때 뒤에 실행하는 식으로 사용
// console.log(NaN && []);

// var elem = null
// var value = elem&&elem.value //이럴 때 사용
// var value1 = elem?.value
// // || 두개가 전부 거짓일 때 거짓 반환 -> 앞이 true면 뒤에는 볼 이유도 없으니 앞 반환
// console.log("" || "이거실행");
// console.log("뒤에 볼 필요도 없이 실행" || "ㅇㅇ");

///////////////////////////////////////////////////////////////객체

// const count = {
//   num: 0,
//   increase: function () {
//     //함수 선언 문
//     this.num++;
//   },
//   //count 객체의 프로퍼티 name increase
//   "last-name": "kim",
//   firstName: "dogyun",
// }; // 프로퍼티는 key:value로 구성되어 =이 아니라 :로 해야함
// delete count.num;

// var i = 0;
// count["use" + "-" + ++i] = i;
// count["use" + "-" + ++i] = i;
// count["use" + "-" + ++i] = i;
// console.log(count);

// var str = "string";
// console.log(str.length);
// console.log(str.toUpperCase());
// str[0] = "S";
// console.log(str); //문자는 원시값이라 안바뀜

// var copy = str; //원시값은 값에 의한 전달 -> 메모리 공간 따로라 수정해도 원본이 안바뀜
// console.log(copy === str);

// const objcopy = count;
// console.log(objcopy === count);
// objcopy.firstName = "copy";
// console.log(count); //객체의 경우 원본도 바뀐다

/////////////////////////////////////////////////////////////함수

function add(x, y) {
  return x + y; //함수 선언문
}
const sum = function (x, y) {
  console.log(arguments);
  return x + y; //함수 표현식
};
const test = {
  function() {
    return 1 + 1;
  },
  name: "test",
};
console.dir(add);
console.dir(sum);
console.log(sum(1, 1, 2, 3));
console.log(test.function());
