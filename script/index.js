const projects = [
  {
    title: "Kedai Kopi Senja",
    description: `A responsive website created using JavaScript and Python. This website was created as a form of my achievements while attending lectures in semester 1. You can check this project <br> <u><a href="https://github.com/Codenames-Ren/Kedai-Kopi-Senja" target="_blank">Here</a><u>`,
    icon: "fas fa-coffee",
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Animated Login Form",
    description: `A login form page created using HTML, CSS, and JavaScript. This login page features animations and combines register and login menus on a single page. Check this project <br> <u><a href="https://github.com/Codenames-Ren/Animated-Login-Form" target="_blank">Here</a><u>`,
    icon: "fas fa-sign-in-alt",
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Umrah Package E-Commerce Web",
    description: `A program created for Project 1 in my Campus. Using Golang for main language, HTML, CSS, and Javascript for UI design and PostgreeSQL for Databases. <br> Check this project<br><u><a href="https://mukromah-hijrah.ti24se3.my.id" target="_blank">Here</a><u>`,
    icon: "fa-solid fa-kaaba",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "ASCII Video Player",
    description: `A fun program that converts video into ASCII text using Python. The video can be played via Terminal with a unique visual effect. <br> Check this project<br><u><a href="https://github.com/Codenames-Ren/Project-Python/tree/main/Gabut" target="_blank">Here</a><u>`,
    icon: "fas fa-play",
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Internal Billing System for RT/RW NET Wifi",
    description: `Internal Billing System for Wifi RT/RW NET business. Easy to Use, connect with Mikrotik and run on local network, according to internal needs. Build with Golang for main language and PostgreeSQL for databases.<br> Check this project<br><u><a href="https://github.com/Codenames-Ren/Billing-System" target="_blank">Here</a><u> `,
    icon: "fa-solid fa-wifi",
    color: "from-green-500 to-blue-800",
  },
  {
    title: "Future Project",
    description:
      "More innovative solutions and creative projects coming your way. Stay tuned!",
    icon: "fas fa-rocket",
    color: "from-red-500 to-rose-600",
  },
];

// Typing animation
const typingTexts = [
  "Web Developer",
  "Software Engineer",
  "Programmer",
  "College Student",
  "Junior Web Developer",
];
let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing-text");

function typeAnimation() {
  const currentText = typingTexts[currentTextIndex];

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, currentCharIndex - 1);
    currentCharIndex--;
  } else {
    typingElement.textContent = currentText.substring(0, currentCharIndex + 1);
    currentCharIndex++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && currentCharIndex === currentText.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && currentCharIndex === 0) {
    isDeleting = false;
    currentTextIndex = (currentTextIndex + 1) % typingTexts.length;
    typeSpeed = 500;
  }

  setTimeout(typeAnimation, typeSpeed);
}

// Mobile menu toggle with improved animations
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileNav = document.getElementById("mobile-nav");

mobileMenuBtn.addEventListener("click", () => {
  const isHidden = mobileNav.classList.contains("hidden");
  const icon = mobileMenuBtn.querySelector("i");

  if (isHidden) {
    // Show menu
    mobileNav.classList.remove("hidden");
    mobileNav.classList.add("animate-slide-down");
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    // Hide menu
    mobileNav.classList.add("hidden");
    mobileNav.classList.remove("animate-slide-down");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-times");
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Close mobile menu if open
      mobileNav.classList.add("hidden");
      mobileNav.classList.remove("animate-slide-down");
      const icon = mobileMenuBtn.querySelector("i");
      icon.classList.add("fa-bars");
      icon.classList.remove("fa-times");
    }
  });
});

// Header background change on scroll
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 100) {
    header.classList.add("bg-black/90");
    header.classList.remove("bg-black/70");
  } else {
    header.classList.add("bg-black/70");
    header.classList.remove("bg-black/90");
  }
});

// Active navigation link highlighting
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Generate project cards
function generateProjects() {
  const projectsGrid = document.getElementById("projects-grid");
  projectsGrid.innerHTML = "";

  projects.forEach((project, index) => {
    const projectCard = document.createElement("div");
    projectCard.className = `project-card bg-primary rounded-3xl p-6 cursor-pointer hover:bg-transparent hover:border-2 hover:border-primary transition-all duration-300 group transform hover:scale-105 animate-fade-in`;
    projectCard.style.animationDelay = `${index * 0.1}s`;

    projectCard.innerHTML = `
      <div class="text-center space-y-4">
        <div class="w-16 h-16 mx-auto bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <i class="${project.icon} text-2xl text-white"></i>
        </div>
        <h3 class="text-xl font-semibold text-black group-hover:text-white mb-4">${project.title}</h3>
        <p class="text-black group-hover:text-gray-300 leading-relaxed">${project.description}</p>
      </div>
    `;

    // Add click event for project cards
    projectCard.addEventListener("click", () => {
      // You can add modal or navigation logic here
      console.log(`Clicked on project: ${project.title}`);
    });

    projectsGrid.appendChild(projectCard);
  });
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fade-in");
    }
  });
}, observerOptions);

// Click outside mobile menu to close
document.addEventListener("click", (e) => {
  const isClickInsideNav = mobileNav.contains(e.target);
  const isClickOnButton = mobileMenuBtn.contains(e.target);

  if (
    !isClickInsideNav &&
    !isClickOnButton &&
    !mobileNav.classList.contains("hidden")
  ) {
    mobileNav.classList.add("hidden");
    mobileNav.classList.remove("animate-slide-down");
    const icon = mobileMenuBtn.querySelector("i");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-times");
  }
});

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  typeAnimation();
  generateProjects();

  // Observe elements for scroll animations
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });

  // Add click ripple effect to buttons
  document.querySelectorAll("button, .btn").forEach((button) => {
    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.classList.add("ripple");

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Smooth scroll behavior for better UX
  document.documentElement.style.scrollBehavior = "smooth";
});

// Easter egg - click on name
let clickCount = 0;
document.addEventListener("DOMContentLoaded", () => {
  const nameElement = document.querySelector(".text-primary");
  if (nameElement) {
    nameElement.addEventListener("click", () => {
      clickCount++;
      if (clickCount === 5) {
        alert(
          "🎉 You found the easter egg! Thanks for exploring my portfolio!"
        );
        clickCount = 0;
      }
    });
  }
});

// Add some performance optimizations
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Debounced scroll event for better performance
const debouncedScroll = debounce(() => {
  const header = document.getElementById("header");
  if (window.scrollY > 100) {
    header.classList.add("bg-black/90");
    header.classList.remove("bg-black/70");
  } else {
    header.classList.add("bg-black/70");
    header.classList.remove("bg-black/90");
  }
}, 10);

window.addEventListener("scroll", debouncedScroll);
