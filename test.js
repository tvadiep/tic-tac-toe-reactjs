function solution(S) {
  let total_X = 0;
  let total_Y = 0;
  for (let i = 0; i < S.length; i++) {
    if (S[i] === "x") total_X++;
    if (S[i] === "y") total_Y++;
  }

  let num_X = 0;
  let num_Y = 0;

  let count = 0;

  for (let i = 0; i < S.length; i++) {
    if (S[i] === "x") num_X++;
    if (S[i] === "y") num_Y++;

    if (num_X === num_Y || total_X - num_X === total_Y - num_Y) count++;
  }
  return count;
}

// a yxbx
// a | yxbx   x=y=0
// ay | xbx
// ayx | bx

console.log(solution("axyxby")); // 3
console.log(solution("xzzzy")); // 0
console.log(solution("toyxmy")); // 5
console.log(solution("apple")); // 4
