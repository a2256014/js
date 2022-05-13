// const solution = (id_list, report, k) => {
//   let reports = [...report].map((item) => item.split(" "));
//   let counts = new Map();
//   let go = new Map();
//   console.log("reports: ", reports);

//   for (const i of reports) {
//     counts.set(i[1], counts.get(i[1]) + 1 || 1);
//   }
//   console.log(counts);

//   for (const i of reports) {
//     if (counts.get(i[1]) >= k) {
//       go.set(i[0], go.get(i[0]) + 1 || 1);
//     }
//   }

//   let answer = id_list.map((item) => go.get(item) || 0);
//   console.log(answer);
// };

// solution(
//   ["muzi", "frodo", "apeach", "neo"],
//   ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
//   2
// );

// function solution(new_id) {
//     const answer = new_id
//         .toLowerCase() // 1
//         .replace(/[^\w-_.]/g, '') // 2
//         .replace(/\.+/g, '.') // 3
//         .replace(/^\.|\.$/g, '') // 4
//         .replace(/^$/, 'a') // 5
//         .slice(0, 15).replace(/\.$/, ''); // 6
//     const len = answer.length;
//     return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
// }
// []or  \특수기호   |or     ()그룹검색  ?최대 한번  *있거나없음

// function solution(board, moves) {
//   var count = 0;
//   var stack = [];

//   for (var i = 0; i < moves.length; i++) {
//     var now = moves[i] - 1;
//     for (var j = 0; j < board.length; j++) {
//       if (board[j][now] != 0) {
//         if (stack[stack.length - 1] === board[j][now]) {
//           stack.pop();
//           count += 2;
//         } else {
//           stack.push(board[j][now]);
//         }
//         board[j][now] = 0;
//         break;
//       }
//     }
//   }

//   return count;
// }

// const board = [
//   [0, 0, 0, 0, 0],
//   [0, 0, 1, 0, 3],
//   [0, 2, 5, 0, 1],
//   [4, 2, 4, 4, 2],
//   [3, 5, 1, 3, 1],
// ];
// const moves = [1, 5, 3, 5, 1, 2, 1, 4];
// console.log("solution(board, moves);: ", solution(board, moves));

// const convet = (collect) => {
//   for (item in collect) {
//     console.log("key = " + item + " value = " + collect[item]);
//   }
// };

// const dict = { a: 1, b: 2, c: 3 };
// convet(dict);

// function add(num) {
//   const addNext = function (x) {
//     return add(num + x);
//   };
//   addNext.valueOf = function () {
//     return num;
//   };
//   return addNext;
// }

// const _sum = add(1)(2)(3);
// console.log("_sum: ", _sum);

// const move = (current, nextnum) => {
//   keypad = {
//     1: [0, 0],
//     2: [0, 1],
//     3: [0, 2],
//     4: [1, 0],
//     5: [1, 1],
//     6: [1, 2],
//     7: [2, 0],
//     8: [2, 1],
//     9: [2, 2],
//     "*": [3, 0],
//     0: [3, 1],
//     "#": [3, 2],
//   };
//   const dist = distance(keypad[current], keypad[nextnum]);
//   return dist;
// };

// const distance = (current, nextnum) => {
//   const x = Math.abs(current[0] - nextnum[0]);
//   const y = Math.abs(current[1] - nextnum[1]);
//   return x + y;
// };

// const solution = (numbers, hand) => {
//   let answer = "";
//   let right = "#";
//   let left = "*";

//   for (const n of numbers) {
//     if ([1, 4, 7].includes(n)) {
//       left = n;
//       answer += "L";
//     } else if ([3, 6, 9].includes(n)) {
//       right = n;
//       answer += "R";
//     } else {
//       const rdist = move(right, n);
//       const ldist = move(left, n);
//       if (rdist === ldist) {
//         if (hand === "right") {
//           answer += "R";
//           right = n;
//         } else {
//           answer += "L";
//           left = n;
//         }
//       } else {
//         if (rdist < ldist) {
//           answer += "R";
//           right = n;
//         } else {
//           answer += "L";
//           left = n;
//         }
//       }
//     }
//   }

//   return answer;
// };

// console.log(
//   'solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");: ',
//   solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")
// );

// const solution = (a, b) => {
//   let answer = 0;

//   for (let i = 0; i < a.length; i++) {
//     answer += a[i] * b[i];
//   }
//   return answer;
// };

// console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));

// const getCombination = (arr, select) => {
//   const result = [];
//   if (select === 1) {
//     return arr.map((item) => [item]);
//   }
//   arr.forEach((v, i, arr) => {
//     const rest = arr.slice(i + 1);
//     const combination = getCombination(rest, select - 1);
//     const attach = combination.map((item) => [v, ...item]);
//     result.push(...attach);
//   });
//   return result;
// };

// console.log(getCombination([1, 2, 3, 4], 3));

// const solution = (N, stage) => {
//   let answer = [];
//   let user = stage.length;
//   let stageUser = {};
//   let probability = [];
//   stage.forEach((item) => {
//     stageUser[item] = stageUser[item] + 1 || 1;
//   });
//   for (let i = 1; i <= N; i++) {
//     probability.push([i, stageUser[i] / user || 0]);
//     user -= stageUser[i] || 0;
//   }
//   probability.sort((a, b) => {
//     return b[1] - a[1];
//   });
//   probability.forEach((item) => answer.push(item[0]));
//   console.log(answer);
//   return answer;
// };

// solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
// solution(4, [4, 4, 4, 4, 4]);

// const solution = (n) => {
//   let answer = 0;

//   answer = parseInt(n.toString(3).split("").reverse().join(""), 3);

//   return answer;
// };
// solution(45);

// const solution = (d, budget) => {
//   let answer = 0;

//   d.sort((a, b) => {
//     return a - b;
//   });

//   for (let i of d) {
//     if (budget - i >= 0) {
//       answer += 1;
//       budget -= i;
//     } else {
//       break;
//     }
//   }
//   console.log(answer);
//   return answer;
// };
// solution([1, 3, 2, 5, 4], 9);

// const getCombination = (arr, n) => {
//   const result = [];
//   if (n == 1) {
//     return arr.map((item) => [item]);
//   }
//   arr.forEach((v, i, arr) => {
//     const rest = arr.slice(i + 1);
//     const combination = getCombination(rest, n - 1);
//     const attach = combination.map((item) => [v, ...item]);
//     result.push(...attach);
//   });
//   return result;
// };

// const solution = (n) => {
//   let answer = [];
//   const combi = getCombination(n, 2);
//   combi.forEach((item) => {
//     const _sum = item[0] + item[1];
//     if (!answer.includes(_sum)) answer.push(_sum);
//   });

//   return answer.sort((a,b)=>{return a-b});
// };
// solution([2, 1, 3, 4, 1]);

// const collect = (string) => {
//   const stack = [];
//   let bool = true;
//   for (let i = 0; i < string.length; i++) {
//     string[i] === "("
//       ? stack.push(string[i])
//       : stack.length === 0
//       ? (bool = false)
//       : stack.pop();
//   }
//   return bool;
// };

// function solution(p) {
//   let w = p;

//   if (!w) return w;

//   let count = 0;
//   let u = "";
//   let v = "";
//   for (let i = 0; i < w.length; i++) {
//     if (w[i] === "(") {
//       count += 1;
//     } else {
//       count -= 1;
//     }
//     if (count === 0) {
//       u = w.slice(0, i + 1);
//       v = w.slice(i + 1);
//       break;
//     }
//   }

//   if (collect(u)) {
//     return (u += solution(v));
//   } else {
//     let tmp = "(";
//     tmp += solution(v);
//     tmp += ")";
//     u.slice(1, u.length - 1)
//       .split("")
//       .forEach((item) => {
//         item === "(" ? (tmp += ")") : (tmp += "(");
//       });
//     return tmp;
//   }
// }
// console.log(solution("()))((()"));

// const user = { name: "kim", age: 20 };
// console.log(user);

// const getCombination = (arr, n) => {
//   const combination = [];
//   if (n === 1) {
//     return arr.map((item) => [item]);
//   }
//   arr.forEach((item, index, array) => {
//     const rest = [...array.slice(0, index), ...array.slice(index + 1)];
//     const combi = getCombination(rest, n - 1);
//     const attach = combi.map((v) => [item, ...v]);
//     combination.push(...attach);
//   });

//   return combination;
// };

// const operation = (a, b, oper) => {
//   let num;
//   switch (oper) {
//     case "+":
//       num = a + b;
//       break;

//     case "-":
//       num = a - b;
//       break;

//     case "*":
//       num = a * b;
//       break;
//   }
//   return num;
// };

// function solution(expression) {
//   var answer = 0;
//   const arr = ["+", "-", "*"];
//   const oper = getCombination(arr, 3);
//   const num = expression.split(/[\+\-\*]/);
//   const command = expression.split(/[0-9]{1,}/).filter((item) => item !== "");
//   const cnum = [];
//   const result = [];

//   for (let i = 0; i < command.length; i++) {
//     cnum.push(num[i], command[i]);
//   }
//   cnum.push(num[num.length - 1]);

//   for (c of oper) {
//     const number = [...cnum];
//     c.forEach((o) => {
//       while (number.includes(o)) {
//         const index = number.indexOf(o);
//         number.splice(
//           index - 1,
//           3,
//           operation(number[index - 1] / 1, number[index + 1] / 1, o)
//         );
//       }
//     });
//     result.push(Math.abs(number[0]));
//   }
//   answer = Math.max(...result);
//   console.log(answer);
//   return answer;
// }
// solution("100-200*300-500+20");
// const arr1 = [1, 2, 3, 4, 5];

// const arr = Array.from(arr1, (value, index) => {
//   console.log("value, index: ", value, index);
//   return false;
// });
// console.log("arr: ", arr);

// class Queue {
//   constructor() {
//     this.queue = [];
//     this.front = 0;
//     this.rear = 0;
//   }
//   enqueue(value) {
//     this.queue[this.rear++] = value;
//   }
//   dequeue() {
//     const tmp = this.queue[this.front];
//     delete this.queue[this.front];
//     this.front += 1;
//     return tmp;
//   }
//   peak() {
//     return this.queue[this.front];
//   }
//   size() {
//     return this.rear - this.front;
//   }
// }

// function solution(priorities, location) {
//   let index = 0;
//   const queue = new Queue();
//   for (item of priorities) {
//     queue.enqueue([item, index]);
//     index += 1;
//   }

//   priorities.sort((a, b) => b - a);
//   let count = 0;
//   while (queue.size() > 0) {
//     const current = queue.peak();
//     if (current[0] < priorities[count]) {
//       queue.enqueue(queue.dequeue());
//     } else {
//       const value = queue.dequeue();
//       count += 1;
//       if (value[1] === location) {
//         return count;
//       }
//     }
//   }
// }

// console.log(solution([2, 1, 3, 2], 2));

// const Sort = (a, b) => {
//   if (a[0] === b[0]) {
//     //play same
//     return a[1] - b[1];
//   } else {
//     return b[0] - a[0];
//   }
// };

// function solution(genres, plays) {
//   var answer = [];

//   //1.
//   const genresCount = new Map();
//   for (let i = 0; i < plays.length; i++) {
//     genresCount[genres[i]]
//       ? (genresCount[genres[i]] += plays[i])
//       : (genresCount[genres[i]] = plays[i]);
//   }
//   //2.
//   const playsCount = new Map();
//   for (let i = 0; i < plays.length; i++) {
//     if (playsCount[genres[i]]) {
//       playsCount[genres[i]].push([plays[i], i]);
//     } else {
//       playsCount[genres[i]] = [[plays[i], i]];
//     }
//   }
//   //3. play => index sort
//   for (key in playsCount) {
//     playsCount[key].sort((a, b) => Sort(a, b));
//   }

//   //4.
//   let count = 0;
//   for (key in genresCount) {
//     count++;
//   }
//   while (count > 0) {
//     let maxgenre = [];
//     for (key in genresCount) {
//       if (maxgenre.length > 0) {
//         if (maxgenre[1] < genresCount[key]) {
//           maxgenre = [key, genresCount[key]];
//         }
//       } else {
//         maxgenre = [key, genresCount[key]];
//       }
//     }
//     genresCount[maxgenre[0]] = 0;
//     count--;
//     //5.
//     if (playsCount[maxgenre[0]].length > 1) {
//       answer.push(playsCount[maxgenre[0]][0][1]);
//       answer.push(playsCount[maxgenre[0]][1][1]);
//     } else {
//       answer.push(playsCount[maxgenre[0]][0][1]);
//     }
//   }
//   return answer;
// }

// function solution(genres, plays) {
//   const genresMap = new Map();

//   genres
//     .map((genre, index) => [genre, plays[index]])
//     .forEach(([genre, play], index) => {
//       const data = genresMap.get(genre) || { total: 0, songs: [] };
//       genresMap.set(genre, {
//         total: data.total + play,
//         songs: [...data.songs, { play, index }]
//           .sort((a, b) => b.play - a.play)
//           .slice(0, 2),
//       });
//     });

//   console.log(
//     [...genresMap.entries()]
//     .sort((a, b) => b[1].total - a[1].total)
//     .flatMap((item) => item[1].songs)
//     .map((item) => item.index)
//   );
// }

// solution(
//   ["classic", "pop", "classic", "classic", "pop"],
//   [500, 600, 150, 800, 2500]
// );

// class MaxHeap {
//   constructor() {
//     this.heap = [null];
//   }
//   push(value) {
//     this.heap.push(value);
//     let currentIndex = this.heap.length - 1;
//     let parentIndex = Math.floor(currentIndex / 2);
//     while (parentIndex !== 0 && value > this.heap[parentIndex]) {
//       const tmp = this.heap[parentIndex];
//       this.heap[parentIndex] = value;
//       this.heap[currentIndex] = tmp;

//       currentIndex = parentIndex;
//       parentIndex = Math.floor(currentIndex / 2);
//     }
//   }
//   pop() {
//     if (this.heap.length === 2) return this.heap.pop();
//     const returnValue = this.heap[1];
//     this.heap[1] = this.heap.pop();

//     let currentIndex = 1;
//     let leftIndex = 2;
//     let rightIndex = 3;
//     while (
//       this.heap[currentIndex] < this.heap[rightIndex] ||
//       this.heap[currentIndex] < this.heap[leftIndex]
//     ) {
//       if (this.heap[leftIndex] < this.heap[rightIndex]) {
//         const tmp = this.heap[currentIndex];
//         this.heap[currentIndex] = this.heap[rightIndex];
//         this.heap[rightIndex] = tmp;
//         currentIndex = rightIndex;
//       } else {
//         const tmp = this.heap[currentIndex];
//         this.heap[currentIndex] = this.heap[leftIndex];
//         this.heap[leftIndex] = tmp;
//         currentIndex = leftIndex;
//       }
//       leftIndex = currentIndex * 2;
//       rightIndex = currentIndex * 2 + 1;
//     }
//     return returnValue;
//   }
// }
// //배상비용 += 작업량**2
// const heap = new MaxHeap();

// function solution(no, works) {
//   let count = 0;
//   for (const item of works) {
//     heap.push(item);
//   }
//   while (no > 0) {
//     no -= 1;
//     heap.push(heap.pop() - 1);
//   }
//   count = heap.heap.reduce((a, b) => {
//     return a + b * 2;
//   }, 0);

//   return count;
// }

// console.log(solution(4, [4, 3, 3]));

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class SinglyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }
//   find(value) {
//     let curNode = this.head;
//     while (curNode.value !== value) {
//       curNode = curNode.next;
//     }
//     return curNode;
//   }
//   append(value) {
//     const newNode = new Node(value);
//     if (this.head === null) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode; //이전 꼬리에 새로운 노드를 연결함
//       this.tail = newNode; //꼬리를 새로운 노드로 설정함
//     }
//   }
//   insert(node, value) {
//     const newNode = new Node(value);
//     newNode.next = node.next;
//     node.next = newNode;
//   }
//   remove(value) {
//     let prevNode = this.head;
//     while (prevNode.next.value !== value) {
//       prevNode = prevNode.next;
//     }
//     if (prevNode.next !== null) {
//       prevNode.next = prevNode.next.next;
//       this.tail = prevNode;
//     }
//   }
// }

// const linkedList = new SinglyLinkedList();
// linkedList.append(1);
// linkedList.append(3);
// linkedList.append(2);
// linkedList.append(5);
// linkedList.append(8);
// linkedList.append(4);
// linkedList.append(6);
// console.log(linkedList);
// linkedList.remove(6);
// console.log(linkedList);

// class Node {
//   constructor(value = "") {
//     this.value = value;
//     this.children = new Map();
//   }
// }
// class Trie {
//   constructor() {
//     this.root = new Node();
//   }
//   insert(string) {
//     let currentNode = this.root;

//     for (const char of string) {
//       if (!currentNode.children.has(char)) {
//         currentNode.children.set(char, new Node(currentNode.value + char));
//       }
//       currentNode = currentNode.children.get(char);
//     }
//   }
//   has(string) {
//     let currentNode = this.root;

//     for (const char of string) {
//       if (!currentNode.children.has(char)) {
//         return false;
//       }
//       currentNode = currentNode.children.get(char);
//     }
//     return true;
//   }
// }

// const trie = new Trie();
// trie.insert("happy");
// trie.insert("new");
// trie.insert("year");
// trie.insert("hand");
// trie.insert("have");
// trie.insert("none");
// trie.insert("null");
// trie.insert("young");

// console.log(trie);

// function makeTrie(words) {
//   const root = {}; // 먼저 루트 노드를 설정할 변수를 만든다.
//   for (const word of words) {
//     // Trie를 구성하기 위한 루프를 돌린다.
//     let current = root; // 루프부터 시작
//     for (const letter of word) {
//       // 단어의 글자를 하나씩 춫출한 후
//       if (!current[letter]) current[letter] = [0, {}]; // 값을 넣는다. 리스트의 첫 번째 값은 학습된 단어가 몇 개인지를 카운팅하고 두 번째 값은 트리 구조로 이용할 노드 값으로 사용한다.
//       current[letter][0] = 1 + (current[letter][0] || 0); // 카운팅을 위해 1 더해준다.
//       current = current[letter][1]; // current는 letter에 해당되는 노드로 이동한다.
//     }
//   }

//   return root; // 반환
// }

// function solution(words) {
//   let answer = 0;
//   const trie = makeTrie(words); // Trie 자료구조를 만들어준다.

//   for (const word of words) {
//     // 입력받은 수 만큼 루프
//     let count = 0; // 카운팅을 위한 변수
//     let current = trie; // 루트부터 시작
//     for (const [index, letter] of [...word].entries()) {
//       count += 1;
//       if (current[letter][0] <= 1) {
//         // 단어가 하나 이하로 남을 경우 종료
//         break;
//       }
//       current = current[letter][1]; // 다음 노드로 이동
//     }
//     answer += count; // 카운팅을 더해준다
//   }

//   return answer; // 반환
// }

// solution(["word", "war", "warrior", "world"]);

// let a = 5,
//   b = 10;
// [a, b] = [b, a];
// console.log(a, b);

// const sum = Array.from(new Array(5), (value, index) =>
//   console.log("i, k: ", index, value)
// );

///////////////////////////////////////////
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }
//   append(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//   }
//   find(value) {
//     let currentNode = this.head;
//     while (currentNode.value !== value) {
//       if (!currentNode.next) {
//         return false;
//       }
//       currentNode = currentNode.next;
//     }
//     return currentNode;
//   }
//   remove(value) {
//     let prevNode = this.head;
//     while (prevNode.next.value !== value) {
//       if (!prevNode.next.next) {
//         return false;
//       }
//       prevNode = prevNode.next;
//     }
//     prevNode.next = prevNode.next.next;
//   }
//   insert(node, value) {
//     let newNode = new Node(value);
//     newNode.next = node.next;
//     node.next = newNode;
//   }
// }
// const linkedList = new LinkedList();
// linkedList.append(10);
// linkedList.append(9);
// linkedList.append(8);
// linkedList.append(7);
// linkedList.append(6);

// const list = linkedList.find(8);
// console.log("list: ", list);
// linkedList.insert(list, 100);
// linkedList.remove(9);
// linkedList.remove(8);
// console.log(linkedList);
// console.log(linkedList.remove(8));
// console.log(linkedList.find(100));

// class Queue{
//   constructor(){
//     this.queue = []
//     this.front=0
//     this.rear = 0
//   }
//   enqueue(v){
//     this.queue[this.rear++]=v
//   }
//   dequeue(){
//     const tmp = this.queue[this.front]
//     delete this.queue[this.front]
//     this.front++
//     return tmp
//   }
// }

//그래프  인접행렬  인접리스트

// const graph = Array.from(Array(5), () => Array(5).fill(false));
// console.log(graph);
// console.log(Array(5).fill(false));

// //트리 편의상 0을 비우고 1부터 root : 1 left : root*2 right : root*2+1

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//     this.level = 0;
//   }
// }
// class Tree {
//   constructor(node) {
//     this.root = node;
//   }
//   insert(node) {
//     let currentNode = this.root;
//     while (currentNode.left !== node && currentNode.right !== node) {
//       if (currentNode.value > node.value) {
//         //left
//         if (!currentNode.left) {
//           currentNode.left = node;
//         } else {
//           currentNode = currentNode.left;
//         }
//       } else {
//         //right
//         if (!currentNode.right) {
//           currentNode.right = node;
//         } else {
//           currentNode = currentNode.right;
//         }
//       }
//     }
//   }
// }

// const tree = new Tree(new Node(10));
// tree.insert(new Node(8));
// tree.insert(new Node(9));
// tree.insert(new Node(12));
// tree.insert(new Node(11));
// tree.insert(new Node(14));
// tree.insert(new Node(4));
// tree.insert(new Node(20));

// console.log(tree);

// class MaxHeap {
//   constructor() {
//     this.heap = [null]; //편의상 0 은 제외
//   }
//   push(value) {
//     this.heap.push(value); //넣고 계속 올리기
//     let current = this.heap.length - 1;
//     let parent = Math.floor(current / 2);

//     while (parent !== 0 && this.heap[parent] < value) {
//       const tmp = this.heap[parent];
//       this.heap[parent] = value;
//       this.heap[current] = tmp;

//       current = parent;
//       parent = Math.floor(current / 2);
//     }
//   }

//   pop() {
//     if (this.heap.length === 2) return this.heap.pop();
//     const returnV = this.heap[1];
//     this.heap[1] = this.heap.pop(); //젤 밑에거 위에 올린다음 계속 내릶

//     let current = 1;
//     let left = 2;
//     let right = 3;
//     while (
//       this.heap[current] < this.heap[left] ||
//       this.heap[current] < this.heap[right]
//     ) {
//       if (this.heap[left] < this.heap[right]) {
//         const tmp = this.heap[current];
//         this.heap[current] = this.heap[right];
//         this.heap[right] = tmp;
//         current = right;
//       } else {
//         const tmp = this.heap[current];
//         this.heap[current] = this.heap[left];
//         this.heap[left] = tmp;
//         current = left;
//       }

//       left = current * 2;
//       right = current * 2 + 1;
//     }
//     return returnV;
//   }
// }

// const maxheap = new MaxHeap();
// maxheap.push(10);
// maxheap.push(7);
// maxheap.push(5);
// maxheap.push(20);
// maxheap.push(40);
// maxheap.push(14);
// console.log("maxheap: ", maxheap);
// console.log(maxheap.pop());
// console.log(maxheap.pop());
// console.log(maxheap.pop());
// console.log("maxheap: ", maxheap);
// console.log(maxheap.pop());
// console.log(maxheap.pop());
// console.log(maxheap.pop());

// class Node{
//   constructor(value){
//     this.value=value
//     this.left=null
//     this.right = null
//   }
// }
// class BinaryTree{
//   constructor(){
//     this.root = null
//   }
//   insert(value){
//     if(!this.root){
//       this.root=new Node(value)
//     }else{
//       let current = this.root
//       while(current!==null){
//         if(current.value<value){
//           if(current.right===null){
//             current.right=new Node(value)
//             break
//           }
//           current=current.right
//         }else{
//           if(current.left===null){
//             current.left=new Node(value)
//             break
//           }
//           current=current.left
//         }
//       }
//     }
//   }
// }
/////////////////////////////////////////////////////////////////////////////
//시간 / 심사시간 = 심사관 당 처리 가능한 입국자 수
// function solution(n, times) {
//   // 모든 사람이 심사를 받는데 걸리는 최소 시간을 알고 싶다
//   // 정해진 시간동안 한 심사관이 몇 명을 상대할 수 있는지를 구할 수 있다(시간/심사시간): 선형시간
//   // 그리고 그 수를 더하면 정한 시간 안에 심사 가능한 최대 인원 수가 나온다
//   // 구하려는 것은 최소시간이기 때문에 그 시간을 바꿔가면서 최소 시간을 찾자
//   // 인원 수가 총 인원 수보다 작지 않은 시간 값 중 최대를 찾아내면 된다
//   // 그런데 1씩 줄여가면서 찾게 되면 선형 시간이기 때문에 총 제곱시간이 걸린다
//   // 그러니 이진탐색을 이용해서 선형로그 시간으로 줄이자

//   // 여러모로 필요하니 심사시간을 정렬해놓고 시작하자
//   const sortedTimes = times.sort((a, b) => a - b);

//   // 우선 최대로 걸리는 시간을 알아보자(이진탐색의 우측 값이 될 것이다)
//   // 가장 심사가 오래 걸리는 심사관이 모두 전담한다면 최대 시간이 걸릴 것이다
//   let right = sortedTimes[sortedTimes.length - 1] * n;
//   let left = 1; // 최소 심사시간은 1분 이상이라고 주어져 있다
//   let mid = Math.floor((left + right) / 2);

