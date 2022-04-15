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

// function add(x, y) {
//   return x + y; //함수 선언문
// }
// const sum = function (x, y) {
//   console.log(arguments);
//   return x + y; //함수 표현식
// };
// const test = {
//   function() {
//     return 1 + 1;
//   },
//   name: "test",
// };
// console.dir(add);
// console.dir(sum);
// console.log(sum(1, 1, 2, 3));
// console.log(test.function());

// var res = (function (a, b) {
//   return a * b; //즉시실행 함수
// })(3, 5);
// console.log(res);

// function repeat(n, f) {
//   for (var i = 0; i < n; i++) {
//     f(i);
//   }
// }

// var logOdd = function (i) {
//   if (i % 2) console.log(i);
// };

// repeat(5, logOdd);    //콜백 , 고차함수

///////////////////////////////////////////////스코프

// var x = "global";

// function foo() {
//   var x = "local";
//   console.log(x);
//   function inner() {
//     var y = "inner local";
//     console.log(y);
//     console.log(x && "위도 참조 가능");
//   }
//   inner();  //스코프 체인
// }
// foo();
// console.log(x);

// var x = 1;
// function foo() {
//   var x = 10;
//   bar();
// }
// function bar() {
//   console.log(x);
// }

// foo();
// bar();

// var Count = (function () {
//   var num = 0;
//   return {
//     increase() {
//       return ++num;
//     },
//     decrease() {
//       return --num;
//     },
//   }; //객체로 반환
// })(); //즉시 실행 함수로 객체 반환

// console.log(Count.num);
// console.log(Count.increase());
// console.log(Count.decrease());

////////////////////////////////////////////////let const 는 블록레벨 스코프를 가짐
////////////////////////////////////////////////프로퍼티

// const obj = {
//   name: "kim",
// };
// obj.__proto__;
// console.log(obj.__proto__);
// console.log(Object.getOwnPropertyDescriptor(obj, "name"));
// obj.age = 20;
// console.log(Object.getOwnPropertyDescriptors(obj));

// const Person = {
//   firstname: "dogyun", //데이터 프로퍼티
//   lastname: "kim", //데이터 프로퍼티

//   get Fullname() {
//     return `${this.lastname} ${this.firstname}`;
//   }, //접근자 프로퍼티

//   set Fullname(name) {
//     [this.firstname, this.lastname] = name.split(" ");
//   }, //접근자 프로퍼티
// };

// console.log(Person.lastname + " " + Person.firstname);
// Person.Fullname = "Doyup Lee"; // 알아서 set함수로 감 (setter는 접근자 프로퍼티)
// // Person.Fullname("Doyup Lee"); // 함수 아님 접근자 프로퍼티라 함수로 쓰지말것

// console.log(Person.Fullname); //알아서 get함수로 감 (getter는 접근자 프로퍼티)
// console.log(Object.getOwnPropertyDescriptor(Person, "Fullname"));
// console.log(Object.getOwnPropertyDescriptors(Person));
// console.log(Object.keys(Person));

// function arr(obj) {
//   Object.keys(obj).forEach((key) => (console.log(obj[key]), console.log(key)));
// }
// arr(Person);

//////////////////생성자 함수는 재사용할 때 유용함 ////////////////////////

// function Circle(radius) {
//   //인스턴스 초기화
//   console.log(new.target);
//   this.radius = radius;
//   this.getDiameter = function () {
//     return 2 * this.radius;
//   }; //생성자 함수의 this는 인스턴스(circle)을 가르킴
// }

// const circle = new Circle(5);
// console.log(circle);
// console.log(Object.getOwnPropertyDescriptors(circle));

// function foo() {
//   console.log(this); //일반 함수는 window,global을 가르킴
// }
// foo(); //일반 함수로 호출 this는 전역을 가르킴

// const obj = { foo };
// obj.foo(); // 매서드로 호출 this는 obj를 가르킴

// const inst = new foo(); //생성자로 호출 this는 inst를 가르킴
// inst;

/////////////////////////////////////////////////////////////일급 객체

// function a(n) {
//   console.log(arguments);
//   res = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     res += arguments[i];
//   }
//   return res;
// }
// console.dir(a);
// console.log(a());
// console.log(a(1));
// console.log(a(1, 2));

////////////////////////////////////////////////////////프로토타입

// function Circle(radius) {
//   this.radius = radius;
// }
// Circle.prototype.getArea = function (radius) {
//   return this.radius ** 2 * 3.14;
// };

// const circle1 = new Circle(4);
// const circle2 = new Circle(4);
// console.log(Circle);
// console.log(circle1.getArea === circle2.getArea); //포로토타입 매서드는 공유한다.(중복제거)
// console.log(Circle.__proto__);

// const obj = {};
// const proto = { x: 1 };
// obj.__proto__ = proto; //상속
// console.log(obj.x);

function Person(name) {
  this.name = name;
}
console.dir(Person);
const me = new Person("kim");

const parent = {
  constructor: Person,
  sayHi() {
    console.log(this.name);
  },
};

Person.prototype = parent;
me.__proto__ = parent;
me.sayHi();
console.log(parent instanceof Person);
