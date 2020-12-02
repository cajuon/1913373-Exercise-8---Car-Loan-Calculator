//function to calculate monthly payment
function calcMonthly(principal,deposit,interest,years){
  let totalPrinciple = principal-deposit;
  let totalInterest = (interest/100)*totalPrinciple*years;
  let totalToPay = totalInterest+totalPrinciple;
  let monthlyToPay = totalToPay/years/12;
  return monthlyToPay.toFixed(2);
}
//declare variable for inputs
let principal;
let deposit;
let interest;
let years;
//declare variable for result output
let payment = document.getElementById('payment');

//declare button
let btn = document.getElementById('kira');
//event listener for the button when clicked
btn.addEventListener('click', function(){
  //get value from inputs
  principal = document.getElementById('principal').value;
  deposit = document.getElementById('deposit').value;
  interest = document.getElementById('interest').value;
  years = document.getElementById('years').value;
  //print the result output
  payment.innerHTML = 'RM'+ calcMonthly(principal,deposit,interest,years);
  }
);
