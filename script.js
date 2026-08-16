/* ==========================================================================
   PRINCE CHAND - PORTFOLIO INTERACTIVE LOGIC
   Features: Theme Switcher, Problem Filtering, Counter Animations, Toast Notifications
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const themeToggleBtn = document.getElementById('themeToggle');
  const filterPills = document.querySelectorAll('.filter-pill');
  const problemCards = document.querySelectorAll('.problem-card');
  const metricValues = document.querySelectorAll('.metric-value');
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  const navLinkItems = document.querySelectorAll('.nav-link');

  /* ------------------------------------------------------------------------
     1. DAY / NIGHT THEME SWITCHER
     ------------------------------------------------------------------------ */
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });

  /* ------------------------------------------------------------------------
     2. PROBLEMS SOLVED FILTERING
     ------------------------------------------------------------------------ */
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      // Remove active class from all pills
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filterValue = pill.getAttribute('data-filter');

      problemCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  /* ------------------------------------------------------------------------
     3. ANIMATED METRIC COUNTERS
     ------------------------------------------------------------------------ */
  let countersAnimated = false;

  function animateCounters() {
    metricValues.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const isPlus = counter.textContent.includes('+');
      const duration = 1500; // ms
      const stepTime = 30;
      const steps = duration / stepTime;
      const increment = target / steps;

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = target + (isPlus ? '+' : '%');
          clearInterval(timer);
        } else {
          counter.textContent = Math.floor(current) + (isPlus ? '+' : '%');
        }
      }, stepTime);
    });
  }

  // Trigger counters when scrolled into view
  const heroMetricsSection = document.querySelector('.hero-metrics');
  if (heroMetricsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated) {
          countersAnimated = true;
          animateCounters();
        }
      });
    }, { threshold: 0.5 });

    observer.observe(heroMetricsSection);
  }

  /* ------------------------------------------------------------------------
     4. COPY EMAIL TO CLIPBOARD
     ------------------------------------------------------------------------ */
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = copyEmailBtn.getAttribute('data-email');
      
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email address copied to clipboard!');
      }).catch(() => {
        showToast('Direct email: prince.chand.dev@gmail.com');
      });
    });
  }

  function showToast(message) {
    toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  /* ------------------------------------------------------------------------
     5. MOBILE MENU & SMOOTH SCROLLING
     ------------------------------------------------------------------------ */
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.className = 'fa-solid fa-xmark';
      } else {
        icon.className = 'fa-solid fa-bars';
      }
    });
  }

  // Close mobile menu on link click
  navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileToggle.querySelector('i').className = 'fa-solid fa-bars';
      }
    });
  });

  // Active section nav highlighter
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinkItems.forEach(item => {
          if (item.getAttribute('href') === `#${sectionId}`) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    });
  });
});
