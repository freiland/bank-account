// Business Logic
// Create a constructor for account 
function Account (name, initialDeposit) {
  this.name = name;
  this.currentBalance = initialDeposit;
};

// Add a prototype method to deposit
Account.prototype.deposit = function (number) {
  this.currentBalance += number;
};

// Add a prototype method to withdraw
Account.prototype.withdraw =function (number) {
  this.currentBalance -= number;
};

// User Interface Logic
$(document).ready(function (){
  // Register Account
  $("form#registerAcct").submit(function(event){
    event.preventDefault();
    const inputtedName = $("input#name").val();
    const inputtedInitialDeposit = parseFloat($("input#initialDeposit").val());
    let newAccount = new Account (inputtedName, inputtedInitialDeposit);
    $("#currentBalance").text(inputtedInitialDeposit);

    // Deposit Funds
    $("form#depositFunds").submit(function(event) {
      const inputtedDeposit = parseFloat($("input#deposit").val());
      newAccount.deposit(inputtedDeposit);
      event.preventDefault();
      $("#currentBalance").text(newAccount.currentBalance);
    });
  
    // Withdraw Funds
    $("form#withdrawFunds").submit(function(event) {
      const inputtedWithdraw = parseFloat($("input#withdrawal").val());
      newAccount.withdraw(inputtedWithdraw);
      event.preventDefault();
      $("#currentBalance").text(newAccount.currentBalance);
    });
  });
});