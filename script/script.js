// Responsive burger menu for mobile. The burger menu will popout if width < 1280px

const burgerMenu = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

burgerMenu.addEventListener('click', ()=>{ 
    menu.classList.toggle('show');
})

// Contact form popout after submission 

const formSubmit = document.querySelector('.contactForm');

formSubmit.addEventListener('submit', function(e){
    e.preventDefault();
    
    const userName = document.getElementById('name').value;
    const userEmail = document.getElementById('email').value; 

        if (userName === "" && userEmail  === "") {

            alert('Please enter your name and email to contact us!');

        } else {

            alert(`Hey ${userName} we will follow up with you at ${userEmail} as soon as we can! Thank you for your patience!`);

        }

});