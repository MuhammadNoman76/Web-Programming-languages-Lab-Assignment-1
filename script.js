   const navLinks = document.querySelectorAll('.navbar a');
   const sections = document.querySelectorAll('section');

   navLinks.forEach(link => {
       link.addEventListener('click', e => {
           e.preventDefault();
           const targetId = e.currentTarget.getAttribute('href');

           // Remove active class from all links
           navLinks.forEach(link => link.classList.remove('activebar'));

           // Add active class to the clicked link
           e.currentTarget.classList.add('activebar');

           // Scroll to the target section or top of the page
           if (targetId === '#home') {
               window.scrollTo({ top: 0, behavior: 'smooth' });
           } else {
               const targetElement = document.querySelector(targetId);
               targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
           }

           // Close the navigation menu on mobile
           if (window.innerWidth <= 768) {
               hamburger.classList.remove('open');
               navbar.classList.remove('open');
           }
       });
   });

   // Add event listener for scroll events
   window.addEventListener('scroll', () => {
       let currentSection = null;

       sections.forEach(section => {
           const sectionTop = section.offsetTop - window.innerHeight / 2;
           const sectionBottom = section.offsetTop + section.offsetHeight - window.innerHeight / 2;

           if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionBottom) {
               currentSection = section.id;
           }
       });

       // Remove active class from all links
       navLinks.forEach(link => link.classList.remove('activebar'));

       // Add active class to the corresponding link
       const activeLink = document.querySelector(`a[href="#${currentSection}"]`);
       if (activeLink) {
           activeLink.classList.add('activebar');
       } else {
           // If no section is active, add active class to the "Home" link
           const homeLink = document.querySelector('a[href="#home"]');
           homeLink.classList.add('activebar');
       }
   });