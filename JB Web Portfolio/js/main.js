// hamburger nav menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    })

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))





//Portfolio section - Modal
const portfolioModals = document.querySelectorAll(".porfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");


var portfolioModal = function (modalClick) {
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});

//Website dark/light theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

//Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});








//Scroll reveal animations
//Common reveal options to create reveal animations
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 100
});


//Target elements, and specify options to create reveal animations
ScrollReveal().reveal('.home .info h2', { delay: 200, origin: 'top'});
ScrollReveal().reveal('.home .info p, .section-title-01, .section-title-02', { delay: 100, origin: 'left' });
ScrollReveal().reveal('.home .info h3, .about-info .btn, .home-img', { delay: 200, origin: 'right' });
ScrollReveal().reveal('.btn', { delay: 300, origin: 'bottom' });
ScrollReveal().reveal('.media-icons i, .contact-left li', { delay: 100, origin: 'left', interval: 100 });
ScrollReveal().reveal('.about-img', { delay: 300, origin: 'left' });
ScrollReveal().reveal('.about .description, .contact-right', { delay: 400, origin: 'right' });
ScrollReveal().reveal('.strength-list li', { delay: 100, origin: 'bottom'});
ScrollReveal().reveal('.skills-description, .qualification-description, .contact-left h2', { delay: 300, origin: 'left' });
ScrollReveal().reveal('.experience-card, .qualification-card, .education, .portfolio .img-card', { delay: 400, origin: 'bottom', interval: 100 });
ScrollReveal().reveal('footer .group, .scroll-down', { delay: 100, origin: 'top', interval: 100 });





