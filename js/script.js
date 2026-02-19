// Elements
const openButtons = document.querySelectorAll('.openPopup');
const popup = document.getElementById('popup');
const popupContent = document.querySelector('.popup-content');
const closeButton = document.getElementById('closePopup');

// Show popup
function showPopup() {
    popup.classList.add('active');
    document.body.style.overflow = 'hidden'; // optional but nice UX
}

// Hide popup
function hidePopup() {
    popup.classList.remove('active');
    document.body.style.overflow = '';
}

// Open popup buttons
openButtons.forEach(button => {
    button.addEventListener('click', showPopup);
});

// Close by button (if exists)
if (closeButton) {
    closeButton.addEventListener('click', hidePopup);
}

// Close when clicking outside popup-content
popup.addEventListener('click', function (e) {
    if (!e.target.closest('.popup-content')) {
        hidePopup();
    }
});

// Prevent closing when clicking inside popup-content
if (popupContent) {
    popupContent.addEventListener('click', function (e) {
        e.stopPropagation();
    });
}

// Close on ESC key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && popup.classList.contains('active')) {
        hidePopup();
    }
});















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










// Sidebar elements
const sidebarOpenButtons = document.querySelectorAll('.openSidebar');
const sidebar = document.getElementById('sidebar');
const sidebarContent = document.querySelector('.sidebar-content');
const sidebarCloseButton = document.getElementById('closeSidebar');

// Show sidebar
function showSidebar() {
    sidebar.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Hide sidebar
function hideSidebar() {
    sidebar.classList.remove('active');
    document.body.style.overflow = '';
}

// Open sidebar
sidebarOpenButtons.forEach(button => {
    button.addEventListener('click', showSidebar);
});

// Close by X
if (sidebarCloseButton) {
    sidebarCloseButton.addEventListener('click', hideSidebar);
}

// Close by clicking outside
sidebar.addEventListener('click', function (e) {
    if (!e.target.closest('.sidebar-content')) {
        hideSidebar();
    }
});

// Prevent closing when clicking inside
sidebarContent.addEventListener('click', function (e) {
    e.stopPropagation();
});

// ESC
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && sidebar.classList.contains('active')) {
        hideSidebar();
    }
});













