var typed = new Typed(".effect",{
    strings:[
        "Developer", "Designer",
        "Freelancer"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
});


// Get references to the elements
const body = document.querySelector('body');
const navToggle = document.querySelector('#nav-toggle');
const navlist = document.querySelector('.navlist');

// Function to toggle the mobile menu
function toggleMobileMenu() {
  navlist.classList.toggle('open'); // Toggle the "open" class
  body.classList.toggle('no-scroll'); // Toggle the "no-scroll" class on the body
}

// Add an event listener to the mobile menu toggle
navToggle.addEventListener('click', toggleMobileMenu);



$(window).scroll(function(){

    if(this.scrollY > 200){
        $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
            }

      // Scrolling Button Btn
      if(this.scrollY >500){
        $('.scroll-up-btn').addClass("show");
        }else{
        $('.scroll-up-btn').removeClass("show");
        }   
});
//slide-up script
$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop:0});
});

// header functions
const header = document.querySelector("nav");
window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 100);
});


window.onscroll = () => {
    menu.classList.remove('icon-burger');
    navlist.classList.remove('open');
};


// const navToggle = document.getElementById('nav-toggle');
const navList = document.querySelector('.navlist');
const headerBg = document.querySelector('.header-bg');

navToggle.addEventListener('click', function() {
  navList.classList.toggle('nav-open');
  headerBg.classList.toggle('header-bg');
});