//   // 그럼 심사시간을 기준으로 이진탐색을 진행해보자
//   while (left <= right) {
//     // 이진탐색은 중간값이 구하려는 값이 맞는지 확인하는 것이므로 중간값이 총 시간이 된다
//     // 그 총 시간을 심사시간으로 나눈 값이 한 심사관이 시간 내에 심사 가능한 사람의 수다
//     // 그 수를 다 더해주면 총 심사 가능 인원 수가 나온다
//     // 첫 번째 요소도 고려해야 하므로 초기값인 0을 할당해준다
//     const count = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);

//     // 구한 인원 수가 실제 인원 수보다 크면 더 작은 값을 찾아야 한다
//     // 그러므로 중간값보다 하나 작은 값을 우측 값으로 할당한다
//     // 이 문제는 인원 수 조건을 만족하는 시간이 다수 있을 수 있고 그 중 최소값을 찾아야 한다
//     // 그래서 마지막 하나가 남을 때까지 계속 걸러야 한다
//     // 그러니 알맞은 값이 나왔을 때도 범위를 더 줄여줘서 값이 하나로 좁혀져야 한다
//     // 그 값이 최소값일 때는 우측 값이 좌측 값보다 작아져서 반복이 끝나게 되고
//     // 그 값이 최소값보다 작을 때는 좌측 값이 우측 값보다 커져서 반복이 끝나게 된다
//     // 그리고 좌측 값이 두 경우 모두 구하려는 값을 가지고 있다
//     if (count >= n) right = mid - 1;
//     else left = mid + 1;
//     mid = Math.floor((left + right) / 2);
//   }

//   return left;
// }

// function solution(n, edge) {
//   const graph = Array.from(Array(n + 1), () => []);

//   for (const [src, dest] of edge) {
//     graph[src].push(dest);
//     graph[dest].push(src);
//   }
//   console.log(graph);

//   const distance = Array(n + 1).fill(0);
//   distance[1] = 1;

//   //bfs
//   const queue = [1];
//   while (queue.length > 0) {
//     const src = queue.shift();
//     for (const dest of graph[src]) {
//       if (distance[dest] === 0) {
//         queue.push(dest);
//         distance[dest] = distance[src] + 1;
//       }
//     }
//     console.log("queue: ", queue);
//     console.log("distance: ", distance);
//   }
//   const max = Math.max(...distance);
//   return distance.filter((item) => item === max).length;
// }
// solution(6, [
//   [3, 6],
//   [4, 3],
//   [3, 2],
//   [1, 3],
//   [1, 2],
//   [2, 4],
//   [5, 2],
// ]);

// const arr = [];
// console.log(arr[arr.length - 1] < 4);

// const isFrime = (num) => {
//   const prime = [false, false, ...Array(num - 1).fill(true)];

//   for (let i = 2; i * i <= num; i++) {
//     if (prime[i]) {
//       for (let j = i * 2; j <= num; j += i) {
//         prime[j] = false;
//       }
//     }
//   }
//   return prime
//     .map((item, index) => {
//       if (item) {
//         return index;
//       } else {
//         return 0;
//       }
//     })
//     .filter((item) => item !== 0);
// };
// console.log(isFrime(1000));

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class Tree {
//   constructor(node) {
//     this.root = node;
//   }

//   preorder(currentNode) {
//     // 전위 순회
//     console.log(currentNode.value);
//     if (currentNode.left) this.preorder(currentNode.left);
//     if (currentNode.right) this.preorder(currentNode.right);
//   }

//   inorder(currentNode) {
//     // 중위 순회
//     if (currentNode.left) this.inorder(currentNode.left);
//     console.log(currentNode.value);
//     if (currentNode.right) this.inorder(currentNode.right);
//   }

//   postorder(currentNode) {
//     // 후위 순회
//     if (currentNode.left) this.postorder(currentNode.left);
//     if (currentNode.right) this.postorder(currentNode.right);
//     console.log(currentNode.value);
//   }
// }

// const tree = new Tree(new Node(9));
// tree.root.left = new Node(3);
// tree.root.right = new Node(8);
// tree.root.left.left = new Node(2);
// tree.root.left.right = new Node(5);
// tree.root.right.right = new Node(7);
// tree.root.left.right.right = new Node(4);

// tree.preorder(tree.root);
// console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
// tree.inorder(tree.root);
// console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
// tree.postorder(tree.root);

//     9
//   3   8
// 2   5   7
//       4

// class MinHeap {
//   constructor() {
//     this.heap = [null];
//   }
//   push(value) {
//     this.heap.push(value);
//     let current = this.heap.length - 1;
//     let parent = Math.floor(current / 2);

//     while (parent !== 0 && this.heap[parent].cost > value.cost) {
//       this.swap(parent, current);
//       current = parent;
//       parent = Math.floor(current / 2);
//     }
//   }
//   pop() {
//     if (this.isEmpty()) return;
//     if (this.heap.length === 2) return this.heap.pop();

//     const returnValue = this.heap[1];
//     this.heap[1] = this.heap.pop();

//     let current = 1;
//     let left = current * 2;
//     let right = current * 2 + 1;
//     while (
//       (this.heap[left] && this.heap[current].cost > this.heap[left].cost) ||
//       (this.heap[right] && this.heap[current].cost > this.heap[right].cost)
//     ) {
//       if (this.heap[left] === undefined) {
//         this.swap(current, right);
//       } else if (this.heap[right] === undefined) {
//         this.swap(current, left);
//       } else if (this.heap[left].cost > this.heap[right].cost) {
//         this.swap(current, right);
//       } else if (this.heap[left].cost <= this.heap[right].cost) {
//         this.swap(current, left);
//       }
//       left = current * 2;
//       right = current * 2 + 1;
//     }
//     return returnValue;
//   }
//   isEmpty() {
//     return this.heap.length === 1;
//   }
//   swap(a, b) {
//     [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
//     [a, b] = [b, a];
//   }
// }

// const dijkstra = (road, N) => {
//   const heap = new MinHeap();
//   heap.push({ node: 1, cost: 0 });

//   const dist = Array(N + 1).fill(Infinity);
//   dist[1] = 0;

//   while (!heap.isEmpty()) {
//     const { node: current, cost: currentCost } = heap.pop();

//     for (const [src, dest, cost] of road) {
//       const nextCost = cost + currentCost;
//       if (src === current && nextCost < dist[dest]) {
//         dist[dest] = nextCost;
//         heap.push({ node: dest, cost: nextCost });
//       } else if (dest === current && nextCost < dist[src]) {
//         dist[src] = nextCost;
//         heap.push({ node: src, cost: nextCost });
//       }
//     }
//   }
//   return dist;
// };

// const solution = (N, road, K) => {
//   const dist = dijkstra(road, N);
//   console.log(dist);
// };

// solution(
//   13,
//   [
//     [1, 2, 1],
//     [1, 3, 2],
//     [2, 3, 2],
//     [3, 4, 3],
//     [3, 5, 2],
//     [3, 5, 3],
//     [5, 6, 1],
//     [1, 7, 2],
//     [1, 8, 3],
//     [1, 9, 4],
//     [1, 10, 5],
//     [1, 11, 1],
//     [1, 12, 3],
//     [1, 13, 4],
//   ],
//   4
// );

// function find(parent, x) {
//   if (parent[x] === x) {
//     return x;
//   }

//   return (parent[x] = find(parent, parent[x]));
// }

// function union(parent, a, b) {
//   a = find(parent, a);
//   b = find(parent, b);
//   if (a < b) {
//     parent[b] = a;
//   } else {
//     parent[a] = b;
//   }
// }

// function compare(parent, a, b) {
//   a = find(parent, a);
//   b = find(parent, b);
//   return a === b;
// }

// function solution(n, costs) {
//   let answer = 0;
//   const sortedCosts = costs.sort((a, b) => a[2] - b[2]);
//   const parent = Array.from({ length: n }, (_, i) => i);

//   for (const [a, b, cost] of sortedCosts) {
//     if (!compare(parent, a, b)) {
//       answer += cost;
//       union(parent, a, b);
//     }
//   }

//   return answer;
// }
// solution(4, [
//   [0, 1, 1],
//   [0, 2, 2],
//   [1, 2, 5],
//   [1, 3, 1],
//   [2, 3, 8],
// ]);

// function solution(gems) {
//   const sum = [...new Set(gems)].length

//   let firstPoint = 0
//   let secondPoint = 0
//   let count = []
//   let section = 0

//   while(firstPoint<gems.length&&secondPoint<gems.length){
//       section = [...new Set(gems.slice(firstPoint,secondPoint+1))].length
//       if(section < sum){
//           secondPoint++
//       }else if(section===sum){
//           if(count.length>0){
//               if(count[2]>secondPoint-firstPoint){
//                   count=[firstPoint+1,secondPoint+1,secondPoint-firstPoint]
//               }
//               if(count[2]===secondPoint-firstPoint){
//                   if(count[0]>firstPoint){
//                       count=[firstPoint+1,secondPoint+1,secondPoint-firstPoint]
//                   }
//               }
//           }else{
//               count=[firstPoint+1,secondPoint+1,secondPoint-firstPoint]
//           }
//           firstPoint+=1
//       }
//   }

//   return [count[0],count[1]]
// }

// function solution(gems) {
//   let answer = [0, gems.length]; // 가장 긴 길이로 초기화합니다.
//   let start = 0; // 첫 번째 포인터
//   let end = 0; // 두 번째 포인터

//   const gemKinds = new Set(gems).size; // 겹치지 않는 보석의 갯수
//   const collect = new Map(); // 보석을 담아둘 변수
//   collect.set(gems[0], 1); // 시작하면서 첫 보석을 먼저 담는다

//   while (start < gems.length && end < gems.length) { // 두 포인터가 끝에 도달한다면 종료
//     if (collect.size === gemKinds) { // 모든 보석을 구매할 수 있다면
//       if (end - start < answer[1] - answer[0]) { // 구간을 갱신
//         answer = [start + 1, end + 1];
//       }

//       collect.set(gems[start], collect.get(gems[start]) - 1); // 첫 번째 포인터에 해당하는 보석을 한 개 줄인다.

//       if (collect.get(gems[start]) === 0) { // 만약 0이 됐다면 목록에서 제거된다.
//         collect.delete(gems[start]);
//       }
//       start += 1; // 첫 번째 포인터 증가
//     } else { // 모든 보석을 구매할 수 없다면
//       end += 1; // 두 번째 포인터 증가
//       collect.set(gems[end], 1 + (collect.get(gems[end]) || 0)); // 보석을 추가한다.
//     }
//   }

//   return answer; // 결과 반환
// }

// var answer = 0;
// const BFS = (visited, n, Row, count) => {
//   console.log(visited);
//   if (count === 4) {
//     answer++;
//     return;
//   }
//   for (let column = 0; column < n; column++) {
//     if (!visited[Row][column]) {
//       visited[Row][column] = true;
//       for (let i = 0; i < n; i++) {
//         visited[i][column] = true;
//         if (Row + i !== n && column + i !== n) {
//           visited[Row + i][column + i] = true;
//         } else if (Row + i !== n && column !== 0) {
//           visited[Row + i][column - i] = true;
//         } else if (Row !== 0 && column + i !== n) {
//           visited[Row - i][column + i] = true;
//         } else if (Row !== 0 && column !== 0) {
//           visited[Row - i][column - i] = true;
//         }
//       }
//       BFS(visited, n, Row + 1, count + 1);
//       for (let i = 0; i < n; i++) {
//         visited[i][column] = false;
//         if (Row + i !== n && column + i !== n) {
//           visited[Row + i][column + i] = false;
//         } else if (Row + i !== n && column !== 0) {
//           visited[Row + i][column - i] = false;
//         } else if (Row !== 0 && column + i !== n) {
//           visited[Row - i][column + i] = false;
//         } else if (Row !== 0 && column !== 0) {
//           visited[Row - i][column - i] = false;
//         }
//       }
//     }
//   }
//   return;
// };
// function solution(n) {
//   //무조건 각 줄에 한개씩
//   const visited = Array(n).fill(Array(n).fill(false));
//   BFS(visited, n, 0, 0);
// }
// solution(4);

//////////////////////////front와 rear로 탐색 => 선형큐도 만들 수 있다
// class Queue {
//   constructor() {
//     this.queue = [];
//     this.front = 0;
//     this.rear = 0;
//   }
//   enqueue(value) {
//     this.queue[this.rear++] = value;
//   }
//   dequeue() {
//     const returnValue = this.queue[this.front];
//     delete this.queue[this.front];
//     this.front++;
//     return returnValue;
//   }
//   isEmpty() {
//     return this.front === this.rear;
//   }
//   isSize() {
//     return this.rear - this.front;
//   }
// }

// const solution = (p, l) => {
//   const queue = new Queue();
//   let count = 0;

//   p.forEach((item, index) => {
//     queue.enqueue([item, index]);
//   });
//   p.sort((a, b) => a - b);

//   while (true) {
//     const cur = queue.dequeue();

//     if (cur[0] === p[p.length - 1]) {
//       count++;
//       p.pop();
//       if (cur[1] === l) {
//         break;
//       }
//     } else {
//       queue.enqueue(cur);
//     }
//   }

//   return count;
// };
// console.log(solution([2, 1, 3, 2], 2));

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }
//   append(value) {
//     const curNode = new Node(value);
//     if (this.head === null) {
//       this.head = curNode;
//       this.tail = curNode;
//     } else {
//       this.tail.next = curNode;
//       this.tail = curNode;
//     }
//   }
//   remove(value) {
//     let curNode = this.head;
//     if (curNode.value === value) {
//       //맨 앞일 경우 헤드랑 연결끊기
//       this.head = curNode.next;
//     }
//     while (curNode.next.value !== value) {
//       if (curNode.next.next === null) {
//         return false;
//       }
//       curNode = curNode.next;
//     }
//     if (curNode.next.next === null) {
//       this.tail = curNode;
//     }
//     curNode.next = curNode.next.next; //연결끊기
//   }
//   print() {
//     let curNode = this.head;
//     while (curNode.next !== null) {
//       console.log(curNode.value);
//       curNode = curNode.next;
//     }
//     console.log(curNode.value);
//   }
// }

