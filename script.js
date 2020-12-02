
let btn = document.getElementById('kira');
let payment = document.getElementById('payment');
let principal;
let deposit;
let interest;
let years;


btn.addEventListener('click', function(){
  principal = document.getElementById('principal').value;
  deposit = document.getElementById('deposit').value;
  interest = document.getElementById('interest').value;
  years = document.getElementById('years').value;

  let totalPrinciple = principal-deposit;
  let totalInterest = (interest/100)*totalPrinciple*years;
  let totalToPay = totalInterest+totalPrinciple;
  let monthlyToPay = totalToPay/years/12;
  payment.innerHTML = 'RM'+ monthlyToPay.toFixed(2);
  }
);
