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

  fetch(`https://v6.exchangerate-api.com/v6/cf523fb65e882fcb0dd005a6/latest/${currencyOneValue}`)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      const rate = data.conversion_rates[currencyTwoValue];
      // console.log(rate);
      rateElement.innerText = `1 ${currencyOneValue} = ${rate.toFixed(2)} ${currencyTwoValue}`;
      amountElementTwo.value = (rate * amountElementOne.value).toFixed(2);
    })
}



// Event listeners
currencyElementOne.addEventListener('change', calculate);
currencyElementTwo.addEventListener('change', calculate);
amountElementOne.addEventListener('input', calculate);
amountElementTwo.addEventListener('input', calculate);

// swapButton.addEventListener('click', function () {
//   const temp = currencyOneValue.value;
//   currencyOneValue.value = currencyTwoValue.value;
//   currencyTwoValue.value = temp;
//   calculate()
// })

calculate();