// const linkedList = new LinkedList();
// linkedList.append(10);
// linkedList.append(9);
// linkedList.append(8);
// linkedList.append(7);
// linkedList.append(6);
// console.log(linkedList);
// linkedList.remove(6);
// console.log(linkedList);
// linkedList.remove(10);
// linkedList.print();

//장르순
//장르내 재생순
//고유번호순 index
// const solution = (genres, plays) => {
//   const genreMap = new Map();

//   genres.forEach((genre, index) => {
//     const _play = plays[index];
//     const data = genreMap.get(genre) || { total: 0, play: [] };
//     genreMap.set(genre, {
//       total: data.total + _play,
//       play: [...data.play, { index, _play }]
//         .sort((a, b) => b._play - a._play)
//         .slice(0, 2),
//     });
//   });
//   console.log(
//     [...genreMap.entries()]
//       .sort((a, b) => b[1].total - a[1].total)
//       .flatMap((item, index) => item[1].play)
//       .map((item) => item.index)
//   );
// };
// solution(
//   ["classic", "pop", "classic", "classic", "pop"],
//   [500, 600, 150, 800, 2500]
// );

// class MinHeap {
//   constructor() {
//     this.heap = [null];
//   }
//   push(value) {
//     this.heap.push(value);
//     if (this.isEmpty()) return;

//     let cur = this.heap.length - 1;
//     let parent = Math.floor(cur / 2);
//     while (parent !== 0 && this.heap[cur] > this.heap[parent]) {
//       this.swap(parent, cur);
//       cur = parent;
//       parent = Math.floor(cur / 2);
//     }
//   }
//   pop() {
//     const returnValue = this.heap[1];
//     this.heap[1] = this.heap.pop();
//     let cur = 1;
//     let left = 2;
//     let right = 3;
//     while (
//       (this.heap[left] && this.heap[left] > this.heap[cur]) ||
//       (this.heap[right] && this.heap[right] > this.heap[cur])
//     ) {
//       if (!this.heap[left]) {
//         this.swap(right, cur);
//         cur = right;
//       } else if (!this.heap[right]) {
//         this.swap(left, cur);
//         cur = left;
//       } else if (this.heap[left] > this.heap[right]) {
//         this.swap(left, cur);
//         cur = left;
//       } else if (this.heap[right] >= this.heap[left]) {
//         this.swap(right, cur);
//         cur = right;
//       }
//       left = cur * 2;
//       right = cur * 2 + 1;
//     }
//     return returnValue;
//   }
//   isEmpty() {
//     return this.heap.length === 1;
//   }
//   swap(a, b) {
//     [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
//   }
// }

// const solution = (N, works) => {
//   const minHeap = new MinHeap();
//   works.forEach((item) => minHeap.push(item));
//   if (N >= works.reduce((acc, cur) => acc + cur, 0)) {
//     return 0;
//   }

//   while (N > 0 && !minHeap.isEmpty()) {
//     minHeap.push(minHeap.pop() - 1);
//     N--;
//   }

//   return minHeap.heap.reduce((acc, cur) => acc + cur ** 2, 0);
// };
// console.log("solution(4, [4, 3, 3]) : ", solution(4, [4, 3, 3]));

// class Node {
//   constructor(value) {
//     this.key = value; //합쳐진 문자
//     this.child = new Map(); //{추가된 char : Node}  =>next의 느낌인데 char값이 있어야 받을 수 있다.
//   }
// }
// class Trie {
//   constructor() {
//     this.root = new Node();
//   }
//   insert(string) {
//     let current = this.root;

//     for (const char of string) {
//       if (!current.child.has(char)) {
//         current.child.set(char, new Node(current.key + char));
//       }
//       current = current.child.get(char);
//     }
//   }
//   has(string) {
//     let current = this.root;
//     for (const char of string) {
//       if (!current.child.has(char)) {
//         return false;
//       }
//       current = current.child.get(char);
//     }
//     return true;
//   }
// }

// const trie = new Trie();
// trie.insert("has");
// console.log(trie);
// console.log('trie.has("ha");: ', trie.has("ha"));

// class Node {
//   constructor(str) {
//     this.value = str;
//     this.count = 0;
//     this.child = new Map();
//   }
// }
// class Trie {
//   constructor() {
//     this.root = new Node();
//   }
//   insert(string) {
//     let cur = this.root;

//     for (const char of string) {
//       if (!cur.child.has(char)) {
//         cur.child.set(char, new Node(cur.value ? cur.value + char : "" + char));
//       }
//       cur = cur.child.get(char);
//       cur.count += 1;
//     }
//   }
// }

// const solution = (words) => {
//   let answer = 0;
//   const trie = new Trie();
//   words.forEach((item) => trie.insert(item));

//   for (const string of words) {
//     let cur = trie.root;
//     for (const char of string) {
//       if (cur.child.has(char)) {
//         if (cur.count === 1) {
//           break;
//         }
//         answer += 1;
//         cur = cur.child.get(char);
//       }
//     }
//   }
//   return answer;
// };
// console.log(
//   'solution(["word", "war", "warrior", "world"]): ',
//   solution(["word", "war", "warrior", "world"])
// );

// const BinarySearch = (arr, value) => {
//   let left = 0;
//   let right = arr.length - 1;
//   let mid = Math.floor((left + right) / 2);
//   while (left < right) {
//     if (arr[mid] === value) {
//       return mid;
//     }
//     if (arr[mid] < value) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//     mid = Math.floor((left + right) / 2);
//   }

//   return -1;
// };

//더해서 최소값을 찾기 => 케이스양이 너무 커서 불가능
//시간 테이블을 쭉 나열해서 그중에 맞는 시간을 찾기
//=> 시간에 따른 인원수 파악 => 총 시간 / 걸리는 시간 = 인원

// const solution = (n, times) => {
//   const sortTime = times.sort((a, b) => a - b);
//   let left = 1;
//   let right = sortTime[sortTime.length - 1] * n; //최악
//   let mid = Math.floor((left + right) / 2);
//   let answer = right;

//   while (left <= right) {
//     let person = 0;
//     for (const time of sortTime) {
//       person += Math.floor(mid / time);
//     }
//     if (person === n) {
//       //최소값을 구해야 하니 같을경우 mid값을 줄여나간다
//       answer = Math.min(answer, mid);
//       right = mid - 1;
//     } else if (person < n) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }

//     mid = Math.floor((left + right) / 2);
//   }
//   return answer;
// };
// console.log("solution(6,[7,10]): ", solution(6, [7, 10]));

// const FindPrime = (num) => {
//   const prime = [false, false, ...Array(num - 1).fill(true)];
//   for (let i = 2; i * i < num; i++) {
//     if (prime[i]) {
//       for (let j = i * 2; j < num; j += i) {
//         prime[j] = false;
//       }
//     }
//   }
//   console.log(prime);
// };

// console.log("FindPrime(100): ", FindPrime(100));

//그래프 문제 => 인립 리스트

// class Queue {
//   constructor() {
//     this.queue = [];
//     this.front = 0;
//     this.rear = 0;
//   }
//   push(value) {
//     this.queue[this.rear++] = value;
//   }
//   pop() {
//     const returnValue = this.queue[this.front];
//     delete this.queue[this.front];
//     this.front += 1;
//     return returnValue;
//   }
//   isEmpty() {
//     return this.front === this.rear;
//   }
// }

// const solution = (n, vertex) => {
//   const graph = Array.from(Array(n + 1), () => []);
//   for (const [src, dest] of vertex) {
//     graph[src].push(dest);
//     graph[dest].push(src);
//     //쌍방통행
//   }
//   const distance = Array(n + 1).fill(0);
//   distance[1] = 1;
//   const queue = new Queue();
//   queue.push(1);

//   while (!queue.isEmpty()) {
//     const cur = queue.pop();
//     for (const dest of graph[cur]) {
//       if (distance[dest] === 0) {
//         queue.push(dest);
//         distance[dest] = distance[cur] + 1;
//       }
//     }
//   }
//   console.log(distance);
// };
// solution(6, [
//   [3, 6],
//   [4, 3],
//   [3, 2],
//   [1, 3],
//   [1, 2],
//   [2, 4],
//   [5, 2],
// ]);

// class MinHeap {
//   constructor() {
//     this.heap = [null];
//   }
//   push(value) {
//     this.heap.push(value);
//     if (this.heap.length === 2) return;

//     let cur = this.heap.length - 1;
//     let parent = Math.floor(cur / 2);

//     while (parent !== 0 && this.heap[parent][1] > this.heap[cur][1]) {
//       this.swap(parent, cur);
//       cur = parent;

//       parent = Math.floor(cur / 2);
//     }
//   }
//   pop() {
//     if (this.heap.length === 1) return;
//     if (this.heap.length === 2) return this.heap.pop();

//     const returnValue = this.heap[1];
//     this.heap[1] = this.heap.pop();

//     let cur = 1;
//     let left = 2;
//     let right = 3;
//     while (
//       (this.heap[left] && this.heap[left][1] < this.heap[cur][1]) ||
//       (this.heap[right] && this.heap[right][1] < this.heap[cur][1])
//     ) {
//       if (!this.heap[left]) {
//         this.swap(right, cur);
//         cur = right;
//       } else if (!this.heap[right]) {
//         this.swap(left, cur);
//         cur = left;
//       } else if (this.heap[left][1] <= this.heap[right][1]) {
//         this.swap(left, cur);
//         cur = left;
//       } else if (this.heap[left][1] > this.heap[right][1]) {
//         this.swap(right, cur);
//         cur = right;
//       }
//       left = cur * 2;
//       right = cur * 2 + 1;
//     }
//     return returnValue;
//   }
//   swap(a, b) {
//     [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
//   }
// }

// const solution = (N, road, K) => {
//   const cost = Array(N + 1).fill(Infinity);
//   const minHeap = new MinHeap();
//   minHeap.push([1, 0]);
//   cost[1] = 0;

//   while (minHeap.heap.length !== 1) {
//     const [cur, curcost] = minHeap.pop();
//     for (const [src, dest, _cost] of road) {
//       //이게 visited의 역할
//       const nextCost = curcost + _cost;
//       if (src === cur && cost[dest] > nextCost) {
//         cost[dest] = nextCost;
//         minHeap.push([dest, nextCost]);
//       } else if (dest === cur && cost[src] > nextCost) {
//         cost[src] = nextCost;
//         minHeap.push([src, nextCost]);
//       }
//     }
//   }
//   return cost.filter((item) => item <= K).length;
// };

// console.log(
//   solution(
//     6,
//     [
//       [1, 2, 1],
//       [1, 3, 2],
//       [2, 3, 2],
//       [3, 4, 3],
//       [3, 5, 2],
//       [3, 5, 3],
//       [5, 6, 1],
//     ],
//     4
//   )
// );

// class MinHeap{
//   constructor(){
//       this.heap = [null]
//   }
//   push(value){
//       this.heap.push(value)
//       if(this.heap.length===2) return

//       let cur = this.heap.length-1
//       let parent = Math.floor(cur/2)
//       while(parent!==0&&this.heap[parent][1]>this.heap[cur][1]){
//           this.swap(parent,cur)
//           cur =parent
//           parent=Math.floor(cur/2)
//       }
//   }
//   pop(){
//       if(this.isEmpty()) return
//       if(this.heap.length===2) return this.heap.pop()

//       const returnValue = this.heap[1]
//       this.heap[1]=this.heap.pop()

//       let cur =1
//       let left = 2
//       let right =3

//       while (
//       (this.heap[left] && this.heap[left][1] < this.heap[cur][1]) ||
//       (this.heap[right] && this.heap[right][1] < this.heap[cur][1])
//       ) {
//               if (!this.heap[left]) {
//               this.swap(right, cur);
//               cur = right;
//             } else if (!this.heap[right]) {
//               this.swap(left, cur);
//               cur = left;
//             } else if (this.heap[left][1] <= this.heap[right][1]) {
//               this.swap(left, cur);
//               cur = left;
//             } else if (this.heap[left][1] > this.heap[right][1]) {
//               this.swap(right, cur);
//               cur = right;
//             }
//             left = cur * 2;
//             right = cur * 2 + 1;
//       }
//       return returnValue;
//   }
//   swap(a,b){
//       [this.heap[a],this.heap[b]]=[this.heap[b],this.heap[a]]
//   }
//   isEmpty(){
//       return this.heap.length===1
//   }
// }
// const All=(arr)=>{
//   for(const i of arr){
//       if(!i){
//           return false
//       }
//   }
//   return true
// }

