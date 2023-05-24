
/* ------------------------------ Constants ------------------------------ */
const nav_elements = document.querySelectorAll('.active-section li');

const top_bar = document.getElementById("top-bar");
const sections = document.querySelectorAll('section');

const product_wrapper = document.getElementById('product-wrapper');

const menu_open = document.getElementById("menu-btn");
const menu_close = document.getElementById("menu-close-btn");
const dropdown_menu = document.querySelector('.dropdown-menu');

const gold_btn = document.getElementById("gold-button");
const black_btn = document.getElementById("black-button");
const white_btn = document.getElementById("white-button");

const gold_img = document.getElementById("gold");
const black_img = document.getElementById("black");
const white_img = document.getElementById("white");

const sourround_sound_info = document.getElementById("surround-sound-info");

/* -------------------------- Global Variables -------------------------- */
var topBarHeight = top_bar.offsetHeight;
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

/* ---------------------------- Dynamic code ---------------------------- */
document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('load', function() {
    dynamicScreen()
    dynamicSectionPadding();
    keepOnScreen();
    window.scrollTo(0, 0);
  });
});

// Handles highlighting the current section
window.addEventListener('scroll', () => {
  // Get the current scroll position and viewport height
  const scrollPosition = window.scrollY;
  const viewportHeight = window.innerHeight;

  // Find the section that is currently taking up the most of the viewport
  var maxVisibleArea = 0;
  var activeSectionId = '';


  // Iterate over each section
  document.querySelectorAll('section').forEach(section => {
    // Get the offset top, height, and visible area of the section
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const visibleArea = Math.min(scrollPosition + viewportHeight, sectionTop + sectionHeight) - 
                        Math.max(scrollPosition, sectionTop);

    // Update the active section if the current section has more visible area
    if (visibleArea > maxVisibleArea) {
      maxVisibleArea = visibleArea;
      activeSectionId = section.getAttribute('id');
    }
  });

  // Find the corresponding navigation element and add the highlight class
  const activeNavElement = document.querySelector(`.active-section li a[href="#${activeSectionId}"]`);
  if (activeNavElement) {
    nav_elements.forEach(element => {
      element.querySelector('a').classList.remove('highlight');
    });
    activeNavElement.classList.add('highlight');
  }
});

// Handles screen changes on resize
window.addEventListener('resize', function() {
  dynamicScreen()
  dynamicSectionPadding();
});

// Handles menu open button clicks
menu_open.addEventListener("click", function() { 
  dropdown_menu.classList.remove('hidden');
  menu_open.classList.add("hidden");
  menu_close.classList.remove("hidden");
});

// Handles menu close button clicks
menu_close.addEventListener("click", function() { 
  dropdown_menu.classList.add('hidden');
  menu_open.classList.remove("hidden");
  menu_close.classList.add("hidden");
});

// Displays gold headphones on click
gold_btn.addEventListener("click", function() {
    gold_img.classList.remove("hidden");
    black_img.classList.add("hidden");
    white_img.classList.add("hidden");
    document.documentElement.style.setProperty("--hover-color", "#D4AF37");
});

// Displays black headphones on click
black_btn.addEventListener("click", function() {
    black_img.classList.remove("hidden");
    gold_img.classList.add("hidden");
    white_img.classList.add("hidden");
    document.documentElement.style.setProperty("--hover-color", "#777777");
});

// Displays white headphones on click
white_btn.addEventListener("click", function() {
    white_img.classList.remove("hidden");
    black_img.classList.add("hidden");
    gold_img.classList.add("hidden");
    document.documentElement.style.setProperty("--hover-color", "#ededed");
});

/* --------------------------- Functions --------------------------- */
// Display page differently based on screen size
function dynamicScreen() {
  const menu_icon_container = document.getElementById("menu-icon-container");

  if (screenWidth <= 1000 && screenHeight > 600) {
    menu_icon_container.classList.remove("hidden");
    if (menu_close.classList.contains("hidden")) {
      menu_open.classList.remove("hidden");
    }
  }
  else if (screenWidth > 1000) {
    menu_icon_container.classList.add("hidden");
    dropdown_menu.classList.add('hidden');
    menu_close.classList.add("hidden");
  }
}

// Adds padding to each sections dynamically
function dynamicSectionPadding() {
  var features = sections[1];
  var howItWorks = sections[2];
  var techSpecs = sections[3];
  if (sourround_sound_info.offsetTop < topBarHeight) {
    features.style.paddingTop = topBarHeight + topBarHeight/4 + 'px';
  }
  howItWorks.style.paddingTop = topBarHeight + topBarHeight/3 + 'px';
  techSpecs.style.paddingTop = topBarHeight + topBarHeight/3 + 'px';
}

// Keeps product section from going off top of screen
function keepOnScreen() {
  var product = sections[0];
  var productRect = product.getBoundingClientRect();
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var isOffTop = (productRect.top + scrollTop) < scrollTop;

  if (isOffTop) {
    var distanceOffTop = Math.abs(productRect.top);
    productPadding =  distanceOffTop - distanceOffTop/4;
    product.style.paddingTop = productPadding + 'px';
    product.style.paddingBottom = productPadding/2 + 'px';
  }
  else {
    var zero = 0;
    if (screenWidth <= 1000 && screenHeight >= 600) {
      product.style.paddingTop = '1.5vmax';
    }
    else {
      product.style.paddingTop = '6vh';
    }
    product.style.paddingBottom = zero + 'px';
  }
}