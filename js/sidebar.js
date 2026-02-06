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
