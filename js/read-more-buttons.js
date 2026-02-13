document.addEventListener('DOMContentLoaded', function() {
  // Находим все кнопки с классом read-more-btn
  const buttons = document.querySelectorAll('.read-more-btn');
  
  buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
      e.preventDefault(); // Отменяем переход по ссылке
      
      // Находим родительский блок
      const parent = this.closest('.read-more-block');
      
      // Находим текст внутри этого блока
      const text = parent.querySelector('.read-more-text');
      
      // Скрываем кнопку
      this.classList.add('d-none');
      
      // Показываем текст
      text.classList.remove('d-none');
      text.classList.add('d-block');
    });
  });
});