document.querySelector("#btn-withdraw").addEventListener('click', function () {
    const withdrawField = document.querySelector("#withdraw-field");
    const newWithdrawTotalString = withdrawField.value;
    const newWithdrawTotal = parseFloat(newWithdrawTotalString)
    withdrawField.value = '';

    if (isNaN(newWithdrawTotal)) {
        alert("not a number");
        return
      }
    // step-2
    const withdrawTotalElement = document.querySelector("#withdowTk");
    const previousWithdrawString = withdrawTotalElement.textContent;
    const previousWithdrawTotal = parseFloat(previousWithdrawString);

    // step-4
    const balanceTotalElement = document.querySelector("#balanceTk");
    const previousBalanceString = balanceTotalElement.textContent;
    const previousBalanceTotal = parseFloat(previousBalanceString);

    // step-4.5 calculation
    const newbalanceTotal = previousBalanceTotal - newWithdrawTotal;

    if (newWithdrawTotal > previousBalanceTotal) {
        alert("taka nai re pagla")
        return;
    }
    // step-3
    const currentWithdrawTotal = newWithdrawTotal + previousWithdrawTotal
    // set the total withdraw-amount
    withdrawTotalElement.textContent = currentWithdrawTotal
    // step-5
    // set the total balance-amount
    balanceTotalElement.textContent = newbalanceTotal


})
