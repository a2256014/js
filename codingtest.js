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
//[]or  \특수기호   |or     ()그룹검색  ?최대 한번  *있거나없음

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
