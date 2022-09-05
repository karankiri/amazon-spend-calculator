console.log('This is the background page.');
console.log('Put the background scripts here.');
let grandTotal = 0;
const totalOrder = parseInt(
  window.document.querySelectorAll('span.num-orders')[0].innerText
);
const orders = window.document.querySelectorAll('.yohtmlc-order-total .value');
const pageTotal = Array.from(orders).reduce((acc, curr) => {
  return parseFloat(curr.innerText.replaceAll(',', '')) + acc;
}, 0);
console.log(pageTotal);
grandTotal += pageTotal;
for (let i = 0; i < totalOrder / 10; i++) {
  const nextButton = document.querySelector('ul.a-pagination li.a-last a');
  nextButton.click();
  const orders = window.document.querySelectorAll(
    '.yohtmlc-order-total .value'
  );
  const pageTotal = Array.from(orders).reduce((acc, curr) => {
    return parseFloat(curr.innerText.replaceAll(',', '')) + acc;
  }, 0);
  console.log(pageTotal);
  grandTotal += pageTotal;
}
console.log('grandTotal', grandTotal);
