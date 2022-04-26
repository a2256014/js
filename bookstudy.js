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

// function Person(name) {
//   this.name = name;
// }

// const me = new Person("kim"); // me.proto = Person
// console.dir(me);

// const parent = {
//   constructor: Person,
//   sayHi() {
//     console.log(this.name);
//   },
// };

// Person.prototype = parent;

// me.__proto__ = parent;
// console.dir(me);
// me.sayHi();
// console.log(parent instanceof Person);
// console.log("sayHi" in me);

// for (const key in me) {
//   console.log(key + " " + me[key]);
// }

// const arr = [1, 2, 3];
// arr.forEach((item) => console.log(item));
// for (const item of arr) {
//   console.log(item);
// }

// let num = 1.5;
// console.log(num.toFixed());
// console.log(num);

////////////////////////////////////////////// 전역객체

// var x = parseFloat("3.14");
// var y = parseInt("3.14");
// console.log(typeof x, x);
// console.log(typeof y, y);
// const z = 15;
// console.log(z.toString(2)); //2진법으로 변환 1111

// const uri = "http://example.com?name=김도균&job=student";
// const encodingUri = encodeURI(uri);
// console.log(encodingUri); //url에 들어갈수 없는 것들을 인코딩해줌 (김도균)
// const decodingUri = decodeURI(encodingUri);
// console.log(uri);

/////////////////////////////////////////////////this

// const circle = {
//   radius: 5,
//   getDiameter() {
//     return this.radius * 2;
//   },
// };
// console.log(circle.getDiameter());

// console.log(this); //{}가 나옴

// function square(n) {
//   console.log(this); //일반함수에서 this는 global을 가르킴
//   return n * n;
// }
// square(3);

// const person = {
//   name: "kimdogyun",
//   getName() {
//     console.log(this);
//     return this.name;
//   },
// };
// console.log(person.getName());
// //객체안 메서드에서 부르면 this는 객체를 가르킴
// //생성자 함수는 생성한 인스턴스를 가르킴

// //this는 호출에 따라 동적으로 변환
// const foo = function () {
//   console.dir(this);
// };
// foo(); //일반함수 호출
// const obj = { foo };
// obj.foo(); //매서드 호출
// new foo(); //생성자 호출

// global.value = 1;
// const obj = {
//   value: 100,
//   foo() {
//     //////
//     const that = this; //해결책 this -> that으로
//     //////
//     console.log("foo's this : ", this);
//     console.log("foo's this.value : ", this.value);
//     //메서드 안에서의 함수(중첩함수)
//     function bar() {
//       console.log("bar's this : ", this);
//       console.log("bar's this.value : ", this.value);
//     }
//     //callback 함수도 window 가르킴 / node.js에선 다름
//     setTimeout(
//       function () {
//         console.log("callback's this : ", this);
//         console.log("callback's this.value : ", this.value);
//       }.bind(this),
//       4
//     ); //2번째 방법

//     setTimeout(() => {
//       console.log("화살표 this : ", this);
//       console.log("화살표 this.value : ", this.value);
//     }, 4); //화살표함수는 함수상위의 this를 참조

//     bar(); //메서드 안 중첩함수를 일반함수호출로 부름 -> this window
//   },
// };
// obj.foo();

// const person = {
//   name: "dogyun",
//   getName() {
//     return this.name;
//   },
// };
// console.log(person.getName());  //dogyun

// const person2 = {
//   name: "leedoyup",
// };
// person2.getName = person.getName;
// console.log(person2.getName()); //dogyun x ->leedoyup
// //매서드를 호출한 객체에 바인딩됨

// function getThisBinding() {
//   return this;
// }
// const thisArg = { name: "kim" };
// console.log(getThisBinding());
// console.log(getThisBinding.apply(thisArg));
// console.log(getThisBinding.call(thisArg));
// //apply call 은 this로 사용할 객체와 인수 전달함
// console.log(getThisBinding.bind(thisArg)());

