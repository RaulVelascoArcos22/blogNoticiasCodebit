//Boton
document.querySelector('.menu-btn').addEventListener('click',()=>{
    document.querySelector('.nav-main ul.nav-menu').classList.toggle('show');

});
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.new-cards',{ delay: 1000});
ScrollReveal().reveal('.cards-banner-one',{ delay: 1000});
