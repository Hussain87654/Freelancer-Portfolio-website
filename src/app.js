 // Get DOM elements
        let hamburger = document.getElementById('hamburger');
        let sidebar = document.getElementById('sidebar');
        let overlay = document.getElementById('overlay');
        let closeSidebar = document.getElementById('close-sidebar');

        // Function to open sidebar
        function openSidebar() {
            sidebar.classList.add('open');
            overlay.classList.add('open');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when sidebar is open
        }

        // Function to close sidebar
        function closeSidebarFunc() {
            sidebar.classList.remove('open');
            overlay.classList.remove('open');
            document.body.style.overflow = ''; // Restore scrolling
        }

        // Event listeners
        hamburger.addEventListener('click', openSidebar);
        closeSidebar.addEventListener('click', closeSidebarFunc);
        overlay.addEventListener('click', closeSidebarFunc);

        // Close sidebar when clicking on a link (for mobile)
        let sidebarLinks = document.querySelectorAll('#sidebar a');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', closeSidebarFunc);
        });

        