////////////////////////////////////실행 컨텍스트
// const a = {
//   name: "kim",
//   foo() {
//     console.log(this.name);
//     const b = {
//       name: this.name,
//       bar() {
//         console.log(this.name);
//         console.log(this);
//       },
//     };
//     b.bar();
//   },
// };
// a.foo();

////////////////////////////////////클로저

// const x = 1;
// function foo() {
//   const x = 10;
//   console.log(x);
//   bar();
// }
// function bar() {
//   console.log(x);
// }
// foo();
// bar();
// console.dir(foo);

// const x = 1;
// function outer() {
//   const x = 10;
//   function inner() {
//     console.log(x);
//   }
//   return inner; //반환하고 생명마감
// }
// const life = outer(); //inner를 리턴하고 사라진다
// life(); //하지만 10을 출력한다
// console.dir(life);

///////활용법

// const counter = (function () {
//   let num = 0;
//   return {
//     increase() {
//       return ++num;
//     },
//     decrease() {
//       return --num;
//     },
//   };
// })(); //즉시실행 함수

// console.log(counter.increase());
// console.log(counter.increase());
// console.log(counter.increase()); //111이 아닌 123 으로 된다.
// console.log(counter.decrease());
// console.log(counter.decrease());
// console.log(counter.decrease());

// const counter = (function () {
//   let num = 0; //은닉
//   function Counter() {
//     return {
//       increase() {
//         return ++num;
//       },
//       decrease() {
//         return --num;
//       },
//     };
//   }
//   return Counter;
// })(); //즉시 실행함수로 해야 할당됨

// const a = new counter();

// console.log(a.increase());

// function Counter() {
//   let num = 0;
//   return {
//     increase() {
//       return ++num;
//     },
//     decrease() {
//       return --num;
//     },
//   };
// }
// const b = new Counter();
// console.log(b.decrease());
////////////////////////////////////즉시함수로 만드는 이유 공부

//고차함수
// const makeCount = (function () {
//   let count = 0;
//   return function (oper) {
//     count = oper(count);
//     return count;
//   };
// })();

// //보조함수
// function increase(count) {
//   return ++count;
// }
// function decrease(count) {
//   return --count;
// }

// //실행
// console.log(makeCount(increase));
// console.log(makeCount(increase));
// console.log(makeCount(decrease));
// console.log(makeCount(decrease));

//////////////////////////////////////클로저 자주하는 실수

// let funcs = [];
// for (let i = 0; i < 3; i++) {
//   funcs[i] = function () {
//     return i;
//   };
// }
// for (let j = 0; j < funcs.length; j++) {
//   console.log(funcs[j]());
// }

/////////////////////////////////////////class

// class Person {
//   constructor(name) {
//     this.name = name;
//     //return this 암묵적으로 반환함
//     // return {} // this가 반환안되고 {}가 반환됨
//   } //생성자 메서드
//   sayHi() {
//     console.log(`hi ${this.name}`);
//   }
//   static sayHello() {
//     console.log("hello");
//   }
// }

// const me = new Person("kim");
// me.sayHi();
// Person.sayHello(); //class 고유 정적메서드
// console.log(Object.getPrototypeOf(me) === Person.prototype);
// console.log(Person.prototype);
// Object.getPrototypeOf(me).sayHi();
//메서드this는 자길 호출한 객체에 바인딩됨

/////////////////////////////////////constructor는 생성자 함수

// class People {
//   name = "lee";

//   getName = function () {
//     return this.name;
//   };
// }
// const you = new People();
// console.log(you.getName());

////////////////////////////////////상속

// class Animal {
//   constructor(age, weight) {
//     this.age = age;
//     this.weight = weight;
//   }
//   move() {
//     console.log("move");
//   }
//   eat() {
//     console.log("eat");
//   }
// }

