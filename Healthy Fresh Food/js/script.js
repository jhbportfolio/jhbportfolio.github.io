let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}

document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 300,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop:true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});





// back tot top

let backToTopBtn = document.querySelector('.back-to-top')

window.onscroll = () => {
    if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
        backToTopBtn.style.display = 'flex'
    } else {
        backToTopBtn.style.display = 'none'
    }
}




// all initial elements
const payAmountBtn = document.querySelector('#payAmount');
const decrementBtn = document.querySelectorAll('#decrement');
const quantityElem = document.querySelectorAll('#quantity');
const incrementBtn = document.querySelectorAll('#increment');
const priceElem = document.querySelectorAll('#price');
const subtotalElem = document.querySelector('#subtotal');
const taxElem = document.querySelector('#tax');
const shippingElem = document.querySelector('#shipping');
const totalElem = document.querySelector('#total');


// loop: for add event on multiple `increment` & `decrement` button
for (let i = 0; i < incrementBtn.length; i++) {

  incrementBtn[i].addEventListener('click', function () {

    // collect the value of `quantity` textContent,
    // based on clicked `increment` button sibling.
    let increment = Number(this.previousElementSibling.textContent);

    // plus `increment` variable value by 1
    increment++;

    // show the `increment` variable value on `quantity` element
    // based on clicked `increment` button sibling.
    this.previousElementSibling.textContent = increment;

    totalCalc();

  });


  decrementBtn[i].addEventListener('click', function () {

    // collect the value of `quantity` textContent,
    // based on clicked `decrement` button sibling.
    let decrement = Number(this.nextElementSibling.textContent);

    // minus `decrement` variable value by 1 based on condition
    decrement <= 1 ? 1 : decrement--;

    // show the `decrement` variable value on `quantity` element
    // based on clicked `decrement` button sibling.
    this.nextElementSibling.textContent = decrement;

    totalCalc();

  });

}



// function: for calculating total amount of product price
const totalCalc = function () {

  // declare all initial variable
  const tax = 0.05;
  let subtotal = 0;
  let totalTax = 0;
  let shipping = 0;
  let total = 0;

  // loop: for calculating `subtotal` value from every single product
  for (let i = 0; i < quantityElem.length; i++) {

    subtotal += Number(quantityElem[i].textContent) * Number(priceElem[i].textContent);

  }

  // show the `subtotal` variable value on `subtotalElem` element
  subtotalElem.textContent = subtotal.toFixed(2);

  // calculating the `totalTax`
  totalTax = subtotal * tax;

  // show the `totalTax` on `taxElem` element
  taxElem.textContent = totalTax.toFixed(2);

  // calcualting the `total`
  total = subtotal + totalTax + shipping;

  // show the `total` variable value on `totalElem` & `payAmountBtn` element
  totalElem.textContent = total.toFixed(2);
  payAmountBtn.textContent = total.toFixed(2);

}