// function solution(jobs) {
//   let curTime = 0
//   let answer = 0
//   const heap = new MinHeap()
//   const Fast = jobs.sort((a,b)=>a[0]-b[0])
//   const isDo = Array(jobs.length).fill(false)
//   let count = 0

//   while(!All(isDo)){
//       console.log(isDo)
//       Fast.forEach((item,index)=>{
//           if(item[0]<=curTime){
//               heap.push([item[0],item[1],index])
//           }
//       })
//       if(heap.isEmpty()){
//           curTime+=1
//       }else{
//           const [s,doTime,index] = heap.pop()
//           curTime += doTime
//           isDo[index]=true
//           count++
//           answer += curTime-s
//       }
//   }
//   return answer/jobs.length
// }
// solution([[0, 3], [1, 9], [2, 6]])

// const oper = [
//   [1, 0],
//   [0, 1],
//   [-1, 0],
//   [0, -1],
// ];
// const result = [];

// const sum = (arr1, arr2) => {
//   return [arr1[0] + arr2[0], arr1[1] + arr2[1]];
// };

// const dis = (arr) => {
//   let value = 0;
//   arr.forEach((item) => item.forEach((v) => v === 1 && value++));
//   return value;
// };

// const Bfs = (map, visited, l) => {
//   if (l === [map.length - 1, map[0].length - 1]) {
//     result.push(dis(visited));
//     return;
//   }
//   for (const op of oper) {
//     const cur = sum(l, op);
//     const copy = [];
//     visited.forEach((item) => copy.push([...item]));
//     if (
//       cur[0] >= 0 &&
//       cur[0] < map.length &&
//       cur[1] >= 0 &&
//       cur[1] < map[0].length
//     ) {
//       if (visited[cur[0]][cur[1]] === 0 && map[cur[0]][cur[1]] === 1) {
//         copy[cur[0]][cur[1]] = 1;
//         Bfs(map, copy, cur);
//       }
//     }
//   }
//   return;
// };
// function solution(maps) {
//   const row = maps.length;
//   const col = maps[0].length;
//   const visited = Array.from(Array(row), () =>
//     Array.from(Array(col), (_, i) => 0)
//   );
//   visited[0][0] = 1;
//   let location = [0, 0];

//   if (maps[row - 2][col - 1] === 0 && maps[row - 1][col - 2] === 0) {
//     return -1;
//   }
//   Bfs(maps, visited, location);
//   console.log(result);
// }
// solution([
//   [1, 0, 1, 1, 1],
//   [1, 0, 1, 0, 1],
//   [1, 0, 1, 1, 1],
//   [1, 1, 1, 0, 1],
//   [0, 0, 0, 0, 1],
// ]);

// class Queue{
//   constructor(){
//       this.queue=[]
//       this.front = 0
//       this.rear = 0
//   }
//   push(v){
//       this.queue[this.rear++]=v
//   }
//   pop(){
//       const rev = this.queue[this.front]
//       delete this.queue[this.front]
//       this.front++
//       return rev
//   }
//   isEmpty(){
//       return this.front===this.rear
//   }
// }
// function solution(maps) {
//   if(maps[maps.length-1][maps[0].length-2]===0&&maps[maps.length-2][maps[0].length-1]===0){
//       return -1
//   }
//   const visited = Array.from(Array(maps.length),()=>Array(maps[0].length).fill(0))
//   const queue = new Queue()
//   visited[0][0]=1

//   queue.push([0,0])
//   const col = [1,0,-1,0]
//   const row = [0,1,0,-1]

//   while(!queue.isEmpty()){
//       const [x,y]=queue.pop()
//       for(let i =0;i<4;i++){
//           const mx = x+col[i]
//           const my = y+row[i]

//           if(mx>=0&&mx<maps[0].length&&my>=0&&my<maps.length){
//               if(visited[mx][my]===0&&maps[mx][my]===1){
//                   visited[mx][my]=visited[x][y]+1
//                   queue.push([mx,my])
//               }
//           }
//       }
//   }
//   console.log(visited)
//   return visited[maps.length-1][maps[0].length-1]
// }

// const a = "abcde";
// console.log([...a].entries());
// for (const [index, l] of [...a].entries()) {
//   console.log("[index,l]: ", [index, l]);
// }

// class Node {
//   constructor(value = "") {
//     this.value = value;
//     this.child = new Map();
//   }
// }
// class Trie {
//   constructor() {
//     this.root = new Node();
//   }
//   insert(string) {
//     let cur = this.root;

//     for (const char of string) {
//       if (!cur.child.has(char)) {
//         cur.child.set(char, new Node(cur.value + char));
//       }
//       cur = cur.child.get(char);
//     }
//   }
//   has(string) {
//     let cur = this.root;

//     for (const char of string) {
//       if (!cur.child.has(char)) {
//         return false;
//       }
//       cur = cur.child.get(char);
//     }
//     return true;
//   }
//   display() {
//     let cur = this.root;

//     for (const key in cur.child) {
//       console.log(cur.child[key]);
//     }
//   }
// }

// const trie = new Trie();
// trie.insert("hello");
// trie.insert("hi");
// trie.insert("hey");

// 0. 상,왼,왼대    1. 상 오 오대   2. 하 왼 왼하   3. 하 오 오하
// const Case = {
//   0: [
//     [-1, 0],
//     [0, -1],
//     [-1, -1],
//   ],
//   1: [
//     [-1, 0],
//     [0, 1],
//     [-1, 1],
//   ],
//   2: [
//     [1, 0],
//     [0, -1],
//     [1, -1],
//   ],
//   3: [
//     [1, 0],
//     [0, 1],
//     [1, 1],
//   ],
// };
// const cal = (a, b) => {
//   return [a[0] + b[0], a[1] + b[1]];
// };
// //1. 찾기
// const find = (l, map, info) => {
//   for (let op = 0; op < 4; op++) {
//     let is = [];
//     const arr = Case[op + ""];
//     for (const oper of arr) {
//       const [my, mx] = cal(l, oper);
//       if (my >= 0 && my < map.length && mx >= 0 && mx < map[0].length) {
//         if (map[l[0]][l[1]] !== map[my][mx]) {
//           break;
//         } else {
//           is.push([my, mx]);
//         }
//       }
//     }
//     if (is.length === 3) {
//       info.add(l.join(""));
//       is.forEach((item) => info.add(item.join("")));
//     }
//   }
// };
// //2. 지운 곳 채우기   ("0"으로 지우고 그 자리와 맞바꾸기)(내려오는 형태이니 row만 신경쓰기 col고정)
// //지운곳 row최소 찾고 [지워진 높이, 그 위에 있는 개수(적을경우와 많은경우)
// const remove = (arr, map) => {
//   arr.forEach((item) => {
//     const [y, x] = [...item];
//     map[y][x] = 0;
//   });
//   for (let i = 0; i < 5; i++) {
//     for (let row = 0; row < map.length - 1; row++) {
//       for (let col = 0; col < map[0].length; col++) {
//         if (map[row + 1][col] === 0) {
//           map[row + 1][col] = map[row][col];
//           map[row][col] = 0;
//         }
//       }
//     }
//   }
// };
// //인덱스 끝이 젤 아래
// function solution(row, col, board) {
//   let location = [row - 1, col - 1];
//   let B = board.map((item) => item.split(""));
//   let answer = 0;
//   let Info = new Set();
//   while (true) {
//     if (location[0] === 0 && location[1] === 0) {
//       if (Info.size === 0) {
//         return answer;
//       }
//       answer += Info.size;
//       console.log(Info);
//       remove(Info, B);
//       location = [row - 1, col - 1];
//       Info.clear();
//     }
//     if (B[location[0]][location[1]]) {
//       //빈곳이 아닐때
//       find(location, B, Info);
//     }

//     //안지워졌을 경우  //지워지면 그 자리에서 다시 탐색
//     location[1]--; //왼으로 이동
//     if (location[1] === -1) {
//       //다했으면 아래칸으로 가서 다시 반복
//       location[1] = col - 1;
//       location[0] -= 1;
//     }
//   }
// }

// console.log(
//   'solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]): ',
//   solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"])
// );

