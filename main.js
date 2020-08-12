const currencyElementOne = document.getElementById('currency-one');
const amountElementOne = document.getElementById('amount-one');
const currencyElementTwo = document.getElementById('currency-two');
const amountElementTwo = document.getElementById('amount-two');
const swapButton = document.getElementById('swap');
const rateElement = document.getElementById('rate');


// Fetch exchange rates and ppopulate DOM
function calculate() {
  const currencyOneValue = currencyElementOne.value;
  const currencyTwoValue = currencyElementTwo.value;
  // console.log(currencyOneValue, currencyTwoValue);

  fetch(`https://api.iban.com/clients/api/currency/rates/?api_key=key&format=xml&currency=${currencyOneValue}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const rate = data.rates[currencyTwoValue];
      console.log(rate);
      // rateElement.innerText = `1 ${currencyOneValue} = ${rate.toFixed(2)} ${currencyTwoValue}`;
      // amountElementTwo.value = (rate * amountElementOne.value).toFixed(2);
    })
}



// Event listeners
currencyElementOne.addEventListener('change', calculate);
currencyElementTwo.addEventListener('change', calculate);
// amountElementOne.addEventListener('input', calculate);
amountElementTwo.addEventListener('input', calculate);

// swapButton.addEventListener('click', function () {
//   const temp = currencyOneValue.value;
//   currencyOneValue.value = currencyTwoValue.value;
//   currencyTwoValue.value = temp;
//   calculate()
// })

calculate();