
/* ------------------------------ Constants ------------------------------ */
const nav_elements = document.querySelectorAll('.active-section li');
const menu_icon_container = document.getElementById("menu-icon-container");
const top_bar = document.getElementById("top-bar");

const features = document.getElementById("features");
const howItWorks = document.getElementById("how-it-works");
const techSpecs = document.getElementById("tech-specs");

const menu_open = document.getElementById("menu-btn");
const menu_close = document.getElementById("menu-close-btn");
const dropdown_menu = document.querySelector('.dropdown-menu');
const dropdown_links = dropdown_menu.querySelectorAll('a');

const color_buttons = document.querySelectorAll('#color-img-container button');
const product_imgs = document.querySelectorAll('.product-img');

const add_to_cart = document.getElementById("add-to-cart");

const form = document.getElementById("form");
const form_message = document.getElementById("form-message");

/* ---------------------------- Dynamic code ---------------------------- */
  window.addEventListener('load', function() {
    window.scrollTo(0, 0);
    dynamicSectionPadding();
  });

document.getElementById("copyright-year").textContent = new Date().getFullYear();

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
  dynamicSectionPadding();

  // Close the dropdown once the menu icon is hidden by the CSS breakpoint
  if (getComputedStyle(menu_icon_container).display === 'none') {
    closeMenu();
  }
});

// Handles menu open button clicks
menu_open.addEventListener("click", function() {
  dropdown_menu.classList.remove('hidden');
  menu_open.classList.add("hidden");
  menu_close.classList.remove("hidden");
});

// Handles menu close button clicks
menu_close.addEventListener("click", closeMenu);

// Closes the menu after picking a section
dropdown_links.forEach(link => {
  link.addEventListener("click", closeMenu);
});

// Displays the selected headphone color on click
color_buttons.forEach(button => {
  button.addEventListener("click", function() {
    product_imgs.forEach(img => {
      img.classList.toggle("hidden", img.id !== button.dataset.color);
    });
    document.documentElement.style.setProperty("--hover-color", button.dataset.hoverColor);
  });
});

// Shows confirmation after adding to cart
add_to_cart.addEventListener("click", function() {
  add_to_cart.textContent = "Added!";
  add_to_cart.disabled = true;
  setTimeout(function() {
    add_to_cart.textContent = "Add To Cart";
    add_to_cart.disabled = false;
  }, 1500);
});

// Handles newsletter signup
form.addEventListener("submit", function(event) {
  event.preventDefault();
  form.reset();
  form_message.classList.remove("hidden");
});

/* --------------------------- Functions --------------------------- */
// Closes the dropdown menu
function closeMenu() {
  dropdown_menu.classList.add('hidden');
  menu_open.classList.remove("hidden");
  menu_close.classList.add("hidden");
}

// Adds padding to each section dynamically
function dynamicSectionPadding() {
  let topBarHeight = top_bar.offsetHeight;

  features.style.paddingTop = topBarHeight + 'px';
  howItWorks.style.paddingTop = topBarHeight + 'px';
  howItWorks.style.paddingBottom = topBarHeight + 'px';
  techSpecs.style.paddingTop = topBarHeight + 'px';
}
