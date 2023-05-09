const input = document.querySelector('.mail-input')
const error = document.querySelector('.input-error')

input.onblur = function() {
    if (!input.value.includes('@')) { // це не електронна адреса
      input.classList.add('invalid');
      error.innerHTML = 'Будь ласка, введіть правильну електронну адресу.'
    }
  };
  
  input.onfocus = function() {
    if (this.classList.contains('invalid')) {
      // видалити індикатор помилки, тому що користувач хоче ввести дані заново
      this.classList.remove('invalid');
      error.innerHTML = "";
    }
  };