const submit = document.querySelector('#submit');
const contact = document.querySelector('#email-contact-option');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    let email = document.querySelector('#email').value;
    let message = document.querySelector('#message').value;
    let subject = document.querySelector('#subject').value;
    
    window.open(`${contact.href}?email=${email}&subject${subject}&body=${message}`, '_blank');
    
    document.querySelector('#email').value = '';
    document.querySelector('#message').value = '';
    document.querySelector('#subject').value = '';
});