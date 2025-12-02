// Main JavaScript for Static Site

// Theme Switcher
const THEME_KEY = "daisyui-theme";

function initThemeSwitcher() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  // Get initial theme from localStorage or default to 'light'
  const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeToggle.checked = savedTheme === 'dark';

  // Handle theme toggle
  themeToggle.addEventListener('change', function() {
    const newTheme = this.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  });
}

// Mobile Menu Toggle
function initMobileMenu() {
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!menuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenu.classList.add('hidden');
      }
    });
  }
}

// FAQ Accordion
function initFAQAccordion() {
  const accordionInputs = document.querySelectorAll('input[name="my-accordion-faq"]');

  accordionInputs.forEach(input => {
    input.addEventListener('change', function() {
      // DaisyUI handles the visual toggle automatically
    });
  });
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Initialize Swiper for Testimonials
function initTestimonialSwiper() {
  const testimonialSwiper = document.querySelector('.testimonial-swiper');
  if (!testimonialSwiper) return;

  new Swiper('.testimonial-swiper', {
    slidesPerView: 1,
    loop: true,
    speed: 800,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: false,
    navigation: false,
  });
}

// Initialize Swiper for Moatmt Images
function initMoatmtImagesSwiper() {
  const moatmtSwiper = document.querySelector('.moatmt-images-swiper');
  if (!moatmtSwiper) return;

  new Swiper('.moatmt-images-swiper', {
    // modules removed for CDN bundle usage
    slidesPerView: 1,
    loop: true,
    speed: 600,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.dashboard-swiper-next',
      prevEl: '.dashboard-swiper-prev',
    },
  });
}

// Initialize Partner Carousel
function initPartnerCarousel() {
  const partnerSwiper = document.querySelector('.partner-swiper');
  if (!partnerSwiper) return;

  new Swiper('.partner-swiper', {
    // modules removed for CDN bundle usage
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 24,
    speed: 7000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    freeMode: {
      enabled: true,
      momentum: true,
      momentumRatio: 0.5,
      sticky: false,
    },
    allowTouchMove: false,
    direction: 'horizontal',
    // rtl handled by document direction; no explicit option
  });
}

// Initialize all on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  initThemeSwitcher();
  initMobileMenu();
  initFAQAccordion();
  initSmoothScroll();

  // Initialize Swipers if Swiper library is loaded
  if (typeof Swiper !== 'undefined') {
    initTestimonialSwiper();
    initMoatmtImagesSwiper();
    initPartnerCarousel();
  }
});

// YouTube Video Player
function initVideoPlayer() {
  const videoButton = document.getElementById('video-play-button');
  const videoPoster = document.getElementById('video-poster');
  const videoIframe = document.getElementById('video-iframe');

  if (videoButton && videoPoster && videoIframe) {
    videoButton.addEventListener('click', function() {
      videoPoster.style.display = 'none';
      videoIframe.style.display = 'block';
      // Start autoplay by modifying src
      const src = videoIframe.getAttribute('data-src');
      videoIframe.src = src;
    });
  }
}

// Add to DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  initVideoPlayer();
});

// Testimonial Custom Navigation
function initTestimonialNavigation() {
  const prevBtn = document.querySelector('.testimonial-swiper-prev');
  const nextBtn = document.querySelector('.testimonial-swiper-next');
  const swiperInstance = document.querySelector('.testimonial-swiper')?.swiper;

  if (prevBtn && nextBtn && swiperInstance) {
    prevBtn.addEventListener('click', () => swiperInstance.slidePrev());
    nextBtn.addEventListener('click', () => swiperInstance.slideNext());
  }
}

// Initialize on load
window.addEventListener('load', function() {
  initTestimonialNavigation();
});
