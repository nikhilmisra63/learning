// https://leetcode.com/problems/combination-sum/
// Combination Sum
const combinationSum = (candidates, target) => {
  const result = [];
  const dfs = (index = 0, current = [], total = 0) => {
    if (total === target) {
      result.push([...current]);
      return;
    }
    if (index >= candidates.length || total > target) return;

    current.push(candidates[index]);
    dfs(index, current, total + candidates[index]);
    current.pop();
    dfs(index + 1, current, total);
  };
  dfs();
  return result;
};

// Combination Sum
// https://leetcode.com/problems/combination-sum-ii/
const combinationSum2 = (candidates, target) => {
  const result = [];
  candidates = candidates.sort((a, b) => a - b);

  const dfs = (current = [], target, start = 0) => {
    if (target === 0) {
      result.push([...current]);
      return;
    }
    if (target < 0) return;
    let prev = -1;

    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] === prev) continue;
      current.push(candidates[i]);
      dfs(current, target - candidates[i], i + 1);
      current.pop();
      prev = candidates[i];
    }
  };

  dfs([], target);

  return result;
};

// console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