// class Queue{
//   constructor(){
//       this.queue=[]
//       this.front =0
//       this.rear = 0
//   }
//   push(v){
//       this.queue[this.rear++]=v
//   }
//   pop(){
//       const r = this.queue[this.front]
//       delete this.queue[this.front]
//       this.front+=1
//       return r
//   }
//   isEmpty(){
//       return this.front===this.rear
//   }
// }
// function solution(land) {
//   const visited = Array.from(Array(land.length),()=>Array(4).fill(0))
//   const queue = new Queue()
//   queue.push([0,-1,0])
//   //[cost,col,row]
//   while(!queue.isEmpty()){
//       const [cost,prev,row] = queue.pop()
//       if(row!==land.length){
//           land[row].forEach((item,col)=>{
//           if(prev!==col) {
//               const nextCost = cost+item
//               queue.push([cost+item,col,row+1])
//               visited[row][col]=visited[row][col]?Math.max(visited[row][col],nextCost):nextCost
//           }
//       })
//       }
//   }
//   console.log(visited)
//   return Math.max(...visited[land.length-1])
// }

// const result = [];
// class Trie {
//   constructor() {
//     this.root = new Map();
//     this.max = 0;
//   }
//   init(string) {
//     let cur = this.root;
//     for (const char of string) {
//       const index = char.charCodeAt() - 64;
//       cur.set(char, index);
//       this.max = index;
//     }
//   }
//   insert(string) {
//     this.root.set(string, ++this.max);
//   }
// }
// function solution(msg) {
//   const trie = new Trie();
//   const answer = [];
//   let s = msg.split("");
//   let step = 1;
//   trie.init("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

//   while (true) {
//     if (s.length === 1) {
//       answer.push(trie.root.get(s.join("")));
//       break;
//     }
//     const cur = s.slice(0, step).join("");
//     const next = s.slice(0, step + 1).join("");
//     if (trie.root.has(cur)) {
//       if (trie.root.has(next)) {
//         step++;
//       } else {
//         trie.insert(next);
//         answer.push(trie.root.get(cur));
//         s = s.slice(step);
//         step = 1;
//       }
//     } else {
//       step++;
//     }
//   }
//   return answer;
// }
// solution("KAKAO");

// function solution(arr) {
//   for (let row = 1; row < arr.length; row++) {
//     for (let col = 1; col < arr[0].length; col++) {
//       const Up = arr[row - 1][col];
//       const Left = arr[row][col - 1];
//       const Cross = arr[row - 1][col - 1];
//       const Cur = arr[row][col];
//       if (Cur > 0 && Up > 0 && Left > 0 && Cross > 0) {
//         arr[row][col] = Math.min(Up, Left, Cross) + 1;
//       } else if (Cur < 1 && Up < 1 && Left < 1 && Cross < 1) {
//         arr[row][col] = Math.max(Up, Left, Cross) - 1;
//       }
//     }
//   }
//   console.log(arr);
// }
// solution([
//   [1, 1, 1, 1, 1, 1, 1, 1],
//   [0, 1, 1, 1, 1, 1, 1, 1],
//   [0, 0, 0, 0, 1, 1, 1, 1],
//   [0, 1, 0, 0, 1, 1, 1, 1],
//   [0, 0, 0, 0, 0, 0, 1, 1],
//   [0, 0, 0, 0, 0, 0, 0, 1],
//   [0, 0, 0, 0, 1, 0, 0, 1],
//   [0, 0, 0, 0, 1, 1, 1, 1],
// ]);

// class Node {
//   constructor(v) {
//     this.value = v;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }
//   append(v) {
//     const newNode = new Node(v);
//     if (this.head === null) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//   }
//   remove(v) {
//     let prevNode = this.head;
//     if (prevNode.value === v) {
//       this.head = prevNode.next;
//       return;
//     }
//     while (prevNode.next.value !== v) {
//       prevNode = prevNode.next;
//     }
//     if (prevNode.next !== null) {
//       if (prevNode.next.next === null) this.tail = prevNode;
//       prevNode.next = prevNode.next.next;
//     }
//   }
//   find(v) {
//     let curNode = this.head;
//     while (curNode.value !== v) {
//       curNode = curNode.next;
//     }
//     return curNode;
//   }
//   insert(node, v) {
//     const newNode = new Node(v);
//     newNode.next = node.next;
//     node.next = newNode;
//   }
//   display() {
//     let curNode = this.head;
//     while (curNode !== null) {
//       console.log(curNode.value);
//       curNode = curNode.next;
//     }
//   }
// }

// const hash = new Map();
// hash.set("me", 1);
// hash.set("you", 2);
// console.log(hash);
// console.log(hash.values());
// console.log(...hash.keys());
// console.log(hash.entries()); //배열로줌
// console.log(hash.has("me"));

// class Heap {
//   constructor() {
//     this.heap = [null];
//   }
//   push(v) {
//     this.heap.push(v);
//     if (this.heap.length === 2) return;
//     let cur = this.heap.length - 1;
//     let parent = Math.floor(cur / 2);

//     while (parent !== 0 && this.heap[parent] < v) {
//       const tmp = this.heap[parent];
//       this.heap[parent] = v;
//       this.heap[cur] = tmp;

//       cur = parent;
//       parent = Math.floor(cur / 2);
//     }
//   }
//   pop() {
//     const R = this.heap[1];
//     this.heap[1] = this.heap.pop();

//     let cur = 1;
//     let left = 2;
//     let right = 3;
//     while (
//       (this.heap[left] && this.heap[left] > this.heap[cur]) ||
//       (this.heap[right] && this.heap[right] > this.heap[cur])
//     ) {
//       if (!this.heap[left]) {
//         this.swap(right, cur);
//         cur = right;
//       } else if (!this.heap[right]) {
//         this.swap(left, cur);
//         cur = left;
//       } else if (this.heap[left] > this.heap[right]) {
//         this.swap(left, cur);
//         cur = left;
//       } else {
//         this.swap(right, cur);
//         cur = right;
//       }
//       left = cur * 2;
//       right = cur * 2 + 1;
//     }
//     return R;
//   }
//   swap(a, b) {
//     [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
//   }
// }
// const heap = new Heap();
// heap.push(5);
// heap.push(9);
// heap.push(3);
// heap.push(10);
// console.log(heap);
// console.log("heap.pop(): ", heap.pop());
// console.log("heap.pop(): ", heap.pop());
// console.log("heap.pop(): ", heap.pop());
// console.log("heap.pop(): ", heap.pop());

// class HashNode {
//   constructor(value = "") {
//     this.value = value;
//     this.next = new Map();
//   }
// }
// class Trie {
//   constructor() {
//     this.root = new HashNode();
//   }
//   insert(string) {
//     let cur = this.root;

//     for (const char of string) {
//       if (!cur.next.has(char)) {
//         cur.next.set(char, new HashNode(cur.value + char));
//       }
//       cur = cur.next.get(char);
//     }
//   }
// }
// const trie = new Trie();
// trie.insert("hello");
// trie.insert("hi");
// console.log(trie);

//삭제 스택
//delete로 길이 유지하고 복구할때 그 인덱스에 넣어주기
// function solution(n, k, cmd) {
//   let select = k;
//   const office = Array(n).fill(true);
//   const deleteStack = [];
//   for (const oper of cmd) {
//     const [op, x] = oper.split(" ");
//     if (op === "D") {
//       let count = x;
//       while (count !== 0) {
//         select += 1;
//         if (office[select]) count--;
//       }
//     } else if (op === "U") {
//       let count = x;
//       while (count !== 0) {
//         select -= 1;
//         if (office[select]) count--;
//       }
//     } else if (op === "C") {
//       office[select] = false;
//       deleteStack.push(select);
//       while (office[select] !== true) {
//         select++;
//       }
//     } else {
//       const Z = deleteStack.pop();
//       office[Z] = true;
//     }
//   }
//   console.log(office);
// }
// solution(8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"]);

// const combi =(arr,n)=>{
//     const result = []
//     if(n===1){
//         return arr.map(item=>[item])
//     }
//     arr.forEach((v,i,_arr)=>{
//         const rest = _arr.slice(i+1)
//         const com = combi(rest,n-1)
//         const tmp = com.map(item => [v,...item])
//         result.push(...tmp)
//     })
//     return result
// }
// const a = {}
// const b = new Set()
// const c = new Map()
// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }
// class Link{
//     constructor(){
//         this.head = null
//         this.tail = null
//     }
//     append(v){
//         const newN = new Node(v)
//         if(this.head===null){
//             this.head = newN
//             this.tail = newN
//         }else{
//             this.tail.next = newN
//             this.tail = newN
//         }
//     }
// }

// const getPrime=(n)=>{
//     const prime = [false,false, ...Array(n-1).fill(true)]
//     for(let i = 2;i*i<=n;i++){
//         if(prime[i]){
//             for(let j =i*2;j<=n;j+=i){
//                 prime[j]=false
//             }
//         }
//     }
//     return prime
// }
// const raw = "AAAAAAABBBBBCCCJDJDDDDJJJ";
// const reg = /(.)\1*/g;
// console.log(raw.match(reg));
// const result = raw.match(reg).reduce((a, b) => a + `${b.length}${b[0]}`, "");
// console.log(result);
// console.log(result);

// const a = 10.123;
// console.log(a.toFixed(0));
