document.querySelector("#btn-deposit").addEventListener('click', function () {
    // step=1
    const depositField = document.querySelector("#deposit-field");
    const newDepositAmountString = depositField.value;
    const newDepositTotalAmount = parseFloat(newDepositAmountString)
    depositField.value = '';
    if (isNaN(newDepositTotalAmount)) {
        alert("not a number");
        return
      }
    // step-2
    const depositTotalElement = document.querySelector("#depositTk");
    const previousDepositString = depositTotalElement.textContent;
    /* input and textarea man pete hole (input.value) value use kora hoy
     onno khetre innerText va textContent use korte hobe,,,
     input,textarea ar man pete hole (value) and 
     p,h1 ar man pete hole innerText/textContent use korbo */
     
    const newPreviousDepositTotal = parseFloat(previousDepositString);
    // step=3
    const currentDepositTotal = newDepositTotalAmount + newPreviousDepositTotal;
    // step=4
    depositTotalElement.textContent = currentDepositTotal
    // step-5
    const balanceTotalElement = document.querySelector("#balanceTk");
    const previousBalanceString = balanceTotalElement.textContent;
    const newPreviousBalanceTotal = parseFloat(previousBalanceString);
    // step-6 calculation
    const currentBalanceTotal = newPreviousBalanceTotal + newDepositTotalAmount
    // set the total balance
    balanceTotalElement.textContent = currentBalanceTotal

})
