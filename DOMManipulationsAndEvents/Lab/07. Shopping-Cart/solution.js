function solve() {
   const buttons = Array.from(document.getElementsByClassName('add-product'));
   let price = [];
   let products = [];
   for (const button of buttons) {
      button.addEventListener('click', () => {
         const productPrice = Number(button.parentElement.parentElement.getElementsByClassName('product-line-price')[0].textContent);
         const productName = button.parentElement.parentElement.getElementsByClassName('product-title')[0].textContent;
      
         price.push(productPrice)
         if (!products.includes(productName)) {
            products.push(productName);
         }
         document.querySelector('textarea').value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;

      });
   }
   const checkoutBtn = document.querySelector('.checkout');
   checkoutBtn.addEventListener('click', checkout);
   function checkout() {
      document.querySelector('textarea').value += `You bought ${products.join(', ')} for ${price.reduce((total, current) => {
         return total + current;
      }, 0).toFixed(2)}.`;

      checkoutBtn.disabled = true;
      for (const button of buttons) {
         button.disabled = true;
      }
   }
}