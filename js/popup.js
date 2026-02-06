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

