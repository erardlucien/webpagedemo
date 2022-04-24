
// Select all the elements from the body with the class 'about-us'.
const about_us = document.getElementsByClassName("about-us");
const logo = document.querySelector(".logo");
const first_navigation = document.querySelector(".navbar");
const myownway = document.querySelector('.myownway');
// navigation_state tell if the first navbar is closed or opened.
let navigation_state = false;

// Select all the elements from the body with the class 'navbar-link'.
const navbar_links = document.getElementsByClassName("navbar-link");
const aboutus = document.getElementById("aboutus");
const surprise = document.getElementById("surprise");
const background_aboutus = document.getElementById("background-aboutus");

function reduceMe(event) {
  event.preventDefault();
  aboutus.style.transform = "scaleX(80%)";
  aboutus.style.transition = "all 800ms linear 4ms";
}

function increaseMe(event) {
  event.preventDefault();
  aboutus.style.transform = "scaleX(100%)";
  aboutus.style.transition = "all 800ms linear 4ms";
}

function showMenu(event) {
  event.preventDefault();
  // when the navigation_state is false, open the menu.
  if (navigation_state === false) {
    first_navigation.style.display = "block";
    navigation_state = true;
  } else {
    // when the navigation_state is true, close the menu.
    first_navigation.style.display = "none";
    navigation_state = false;
  }
}

function closeMenu(event) {
  event.preventDefault();
  first_navigation.style.display = "none";
  navigation_state = false;
}

function showText() {
  surprise.style.transform = "scaleX(100%)";
  myownway.style.transform = "scaleX(100%)";
  background_aboutus.style.transform = "scaleX(100%)";
}

function hideText() {
  surprise.style.transform = "scaleX(0)";
  myownway.style.transform = "scaleX(0)";
  background_aboutus.style.transform = "scaleX(0)";
}

function clickHandler(event) {

  event.preventDefault();

  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });

}

function clickHandlerforAbout(event) {

  event.preventDefault();

  scroll({
    top: document.body.getElementsByClassName("about")[0].offsetTop,
    behavior: "smooth"
  });

}


/* --------------------------experimental---------------------------------------
    const href = this.getAttribute("href");
    e.preventDefault();
 
   document.querySelector(href).scrollIntoView({
   behavior: "smooth"
   });
  --------------------------experimental--------------------------------------- */

//Get the button and navbar
const mybutton = document.getElementById("up-button");
const mynav = document.getElementById("navbar");

let mediaQuery = window.matchMedia('(min-width: 20em)');

if (!mediaQuery.matches) {
  logo.addEventListener("click", showMenu);
}

for (let index = 0; index < navbar_links.length; index++) {
  // if the display width is smaller than or equal to 19em = 304pixel,
  // then you can close de navbar, when the link is clicked.
  if (!mediaQuery.matches) {
    navbar_links[index].addEventListener("click", closeMenu);
  }
}

for (let index = 0; index < navbar_links.length; index++) {
  if (navbar_links[index] === about_us[0] || navbar_links[index] === about_us[1]) {

    navbar_links[index].addEventListener("click", clickHandlerforAbout);

  } else {

    navbar_links[index].addEventListener("click", clickHandler);

  }
}

window.addEventListener("scroll", function() {

  if ((document.body.scrollTop >= 20) || (document.documentElement.scrollTop >= 20)) {

    mynav.style.display = "block";
    mybutton.style.display = "block";

    for (let index = 0; index < 4; index++) {
      navbar_links[index].style.visibility = "collapse";
    }

    if(document.getElementById("about").getBoundingClientRect().top < window.innerHeight - 300) {
      showText();
    } else {
      hideText();
    }
    
  } else {

    mynav.style.display = "none";
    mybutton.style.display = "none";

    for (let index = 0; index < 4; index++) {
      navbar_links[index].style.visibility = "visible";
    }

    hideText();
  }

});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
