
            // Select all the elements from the body with the class 'about-us'.
            const about_us = document.querySelectorAll(".about-us");
            const logo = document.querySelector(".logo");

            logo.addEventListener("click", clickHandler);

            // Select all the elements from the body with the class 'navbar-link'.
            const navbar_links = document.getElementsByClassName("navbar-link");
            const aboutus = document.getElementsByClassName("about-content")[0];
            const surprise = document.getElementsByClassName("about-content")[1];
            const background_aboutus = document.getElementById("background-aboutus");

            navbar_links[2].addEventListener("click", reduceMe);
            navbar_links[6].addEventListener("click", increaseMe);

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


for (const navbar_link of navbar_links) {
  
    if(navbar_link === about_us[0] || navbar_link === about_us[1]) {
        navbar_link.addEventListener("click", clickHandlerforAbout);
    } else {
        navbar_link.addEventListener("click", clickHandler);
    }
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
let mybutton = document.getElementById("up-button");
let mynav = document.getElementById("navbar");

let mediaQuery = window.matchMedia('(min-width: 20em)');

// When the user scrolls down 20px from the top of the document, show the button until the window reach 60px.
// When the user scrolls down 60px from the top of the document, show the button and the second navbar
window.onscroll = function() {scrollFunction()};

const myownway = document.querySelector('.myownway');

function scrollFunction() {
  let  href = [];
  href.push(navbar_links[2].getAttribute("href"), navbar_links[0].getAttribute("href"));
  let offsetTop = [];
  offsetTop.push(document.querySelector(href[0]).offsetTop, document.querySelector(href[1]).offsetTop);
if(mediaQuery.matches) {
  if(document.body.scrollTop >=  offsetTop[1]|| document.documentElement.scrollTop >= offsetTop[1]) {
    mybutton.style.display = "block";
    mynav.style.display = "block";
    if(document.body.scrollTop === offsetTop[0] || document.documentElement.srollTop === offsetTop[0]) {
        surprise.style.transform ="scaleX(100%)";
        aboutus.style.transition = "all 800ms linear 4ms";
        surprise.style.transition = "all 800ms linear 4ms";
        myownway.style.transform = "scaleX(100%)";
        myownway.style.transition = "all 800ms linear 4ms";
        background_aboutus.setAttribute("style", "transform:scaleX(100%)");
    }

    for(let index = 0; index < 4; index++) {
        document.getElementsByClassName("navbar-link")[index].style.visibility = "hidden";
    }

  } else {

    mynav.style.display = "none";
    mybutton.style.display = "none";
    surprise.style.transform ="scaleX(0)";
    aboutus.style.backgroundColor = "hsla(120, 73%, 75%, 0.432)";
    aboutus.style.transition = "all 800ms linear 4ms";
    myownway.style.transform = "scaleX(0)";
    background_aboutus.setAttribute("style", "transform:scaleX(0)");

    for(let index = 0; index < 4; index++) {
        document.getElementsByClassName("navbar-link")[index].style.visibility = "visible";
    }

  }

 }

}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 