// class Bird extends Animal {
//   constructor(name, ...arg) {
//     super(...arg);
//     this.name = name;
//   }
//   move() {
//     super.move();
//     console.log("fly");
//   }
// }

// const bird = new Bird("rain", 1, 5);
// bird.eat();
// bird.move();
// console.log(bird.name);
// console.log(bird);

// console.log(bird instanceof Animal); //true

// const obj = {
//   foo() {
//     return console.log("method");
//   },
// };
// console.log(obj.foo());

// const obj = (name, ...rest) => {
//   this.name = name;

//   output = () => {
//     console.log(this);
//     console.log(this.name);
//     console.log(this.rest);
//   };
//   output();
// };
// obj("kim", 1, 2, 3, 4);

///////////////////////////////////////////////////////배열

// arr = [1, 2, 3];
// console.log(arr.length);
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr1 = [];
// arr1.push(1);
// console.log(arr1);

// arr2 = Array.from("hello");
// console.log(arr2);
// arr2.splice(2, arr2.length - 1);
// console.log(arr2);
// arr2.indexOf("h");
// console.log('arr2.indexOf("h"): ', arr2.indexOf("h"));
// arr2.includes("e");
// console.log('arr2.includes("e"): ', arr2.includes("e"));

// //추가
// arr2[arr2.length] = "me";
// arr3 = [...arr2, "push"];
// console.log("arr3: ", arr3);
// arr3.unshift("left"); //왼쪽 삽입
// console.log("arr3: ", arr3);
// arr3.shift();
// console.log("arr3: ", arr3); //왼쪽 제거

// arr4 = [...arr1, ...arr2, ...arr3];
// console.log("arr4: ", arr4);

// console.log("arr4.join(): ", arr4.join());
// console.log('arr4.join(""): ', arr4.join(""));
// console.log('arr4.join(" "): ', arr4.join(" "));

// arr5 = [];
// arr5.length = 10;
// arr5.fill(1);
// console.log("arr5: ", arr5);

// const sequense = (length = 0) => {
//   return Array.from({ length }, (_, i) => i);
// };
// arr6 = sequense(5);
// console.log("arr6: ", arr6);

// console.log(typeof arr6);
// arr6.sort((a, b) => b - a);
// console.log("arr6: ", arr6);

// const todo = [
//   { id: 1, content: "css" },
//   { id: 2, content: "html" },
//   { id: 3, content: "react" },
// ];

// const compare = (key) => {
//   return (a, b) => (a[key] < b[key] ? 1 : -1);
// };

// todo.sort(compare("content"));
// console.log("todo: ", todo);

// pow = [];
// arr6.forEach((item) => pow.push(item ** 2)); //foreach는 항상 undefine 반환
// console.log("pow: ", pow);

// sqrt = [];
// sqrt = pow.map((item) => Math.sqrt(item)); //새로운 배열 반환
// console.log("sqrt: ", sqrt);

// binary = [];
// binary = sqrt.filter((item) => item % 2 === 0);
// console.log("binary: ", binary);

// const sum = binary.reduce((accumulator, currentValue, index, array) => {
//   console.log(
//     "accumulator, currentValue, index, array: ",
//     accumulator,
//     currentValue,
//     index,
//     array
//   );
//   return accumulator + currentValue;
// }, 0);
// console.log("sum: ", sum);

// const sequence = (length = 0) => {
//   return Array.from({ length }, (_, i) => i);
// };
// values = sequence(7);
// console.log("values: ", values);
// const average = values.reduce((acc, cur, idx, arr) => {
//   console.log("acc,cur,idx,arr: ", acc, cur, idx, arr);
//   return idx === arr.length - 1 ? (acc + cur) / arr.length : acc + cur;
// }, 0);
// console.log("average: ", average);

