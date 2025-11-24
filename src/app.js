let hamburger = document.getElementById('hamburger');
let sidebar = document.getElementById('sidebar');
let overlay = document.getElementById('overlay');
let closeSidebar = document.getElementById('close-sidebar');

function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden'; 
}
    
function closeSidebarFunc() {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
}
hamburger.addEventListener('click', openSidebar);
closeSidebar.addEventListener('click', closeSidebarFunc);
overlay.addEventListener('click', closeSidebarFunc);
let sidebarLinks = document.querySelectorAll('#sidebar a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSidebarFunc);
});

        