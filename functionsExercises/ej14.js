function amountTocoins(amount, coins) {

  if (amount === 0) {
    return [];
  } else {
    if (amount >= coins[0]) {
      left = (amount - coins[0]);
      return [coins[0]].concat(amountTocoins(left, coins));// Recursive call with the remaining amount
    } else {
      coins.shift();// Remove the first coin from the list
      return amountTocoins(amount, coins);
    }
  }
}

console.log(amountTocoins(46, [25, 10, 5, 2, 1]));
