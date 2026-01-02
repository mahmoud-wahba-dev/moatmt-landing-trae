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
  const collapses = document.querySelectorAll('.collapse');
  if (!collapses.length) return;

  const animate = (content, open) => {
    if (!content) return;
    const startHeight = content.offsetHeight;
    const endHeight = open ? content.scrollHeight : 0;
    content.style.overflow = 'hidden';
    content.style.opacity = open ? '1' : '0';
    content.style.transition = 'height 250ms ease, opacity 250ms ease';
    content.style.willChange = 'height, opacity';
    content.style.height = startHeight + 'px';
    void content.offsetHeight;
    content.style.height = endHeight + 'px';
    const cleanup = () => {
      content.removeEventListener('transitionend', cleanup);
      content.style.transition = '';
      content.style.willChange = '';
      content.style.overflow = '';
      content.style.height = open ? '' : '0px';
      content.style.opacity = open ? '' : '0';
    };
    content.addEventListener('transitionend', cleanup);
  };

  collapses.forEach(collapse => {
    const input = collapse.querySelector('input');
    const content = collapse.querySelector('.collapse-content');
    if (!input || !content) return;

    if (input.checked) {
      content.style.height = '';
      content.style.opacity = '';
    } else {
      content.style.height = '0px';
      content.style.opacity = '0';
    }

    input.addEventListener('change', () => {
      const name = input.name;
      if (input.type === 'radio' && name) {
        const group = document.querySelectorAll(`input[name="${name}"]`);
        group.forEach(i => {
          const parent = i.closest('.collapse');
          const c = parent?.querySelector('.collapse-content');
          if (!c) return;
          animate(c, i.checked);
        });
      } else {
        animate(content, input.checked);
      }
    });

    window.addEventListener('resize', () => {
      if (input.checked) {
        content.style.height = '';
      }
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

// Pricing Tabs (Monthly/Yearly)
function initPricingTabs() {
  const tabs = document.querySelectorAll('[data-plan-tab]');
  if (!tabs.length) return;

  const priceValues = document.querySelectorAll('.price-value');
  const optionPrices = document.querySelectorAll('.option-price');
  const periodLabels = document.querySelectorAll('.plan-period-label');
  const planDurations = document.querySelectorAll('.plan-duration');

  const applyPlanType = (planType) => {
    // update active/inactive styles and aria
    tabs.forEach((t) => {
      const isActive = t.getAttribute('data-plan-tab') === planType;
      t.setAttribute('aria-selected', String(isActive));
      // active styles
      t.classList.toggle('bg-[linear-gradient(179.04deg,#FFFFFF_61.8%,#2EE378_122.92%)]', isActive);
      t.classList.toggle('!text-[#1C0531]', isActive);
      // inactive styles
      t.classList.toggle('bg-white/4', !isActive);
      t.classList.toggle('text-white', !isActive);
    });

    // update all prices from data attributes
    priceValues.forEach((el) => {
      const val = el.getAttribute(`data-${planType}`);
      if (val) el.textContent = val;
    });
    optionPrices.forEach((el) => {
      const val = el.getAttribute(`data-${planType}`);
      if (val) el.textContent = val;
    });

    planDurations.forEach((el) => {
      const val = el.getAttribute(`data-${planType}`);
      if (val) el.textContent = val;
    });

    // update period labels
    const label = planType === 'monthly' ? 'شهرياً' : 'سنوياً';
    periodLabels.forEach((el) => {
      el.textContent = label;
    });
  };

  // initialize based on current aria-selected or default to monthly
  const selected = Array.from(tabs).find((t) => t.getAttribute('aria-selected') === 'true');
  applyPlanType(selected ? selected.getAttribute('data-plan-tab') : 'monthly');

  // click handlers
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const planType = tab.getAttribute('data-plan-tab');
      applyPlanType(planType);
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
// function initPartnerCarousel() {
//   const partnerSwiper = document.querySelector('.partner-swiper');
//   if (!partnerSwiper) return;

//   new Swiper('.partner-swiper', {
//     // modules removed for CDN bundle usage
//     slidesPerView: 'auto',
//     loop: true,
//     spaceBetween: 24,
//     speed: 7000,
//     autoplay: {
//       delay: 1,
//       disableOnInteraction: false,
//       pauseOnMouseEnter: true,
//     },
//     freeMode: {
//       enabled: true,
//       momentum: true,
//       momentumRatio: 0.5,
//       sticky: false,
//     },
//     allowTouchMove: false,
//     direction: 'horizontal',
//     // rtl handled by document direction; no explicit option
//   });
// }

// Initialize all on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  initThemeSwitcher();
  initMobileMenu();
  initFAQAccordion();
  initSmoothScroll();
  initPricingTabs();

  // Initialize Swipers if Swiper library is loaded
  if (typeof Swiper !== 'undefined') {
    initTestimonialSwiper();
    initMoatmtImagesSwiper();
    // initPartnerCarousel();
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



