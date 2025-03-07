// Home Section
var typing=new Typed(".text", {
    strings: ["","FREELANCER", "WEB DESIGNER", "WEB DEVELOPER"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// Contact Section

function validateForm() {
    isValid = true;

    const error = document.querySelectorAll('.error').forEach(error => error.textContent = '');

    const username = document.getElementById('username').value.trim();

    if (username === '') {
        document.getElementById('username-error').textContent = '*Username is required'
        isValid = false;

    } else if (username.length < 3) {
        document.getElementById('username-error').textContent = '*Username must be at least 3 character';
        isValid = false;

    }

    const email = document.getElementById('email').value.trim();

    if (email === '') {
        document.getElementById('email-error').textContent = '*Email is required'
        isValid = false;

    }

    const number = document.getElementById('number').value.trim();

    if (number === "") {
        document.getElementById('number-error').textContent = '*Number is required'
        isValid = false;

    } else if (number.length < 11) {
        document.getElementById('number-error').textContent = '*Number must be at least 11 character';
        isValid = false;

    }

    if (isValid)
        alert('Your Form Submitted Successfully')

    return isValid;

}