// firstname = ["kim", "lee", "park", "park", "park", "kim", "lee"];
// const count = firstname.reduce((acc, cur) => {
//   console.log("acc, cur: ", acc, cur);
//   acc[cur] = (acc[cur] || 0) + 1;
//   return acc;
// }, {});
// console.log("count: ", count);

// const values1 = [1, [2, 3, [4, 5], [6, 7]], [8, 9], 10];
// console.log("values1: ", values1);
// console.log("values1.flat(3): ", values1.flat(3));
// //중복제거
// const values2 = [1, 1, 1, 1, 2, 2, 3, 3, 3, 6, 6, 7];
// const result = values2.reduce((acc, cur, i, arr) => {
//   if (arr.indexOf(cur) === i) acc.push(cur);
//   return acc;
// }, []);
// console.log("result: ", result);

// const result2 = values2.filter(
//   (value, index, arr) => arr.indexOf(value) === index
// );
// console.log("result2: ", result2);

// console.log(
//   "[1,5,15].some(item=>item>10): ",
//   [1, 5, 15].some((item) => item > 10)
// );

// console.log(
//   "[1,5,10].every(item=>item>10): ",
//   [1, 5, 10].every((item) => item <= 10)
// );

/////////////////////////////////////////////////////Number

// const isEqual = (a, b) => {
//   return Math.abs(a - b) < Number.EPSILON;
// };
// console.log("isEqual(0.1+0.2,0.3): ", isEqual(0.1 + 0.2, 0.3));

// console.log("Number.isInteger(1.0): ", Number.isInteger(1.0));

// console.log("123.456.toFixed(3): ", (123.456).toFixed(1));

// console.log("(9).toString(2): ", (9).toString(2));

///////////////////////////////////////////////////////Math
//round 반올림
//ceil  올림
//floor 내림
//abs,sqrt,random,pow,max,min

///////////////////////////////////////////////////////Date

// console.log("new Date(): ", new Date());

// console.log("Date(): ", Date());

// console.log("new Date(60000): ", new Date(60000));

///////////////////////////////////////////////////////정규표현식

// const tel = "010-8888-9999";
// const reg = /^\d{3}-\d{4}-\d{4}$/;
// console.log("reg.test(tel): ", reg.test(tel));

// const target = "Is this all there is?";
// const reg1 = /is/gi;

// console.log("reg1.exec(target): ", reg1.exec(target));
// console.log("target.match(reg1): ", target.match(reg1));

// flag =  i = ignorecase 대소문자 구분 안함
//         g = global     전역검색
//         m = multi line 여러줄
// pattern

// /.../ 임의의 3자리
// /A{1,2}/g A가 최소 1번 최대 2번 반복확인
// /A{2}/  A가 2번 반복되는지 확인
// /A{2,}/ A가 최소 2번 반복
// /A+/  A가 최소 한번
// /?/   {0,1}과 같음
// /A|B/ A혹은 B
// /A+|B+/===/[AB]+/
// /[A-Z]+/  A AA AAA ... Z ZZ ZZZ...
// const reg2 = /[A-Za-z]+/g;
// const target1 = "A aa AA Bb b B Bb b";
// console.log("target1.match(reg2): ", target1.match(reg2));

// [0-9]+ === [\d] [\D] 숫자가 아닌거
// [\w]  알파벳 숫자 _ [\W]
// [^0-9]===[\D]
// /^/ 시작위치
// /$/ 마지막위치
// [\s]  공백

///////////////////////////////////////////////////////string

// const str = "Hello Kim";
// console.log('str.indexOf("H"): ', str.indexOf("o"));
// console.log('str.includes("lee"): ', str.includes("lee"));
// console.log("str.search(/^[a-z]/g): ", str.search(/^[a-zA-Z]+/g));
// console.log("str.substring(1,4): ", str.substring(1, 4));

// const str1 = "12agd34asd22";
// str.replace(/[^a-zA-Z]/g, "");
// console.log('str.replace(/[^a-zA-Z]/g,""): ', str1.replace(/[^a-zA-Z]/g, ""));

