 // Mobile menu toggle
        function toggleNavbar() {
            const navbar = document.querySelector('.navbar');
            navbar.classList.toggle('active');
            
            // Animate hamburger to X
            const hamburger = document.querySelector('.hamburger');
            hamburger.classList.toggle('active');
        }