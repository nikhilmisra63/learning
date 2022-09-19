//  can not buy and sell on same day;
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
const buyStocks = (prices) => {
  let minPrice = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > profit) {
      profit = prices[i] - minPrice;
    }
  }

  return profit;
};

// Can buy and sell on same day
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
const buyStocks2 = (prices) => {
  let minPrice = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > 0) {
      profit += prices[i] - minPrice;
      minPrice = prices[i];
    }
  }

  return profit;
};

console.log(buyStocks([7, 1, 5, 3, 6, 4]));
console.log(buyStocks([7, 6, 4, 3, 1]));
console.log(buyStocks([5, 2, 6, 1, 4]));
console.log(buyStocks([3, 2, 5, 8, 1, 9]));
