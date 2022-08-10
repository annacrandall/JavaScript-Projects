function checkCashRegister(salePrice, cashGiven, cashInDrawer) {
  let changeDue = Number.parseFloat(cashGiven - salePrice).toFixed(2);
  let newChange = [];
  let insufficientFunds = { status: "INSUFFICIENT_FUNDS", change: [] };
  let closed = { status: "CLOSED", change: cashInDrawer };

  const conductTransaction = (bill, amountTakenOut) => {
    bill[1] -= amountTakenOut;
    changeDue -= amountTakenOut;
    changeDue = Number.parseFloat(changeDue).toFixed(2);

    const isBillInPile = newChange.some((element) => element[0] === bill[0]);
    if (isBillInPile) {
      newChange = newChange.map((element) => {
        if (bill[0] === element[0]) {
          return [bill[0], element[1] + amountTakenOut];
        }
        return element;
      });
    } else {
      newChange.push([bill[0], amountTakenOut]);
    }
  };

  let totalCash = cashInDrawer.reduce(
    (accumulator, current) => accumulator + current[1],
    0
  );


  if (totalCash < changeDue) {
    return insufficientFunds;
  } else if (totalCash == changeDue) {
    return closed;
  }

  while (changeDue > 0) {
    if (changeDue >= 100 && cashInDrawer[8][1] > 0) {
      conductTransaction(cashInDrawer[8], 100);
    } else if (changeDue >= 20 && cashInDrawer[7][1] > 0) {
      conductTransaction(cashInDrawer[7], 20);
    } else if (changeDue >= 10 && cashInDrawer[6][1] > 0) {
      conductTransaction(cashInDrawer[6], 10);
    } else if (changeDue >= 5 && cashInDrawer[5][1] > 0) {
      conductTransaction(cashInDrawer[5], 5);
    } else if (changeDue >= 1 && cashInDrawer[4][1] > 0) {
      conductTransaction(cashInDrawer[4], 1);
    } else if (changeDue >= 0.25 && cashInDrawer[3][1] > 0) {
      conductTransaction(cashInDrawer[3], 0.25);
    } else if (changeDue >= 0.1 && cashInDrawer[2][1] > 0) {
      conductTransaction(cashInDrawer[2], 0.1);
    } else if (changeDue >= 0.05 && cashInDrawer[1][1] > 0) {
      conductTransaction(cashInDrawer[1], 0.05);
    } else if (changeDue >= 0.01 && cashInDrawer[0][1] > 0) {
      conductTransaction(cashInDrawer[0], 0.01);
    } else {
      return insufficientFunds;
    }
  }
  return { status: "OPEN", change: newChange };
}

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
