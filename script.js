/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


/* ----- TYPING EFFECT ----- */
 var typingEffect = new Typed(".typedText",{
    strings : ["Cloud Azure Engineer","Devops Engineer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})
srLeft.reveal('.left-exp',{delay: 500})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})
srRight.reveal('.right-exp',{delay: 500})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)



//< ------------------Skills Section------------>

const skills = [
  { name: 'Java', category: 'Programming Languages' },
  { name: 'Python', category: 'Programming Languages' },
  { name: 'PowerShell', category: 'Scripting' },
  { name: 'Bash', category: 'Scripting' },
  { name: 'SQL', category: 'Database' },
  { name: 'Power Automate', category: 'Automation' },
  { name: 'n8n', category: 'Automation' },
  { name: 'Azure Logic Apps', category: 'Cloud Services' },
  { name: 'Azure Functions', category: 'Cloud Services' },
  { name: 'Terraform', category: 'Infrastructure as Code' },
  { name: 'Microsoft Power BI', category: 'Business Intelligence' },
  { name: 'Snowflake', category: 'Database' },
  { name: 'Microsoft Office Suite', category: 'Productivity Tools' },
  { name: 'Azure DevOps', category: 'DevOps' },
  { name: 'Azure Kubernetes Service (AKS)', category: 'Container Orchestration' },
  { name: 'Docker', category: 'Containerization' },
  { name: 'Git', category: 'Version Control' }
];

class SkillsSlider {
  constructor(skills) {
      this.skills = skills;
      this.currentIndex = 0;
      this.itemsPerView = 3;
      this.track = document.querySelector('.skills-track');
      this.dotsContainer = document.querySelector('.slider-dots');
      
      this.init();
      this.setupEventListeners();
      this.updateDots();
  }

  init() {
      // Create skill cards
      this.skills.forEach(skill => {
          const card = document.createElement('div');
          card.className = 'skill-card';
          card.innerHTML = `
              <div class="skill-name">${skill.name}</div>
              <div class="skill-category">${skill.category}</div>
          `;
          this.track.appendChild(card);
      });

      // Create dots
      const dotsCount = Math.ceil(this.skills.length / this.itemsPerView);
      for (let i = 0; i < dotsCount; i++) {
          const dot = document.createElement('div');
          dot.className = 'dot';
          dot.addEventListener('click', () => this.goToSlide(i * this.itemsPerView));
          this.dotsContainer.appendChild(dot);
      }
  }

  setupEventListeners() {
      document.querySelector('.prev-button').addEventListener('click', () => this.prev());
      document.querySelector('.next-button').addEventListener('click', () => this.next());

      // Keyboard navigation
      document.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowLeft') this.prev();
          if (e.key === 'ArrowRight') this.next();
      });
  }

  updateSlider() {
      const cardWidth = this.track.children[0].offsetWidth + 20; // including gap
      const offset = -this.currentIndex * cardWidth;
      this.track.style.transform = `translateX(${offset}px)`;
      this.updateDots();
  }

  updateDots() {
      const dots = this.dotsContainer.children;
      const currentDot = Math.floor(this.currentIndex / this.itemsPerView);
      
      Array.from(dots).forEach((dot, index) => {
          dot.classList.toggle('active', index === currentDot);
      });
  }

  next() {
      const maxIndex = this.skills.length - this.itemsPerView;
      this.currentIndex = Math.min(this.currentIndex + this.itemsPerView, maxIndex);
      this.updateSlider();
  }

  prev() {
      this.currentIndex = Math.max(this.currentIndex - this.itemsPerView, 0);
      this.updateSlider();
  }

  goToSlide(index) {
      this.currentIndex = index;
      this.updateSlider();
  }
}

// Initialize the slider
const slider = new SkillsSlider(skills);

// Responsive handling
window.addEventListener('resize', () => {
  if (window.innerWidth <= 480) {
      slider.itemsPerView = 1;
  } else if (window.innerWidth <= 768) {
      slider.itemsPerView = 2;
  } else {
      slider.itemsPerView = 3;
  }
  slider.updateSlider();
});