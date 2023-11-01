// script.js
const header = document.querySelector('header');

header.addEventListener('mouseover', () => {
    header.style.backgroundColor = '#005a9e';
});

header.addEventListener('mouseout', () => {
    header.style.backgroundColor = '#0078d4';
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
