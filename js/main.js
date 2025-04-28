// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking anywhere else
  document.addEventListener('click', function (event) {
    if (!event.target.closest('.hamburger') && !event.target.closest('.nav-links')) {
      if (navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    }
  });

  // Set active navigation link based on current page
  const currentPage = window.location.pathname.split('/').pop();
  const navItems = document.querySelectorAll('.nav-links a');

  navItems.forEach(item => {
    const href = item.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      item.classList.add('active');
    }
  });

  // Animation for elements when they come into view
  const animatedElements = document.querySelectorAll('.card, .section-title, .skill-item');
  
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
    );
  };

  const animateOnScroll = () => {
    animatedElements.forEach(element => {
      if (isInViewport(element) && !element.classList.contains('animated')) {
        element.classList.add('animated');
        element.style.animation = 'fadeInUp 0.6s ease forwards';
        element.style.opacity = '1';
      }
    });
  };

  // Initial check and add scroll listener
  setTimeout(animateOnScroll, 300);
  window.addEventListener('scroll', animateOnScroll);
});
