const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible');

  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', 'true');
    navToggle.setAttribute('aria-expanded', 'true');
  } else {
    primaryNav.setAttribute('data-visible', 'false');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

const currentLocation = window.location.pathname;
for (child in primaryNav.children) {
  if (child !== 'length' && child !== 'item' && child !== 'namedItem') {
    let ref = primaryNav.children[child].children[0].getAttribute('href');
    primaryNav.children[child].className = (ref === currentLocation) ? 'link active' : 'link';
  }
}