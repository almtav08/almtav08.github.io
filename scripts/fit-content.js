const page = document.querySelector('.page');
const primaryHeader = document.querySelector('.primary-header');

page.setAttribute('style', 'height: calc(100vh - ' + primaryHeader.clientHeight + 'px - 1dvh)');