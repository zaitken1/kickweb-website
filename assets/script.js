const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const contactBtn = document.querySelector('.nav-btn');

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// FAQ ACCORDION
const accordion = document.querySelectorAll('.accordion');
// const panel = document.querySelectorAll ('.accordion-panel');
let i;


for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        this.classList.toggle("active");

        panel = this.nextElementSibling;

        if (panel.style.display == "none") {
            panel.style.display = "block";
        } else if (panel.style.display == "block") {
            panel.style.display = "none";
            }

        })
}