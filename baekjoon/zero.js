// 백준 제출용
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

// let input = require("fs").readFileSync("예제.txt").toString().trim();
// console.log(input.split("\n"));
// let ascending = "12345678";
// let descending = "87654321";
// if (ascending === input) console.log("ascending");
// else if (descending === input) console.log("descending");
// else console.log("mixed");

// let fs = require("fs");
// let input = fs
//   .readFileSync("예제.txt")
//   .toString()
//   .split(" ")
//   .map((item) => item / 1);
// console.log(input[0] + input[1]);
// console.log(input[0] - input[1]);
// console.log(input[0] * input[1]);
// console.log(input[0] / input[1]);
// console.log(input[0] % input[1]);
// let fs = require("fs");
// let input = fs.readFileSync("예제.txt").toString();
// const [x1, y1, x2, y2] = input.split(" ");
// const [m1, m2] = [Math.abs(x1 - x2), Math.abs(y1 - y2)];
// console.log(Math.min(x1, x2, y1, y2, m1, m2));

// let fs = require("fs");
// let input = fs
//   .readFileSync("예제.txt")
//   .toString()
//   .trim()
//   .split("\n")
//   .filter((v, index) => index !== 0);
// const Sort = (a, b) => {
//   if (a.length === b.length) {
//     if (a > b) return 1;
//     else return -1;
//   } else {
//     return a.length - b.length;
//   }
// };
// input = [...new Set(input)];
// input.sort(Sort);
// console.log(input.join("\n"));

// const [k, n] = input.shift().split(" ");
// let front = 0;
// let rear = Math.max(...input);
// let aver = Math.floor((front + rear) / 2);
// while (front <= rear) {
//   const count = input
//     .map((v) => Math.floor(v / aver))
//     .reduce((a, c) => a + c, 0);
//   if (count < n) rear = aver - 1;
//   else front = aver + 1;
//   aver = Math.floor((front + rear) / 2);
// }
// console.log(aver);
// let fs = require("fs");
// let input = fs.readFileSync("예제.txt").toString().trim().split("\n");
// let A = input[1].split(" ");
// let B = input[3].split(" ");
// const arr = new Set(A);
// for (const b of B) {
//   if (arr.has(b)) console.log(1);
//   else console.log(0);
// }
// input.pop();
// const p = (string) => {
//   let B = string.split("").reverse().join("");
//   if (string === B) return true;
//   return false;
// };
// for (const v of input) {
//   console.log(p(v) ? "yes" : "no");
// }
// let answer = 0;
// input.shift();
// const isPrime = (n) => {
//   if (n < 2) return false;
//   if (n === 2) return true;
//   for (let i = 2; i * i <= n; i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// };
// for (const v of input[0].split(" ")) {
//   if (isPrime(v / 1)) answer++;
// }
// console.log(answer);

// let fs = require("fs");
// let input = fs.readFileSync("예제.txt").toString().trim() / 1;
// class Queue {
//   constructor() {
//     this.queue = [];
//     this.front = 0;
//     this.rear = 0;
//   }
//   push(v) {
//     this.queue[this.rear++] = v;
//   }
//   pop() {
//     const R = this.queue[this.front];
//     delete this.queue[this.front];
//     this.front++;
//     return R;
//   }
//   size() {
//     return this.rear - this.front;
//   }
// }
// const q = new Queue();
// for (let i = 1; i <= input; i++) {
//   q.push(i);
// }

// while (q.size() !== 1) {
//   q.pop();
//   q.push(q.pop());
// }
// console.log(q.pop());
let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().trim().split(" ");

const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
const G = gcd(input[0] / 1, input[1] / 1);
const L = input.reduce((acc, cur) => (acc * cur) / G, G);

console.log(G, "\n", L);
