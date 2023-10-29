const faders = document.querySelectorAll('.fade-in');
const returnButton = document.querySelector('.return');
const publications = document.querySelector('.list-page');

const appearOptions = { 
    threshold: 0.25,
    rootMargin: "0px 0px -20% 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

returnButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        returnButton.style.display = 'inline-block';
    } else {
        returnButton.style.display = 'none';
    }
});

console.log(window.scrollY)