// const camelCase = (string) => {
//   return string.replace(/.[A-Z]/g, (match) => {
//     console.log(match);
//     return match[0] + "_" + match[1].toLowerCase();
//   });
// };
// console.log('camelCase("meFind");: ', camelCase("meFind"));

// const snakeCase = (string) => {
//   return string.replace(/._./g, (match) => {
//     console.log(match);
//     return match[0] + match[2].toUpperCase();
//   });
// };
// console.log('snakeCase("me_find"): ', snakeCase("me_find"));

// const reverseCase = (string) => {
//   return string.split("").reverse().join("");
// };
// console.log('reverseCase("Hello World"): ', reverseCase("Hello World"));

///////////////////////////////////////////////////////symbol

// const s1 = Symbol("mySymbol");
// Symbol.keyFor(s1);
// console.log("Symbol.keyfor(s1): ", Symbol.keyFor(s1));

// const Oper = {
//   UP: Symbol("up"),
//   DOWN: Symbol("down"),
//   RIGHT: Symbol("right"),
//   LEFT: Symbol("left"),
// };

// const myDirection = Oper.DOWN;
// console.log(Symbol.for("down"));

///////////////////////////////////////////////////////이터러블

// array = [1, 2, 3];
// console.log(...array); //스프레드
// const rest = (...arr) => {
//   //rest
//   console.log(arr);
// };
// rest(1, 2, 3);

// for (const item of array) {
//   console.log(item);
// }

// const iterator = array[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// const fibonacci = (max) => {
//   let [pre, cur] = [0, 1];
//   return {
//     [Symbol.iterator]() {
//       return {
//         next() {
//           [pre, cur] = [cur, cur + pre];
//           return { value: cur, done: cur >= max };
//         },
//       };
//     },
//   };
// };
// for (const item of fibonacci(10)) {
//   console.log(item);
// }

///////////////////////////////////////////////////////디스트럭처링 할당

// const parseUrl = (url = "") => {
//   const parsedUrl = url.match(/(^\w+):\/\/([^/]+)\/(.*)$/);
//   console.log(parsedUrl);
//   [, protocol, host, path] = parsedUrl; //디스트럭처링
//   return { protocol, host, path };
// };

// const parsedUrl = parseUrl(
//   "https://www.delftstack.com/ko/howto/python/is -int-or-not-python/"
// );
// console.log("parsedUrl: ", parsedUrl);

// const user = {
//   firstName: "Kim",
//   lastName: "dogyun",
// };
// const { firstName: fn, lastName: ln } = user; //객체 디스트럭처링
// console.log(fn, ln);

// const todo = [
//   { id: 1, name: "kim", address: { zipCode: 10, city: "seoul" } },
//   { id: 2, name: "lee", address: { zipCode: 10, city: "busan" } },
//   { id: 3, name: "park", address: { zipCode: 10, city: "kyunggi" } },
// ];

// const [
//   ,
//   {
//     id,
//     address: { city: g },
//   },
// ] = todo;
// console.log(id, g);

///////////////////////////////////////////////////////set map

// const set = new Set([1, 3, 2]);
// console.log("set: ", set);

// //중복제거
// const array = [1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 5, 7, 7, 7, 8, 9, 9];
// const uniq = array.filter((value, index, arr) => arr.indexOf(value) === index);
// const uniq2 = [...new Set(array)];
// console.log("uniq: ", uniq);
// console.log("uniq2: ", uniq2);
//add has delete
// intersection union difference
// entries

// class Person {
//   constructor(first, last, age) {
//     this.first = first;
//     this.last = last;
//     this.age = age;
//   }

//   get age() {
//     return this.age;
//   }
//   set age(value) {
//     this.age = value < 0 ? 0 : value;
//   }
// }
// const user = new Person("kim", "dogyun", 26);
// console.log(user);
