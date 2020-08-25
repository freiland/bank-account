// Business Logic
// Create a constructor for account (name, initialDeposit)
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
  this.currentBalance += number;
};

// User Interface Logic
$(document).ready(function (){
  $("form#registerAcct").submit(function(event){
    event.preventDefault();
    const inputtedName = $("input#name").val();
    const inputtedInitialDeposit = parseFloat($("input#initialDeposit").val());
    let newAccount = new Account (inputtedName, inputtedInitialDeposit);
    $("#currentBalance").text(inputtedInitialDeposit);

  });
});