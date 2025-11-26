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


const faqItems = document.querySelectorAll("#faq-section .faq-item");

faqItems.forEach(item => {
    const header = item.querySelector(".faq-header");
    const content = item.querySelector(".faq-content");
    const arrow = item.querySelector(".arrow i");

    header.addEventListener("click", () => {
        const isHidden = content.classList.contains("hidden");

        // Toggle current
        content.classList.toggle("hidden");
        arrow.classList.toggle("fa-plus")
        arrow.classList.toggle("fa-minus")

        // Close other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                const otherContent = otherItem.querySelector(".faq-content");
                const otherArrow = otherItem.querySelector(".arrow i");
                otherContent.classList.add("hidden");
                otherArrow.classList.remove("fa-minus")
                otherArrow.classList.add("fa-plus")
            }
        });
    });
});
        