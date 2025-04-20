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
    const emailPattern = /^[^\s@]+@gmail+\.com$/;

    if (email === '') {
        document.getElementById('email-error').textContent = '*Email is required';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('email-error').textContent = '*Enter a valid email address example@gmail.com';
        isValid = false;
    }

    const number = document.getElementById('number').value.trim();
    const phonePattern = /^03[0-9]{9}$/;
    if (number === '') {
        document.getElementById('number-error').textContent = '*Number is required';
        isValid = false;
    } else if (!phonePattern.test(number)) {
        document.getElementById('number-error').textContent = '*Number must start with 03 and exactly 11 digits';
        isValid = false;
    }

    if (isValid)
        alert('Your Form Submitted Successfully')

    return isValid;

}

// Right Click Disabled

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
