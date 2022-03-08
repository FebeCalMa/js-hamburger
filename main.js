console.log("JS OK!");

const hamburgerIcon = document.querySelector(".header-right > a");

const closeIcon = document.querySelector(".close");

const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerIcon.addEventListener("click",
  function () => {

    // hamburgerMenu.style.display = 'block';
    /*
    const classInElement = hamburgerMenu.className
    hamburgerMenu.className = classInElement + 'active';

    hamburgerMenu.className = hamburgerMenu.className + 'active'; 
  
    hamburgerMenu.className = 'active';
    */
    hamburgerMenu.classList('active');
});

closeIcon.classListener('click',
  function () {
    hamburgerMenu.classList.remove('active');
  }
)