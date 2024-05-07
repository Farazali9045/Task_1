let bar = document.querySelector(".fa-bars");
let hamMenu = document.querySelector(".ham-menu");
bar.addEventListener('click',function(){
    hamMenu.classList.toggle("active");
    bar.classList.toggle("fa-xmark");
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });