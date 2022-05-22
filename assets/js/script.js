// NAV DROPMENU

const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');

burger.addEventListener('click', mobileMenu);

function mobileMenu() {
  burger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

// BACK TO TOP BUTTON
// var sButton = document.getElementById("scrollButton");
// window.onscroll=function(){
//     scrollFunc();
// }

// function scrollFunc(){
//     if (document.documentElement.scrollTop> 20){
//         sButton.style.display="block";
//     }else{
//         sButton.style.display="none";
//     }
// }

// function topScroll(){
//     document.documentElement.scrollTop=0;
// }


