const navigationElements = document.querySelectorAll('.active-section li');

const menu_open = document.getElementById("menu-btn");
const menu_close = document.getElementById("menu-close-btn");
const dropdown_menu = document.querySelector('.dropdown-menu');

const gold_btn = document.getElementById("gold-button");
const black_btn = document.getElementById("black-button");
const white_btn = document.getElementById("white-button");

const gold_img = document.getElementById("gold");
const black_img = document.getElementById("black");
const white_img = document.getElementById("white");

window.addEventListener('scroll', () => {
  // Get the current scroll position and viewport height
  const scrollPosition = window.scrollY;
  const viewportHeight = window.innerHeight;

  // Find the section that is currently taking up the most of the viewport
  let maxVisibleArea = 0;
  let activeSectionId = '';

  // Iterate over each section
  document.querySelectorAll('section').forEach(section => {
    // Get the offset top, height, and visible area of the section
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const visibleArea = Math.min(scrollPosition + viewportHeight, sectionTop + sectionHeight) - Math.max(scrollPosition, sectionTop);

    // Update the active section if the current section has more visible area
    if (visibleArea > maxVisibleArea) {
      maxVisibleArea = visibleArea;
      activeSectionId = section.getAttribute('id');
    }
  });

  // Find the corresponding navigation element and add the highlight class
  const activeNavElement = document.querySelector(`.active-section li a[href="#${activeSectionId}"]`);
  if (activeNavElement) {
    navigationElements.forEach(element => {
      element.querySelector('a').classList.remove('highlight');
    });
    activeNavElement.classList.add('highlight');
  }
});

window.addEventListener('resize', function() {
  const menu_icon_container = document.getElementById("menu-icon-container");
  var screenWidth = window.innerWidth;

  if (screenWidth <= 1000) {
    menu_icon_container.classList.remove("hidden");
  }
  else if (screenWidth > 1000) {
    menu_icon_container.classList.add("hidden");
  }
});

menu_open.addEventListener("click", function() { 
  dropdown_menu.classList.remove('hidden');
  menu_open.classList.add("hidden");
  menu_close.classList.remove("hidden");
});

menu_close.addEventListener("click", function() { 
  dropdown_menu.classList.add('hidden');
  menu_open.classList.remove("hidden");
  menu_close.classList.add("hidden");
});

gold_btn.addEventListener("click", function() {
    gold_img.classList.remove("hidden");
    black_img.classList.add("hidden");
    white_img.classList.add("hidden");
    document.documentElement.style.setProperty("--hover-color", "#D4AF37");
});

black_btn.addEventListener("click", function() {
    black_img.classList.remove("hidden");
    gold_img.classList.add("hidden");
    white_img.classList.add("hidden");
    document.documentElement.style.setProperty("--hover-color", "#777777");
});

white_btn.addEventListener("click", function() {
    white_img.classList.remove("hidden");
    black_img.classList.add("hidden");
    gold_img.classList.add("hidden");
    document.documentElement.style.setProperty("--hover-color", "#ededed");
});