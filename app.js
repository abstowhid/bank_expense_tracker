let totalBalance = 0;
let totalDeposit = 0;
let totalWithdraw = 0;
let mainInput;
let totalDepositshow = document.getElementById('depoBalance');
let totalBalanceshow = document.getElementById('mainBalance');
let totalWithdrawshow = document.getElementById('withBalance');

totalDepositshow.textContent = `$0.00`;
totalBalanceshow.textContent = `$0.00`;
totalWithdrawshow.textContent = `$0.00`;
let inputAmount = (document.getElementById('typeNumber').value = ''); //refresh dewar por empty dekhanor jonne

function depositFunc() {
    let inputAmount = document.getElementById('typeNumber').value;
    mainInput = parseInt(inputAmount);
    if (mainInput < 0 || isNaN(mainInput)) {
        alert('enter a positive number');
        return;
    }
    totalBalance += mainInput;
    totalDeposit += mainInput;
    totalDepositshow.textContent = `$${totalDeposit}`;
    totalBalanceshow.textContent = `$${totalBalance}`;
}
function totalWithdrawFunc() {
    let inputAmount = document.getElementById('typeNumber').value;
    mainInput = parseInt(inputAmount);
    if (mainInput < 0 || isNaN(mainInput)) {
        alert('enter a positive number');
        return;
    }
    if (totalBalance < mainInput) {
        alert("you can't sneak, check your balance");
        return;
    }
    totalBalance -= mainInput;
    totalWithdraw += mainInput;
    totalBalanceshow.textContent = `$${totalBalance}`;
    totalWithdrawshow.textContent = `$${totalWithdraw}`;
}
