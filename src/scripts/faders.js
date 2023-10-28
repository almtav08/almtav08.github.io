const faders = document.querySelectorAll('.fade-in');
const returnButton = document.querySelector('.return-button');
const publications = document.querySelector('.publications');

const appearOptions = { 
    threshold: 0.5,
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
    publications.scrollTo({top: 0, behavior: 'smooth'});
    console.log('clicked');
});

publications.addEventListener('scroll', () => {
    if (publications.scrollTop > 0) {
        returnButton.style.display = 'grid';
    } else {
        returnButton.style.display = 'none';
    }
});