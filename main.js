// ==========================================
// NAVIGATION & MOBILE MENU
// ==========================================

const menuToggle = document.getElementById('menuToggle');
const navbarMenu = document.getElementById('navbarMenu');

if (menuToggle) {
  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', menuToggle.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
  });

  // Close menu when a link is clicked
  const menuLinks = navbarMenu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ==========================================
// SMOOTH SCROLLING
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Update focus for accessibility
      target.focus();
    }
  });
});

// ==========================================
// MODALS
// ==========================================

function openModal(modalName) {
  const modalId = modalName.charAt(0).toUpperCase() + modalName.slice(1) + 'Modal';
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    // Focus on close button for accessibility
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
  }
}

function closeModal(modalName) {
  const modalId = modalName.charAt(0).toUpperCase() + modalName.slice(1) + 'Modal';
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
  }
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.classList.remove('show');
    event.target.setAttribute('aria-hidden', 'true');
  }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    document.querySelectorAll('.modal.show').forEach(modal => {
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
    });
  }
});

// Make feature cards keyboard accessible
document.querySelectorAll('.feature-card').forEach(card => {
  card.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.click();
    }
  });
});

// ==========================================
// FORM HANDLING
// ==========================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Clear previous errors
    document.querySelectorAll('.form-error').forEach(el => el.textContent = '');
    
    // Validate form
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const interest = document.getElementById('interest').value;
    
    let isValid = true;
    
    if (!name) {
      document.getElementById('name-error').textContent = 'El nombre es requerido.';
      isValid = false;
    }
    
    if (!email || !isValidEmail(email)) {
      document.getElementById('email-error').textContent = 'Por favor, ingresa un correo electrónico válido.';
      isValid = false;
    }
    
    if (!interest) {
      isValid = false;
    }
    
    if (isValid) {
      // Show success message
      const successMessage = document.getElementById('formSuccess');
      successMessage.style.display = 'block';
      successMessage.focus();
      
      // Store data in localStorage for later processing
      const formData = {
        name,
        email,
        interest,
        message: document.getElementById('message').value.trim(),
        timestamp: new Date().toISOString()
      };
      
      let storedData = JSON.parse(localStorage.getItem('aulainfinity_leads') || '[]');
      storedData.push(formData);
      localStorage.setItem('aulainfinity_leads', JSON.stringify(storedData));
      
      // Reset form
      contactForm.reset();
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 3000);
      
      console.log('Lead captured:', formData);
    }
  });
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// ==========================================
// COOKIE CONSENT
// ==========================================

function checkCookieConsent() {
  const consent = localStorage.getItem('aulainfinity_cookie_consent');
  const cookieBanner = document.getElementById('cookieBanner');
  
  if (!consent && cookieBanner) {
    cookieBanner.classList.add('show');
  }
}

function acceptCookies() {
  localStorage.setItem('aulainfinity_cookie_consent', 'accepted');
  document.getElementById('cookieBanner').classList.remove('show');
  loadNonEssentialScripts();
}

function rejectCookies() {
  localStorage.setItem('aulainfinity_cookie_consent', 'rejected');
  document.getElementById('cookieBanner').classList.remove('show');
}

function loadNonEssentialScripts() {
  // Load analytics or other non-essential scripts only after consent
  // Example: Google Analytics, Hotjar, etc.
  console.log('Non-essential scripts can now be loaded');
}

// Initialize cookie consent check on page load
window.addEventListener('DOMContentLoaded', checkCookieConsent);

// ==========================================
// ACCESSIBILITY ENHANCEMENTS
// ==========================================

// Skip to main content functionality
const skipLink = document.querySelector('.skip-link');
if (skipLink) {
  skipLink.addEventListener('click', function(e) {
    e.preventDefault();
    const main = document.getElementById('main');
    main.focus();
    main.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

// Add focus visible styles dynamically
document.addEventListener('keydown', function(e) {
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-nav');
  }
});

document.addEventListener('mousedown', function() {
  document.body.classList.remove('keyboard-nav');
});

// ==========================================
// PERFORMANCE OPTIMIZATIONS
// ==========================================

// Lazy load images if needed
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Reduce motion support
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Log initialization
console.log('AulaInfinity landing page initialized successfully');
console.log('Prefers reduced motion:', prefersReducedMotion);
