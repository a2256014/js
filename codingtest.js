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

const getCombination = (arr, n) => {
  const combination = [];
  if (n === 1) {
    return arr.map((item) => [item]);
  }
  arr.forEach((item, index, array) => {
    const rest = [...array.slice(0, index), ...array.slice(index + 1)];
    const combi = getCombination(rest, n - 1);
    const attach = combi.map((v) => [item, ...v]);
    combination.push(...attach);
  });

  return combination;
};

const operation = (a, b, oper) => {
  let num;
  switch (oper) {
    case "+":
      num = a + b;
      break;

    case "-":
      num = a - b;
      break;

    case "*":
      num = a * b;
      break;
  }
  return num;
};

function solution(expression) {
  var answer = 0;
  const arr = ["+", "-", "*"];
  const oper = getCombination(arr, 3);
  const num = expression.split(/[\+\-\*]/);
  const command = expression.split(/[0-9]{1,}/).filter((item) => item !== "");
  const cnum = [];
  const result = [];

  for (let i = 0; i < command.length; i++) {
    cnum.push(num[i], command[i]);
  }
  cnum.push(num[num.length - 1]);

  for (c of oper) {
    const number = [...cnum];
    c.forEach((o) => {
      while (number.includes(o)) {
        const index = number.indexOf(o);
        number.splice(
          index - 1,
          3,
          operation(number[index - 1] / 1, number[index + 1] / 1, o)
        );
      }
    });
    result.push(Math.abs(number[0]));
  }
  answer = Math.max(...result);
  console.log(answer);
  return answer;
}
solution("100-200*300-500+20");
