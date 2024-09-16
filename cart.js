document.addEventListener("DOMContentLoaded", () => {
    // Function to update total price
    function updateTotal() {
      let total = 0;
      document.querySelectorAll('.card-body').forEach(item => {
        const unitPrice = parseFloat(item.querySelector('.unit-price').textContent.replace('$', ''));
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        total += unitPrice * quantity;
      });
      document.querySelector('.total').textContent = `${total} $`;
    }
  
    // Increase quantity
    document.querySelectorAll('.fa-plus-circle').forEach(button => {
      button.addEventListener('click', () => {
        const quantityElement = button.nextElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = ++quantity;
        updateTotal(); // Recalculate total
      });
    });
  
    // Decrease quantity
    document.querySelectorAll('.fa-minus-circle').forEach(button => {
      button.addEventListener('click', () => {
        const quantityElement = button.previousElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
          quantityElement.textContent = --quantity;
          updateTotal(); // Recalculate total
        }
      });
    });
  
    // Delete item
    document.querySelectorAll('.fa-trash-alt').forEach(button => {
      button.addEventListener('click', () => {
        button.closest('.card-body').remove();
        updateTotal(); // Recalculate total after item removal
      });
    });
  
    // Like item (toggle heart color)
    document.querySelectorAll('.fa-heart').forEach(button => {
      button.addEventListener('click', () => {
        button.classList.toggle('liked');
      });
    });
  });
  