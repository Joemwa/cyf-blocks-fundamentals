var earnings, value, expenses, balance2, earnings_total, expenses_total;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


earnings = 0;
expenses = 0;
balance2 = 0;
let element_earnings_total = document.getElementById('earnings_total');
element_earnings_total.innerText = 0;
let element_expenses_total = document.getElementById('expenses_total');
element_expenses_total.innerText = 0;
let element_balance = document.getElementById('balance');
element_balance.innerText = 0;


document.getElementById('button').addEventListener('click', (event) => {
  let element_input = document.getElementById('input');
  value = getNumberOrString(document.getElementById('input').value);
  if (value > 0) {
    let element_earnings_list = document.getElementById('earnings_list');
    let new_li = document.createElement('li');
    new_li.innerText = value;

    element_earnings_list.appendChild(new_li);
    earnings_total = (typeof earnings_total === 'number' ? earnings_total : 0) + value;
    let element_earnings_total2 = document.getElementById('earnings_total');
    element_earnings_total2.innerText = earnings_total;
  } else if (value < 0) {
    let element_expense_list = document.getElementById('expense_list');
    let new_li2 = document.createElement('li');
    new_li2.innerText = value;

    element_expense_list.appendChild(new_li2);
    expenses_total = (typeof expenses_total === 'number' ? expenses_total : 0) + value;
    let element_expenses_total2 = document.getElementById('expenses_total');
    element_expenses_total2.innerText = expenses_total;
  }
  let element_balance2 = document.getElementById('balance');
  balance2 = (typeof balance2 === 'number' ? balance2 : 0) + value;
  element_balance2.innerText = balance2;

});
