  // Modal functionality
        const loginModal = document.getElementById('loginModal');
        const registerModal = document.getElementById('registerModal');
        const openLoginModal = document.getElementById('openLoginModal');
        const openRegisterModal = document.getElementById('openRegisterModal');
        const closeLoginModal = document.getElementById('closeLoginModal');
        const closeRegisterModal = document.getElementById('closeRegisterModal');

        // Open Login Modal
        openLoginModal.addEventListener('click', function(e) {
            e.preventDefault();
            loginModal.style.display = 'flex';
            // Close mobile menu if open
            const navbar = document.querySelector('.navbar');
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                document.querySelector('.hamburger').classList.remove('active');
            }
        });

                // Open Register Modal
        openRegisterModal.addEventListener('click', function(e) {
            e.preventDefault();
            registerModal.style.display = 'flex';
            // Close mobile menu if open
            const navbar = document.querySelector('.navbar');
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                document.querySelector('.hamburger').classList.remove('active');
            }
        });

        // Close modals when clicking X
        closeLoginModal.addEventListener('click', function() {
            loginModal.style.display = 'none';
        });

        closeRegisterModal.addEventListener('click', function() {
            registerModal.style.display = 'none';
        });

         // Close modals when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === loginModal) {
                loginModal.style.display = 'none';
            }
            if (event.target === registerModal) {
                registerModal.style.display = 'none';
            }
        });

        // Form submission handling
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically handle login logic
            alert('Login functionality would be implemented here');
            loginModal.style.display = 'none';
        });

        document.getElementById('registerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically handle registration logic
            alert('Registration functionality would be implemented here');
            registerModal.style.display = 'none';
        });


        // Close modals with Escape key
        window.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    loginModal.style.display = 'none';
    registerModal.style.display = 'none';
  }
});
