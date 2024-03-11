function showForm(formId) {
    var forms = document.getElementsByClassName('form');
    for (var i = 0; i < forms.length; i++) {
        forms[i].style.display = 'none';
    }

    var tabs = document.getElementsByClassName('tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }

    document.getElementById(formId).style.display = 'block';

    var activeTab = document.getElementById(formId.replace('Form', 'Tab'));
    activeTab.classList.add('active');
}

function signup() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var signupUsername = document.getElementById('signupUsername').value;
    var signupPassword = document.getElementById('signupPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Check if passwords match
    if (signupPassword !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    // Store the data in localStorage (not secure for real-world scenarios)
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('username', signupUsername);
    localStorage.setItem('password', signupPassword);

    alert('Sign up successful! You can now log in.');
}

function login() {
    var loginUsername = document.getElementById('loginUsername').value;
    var loginPassword = document.getElementById('loginPassword').value;

    // Retrieve stored data from localStorage
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        alert('Login successful! Redirecting to the website.');
        window.location.href = 'https://getbootstrap.com/';
    } else {
        alert('Invalid username or password');
    }
}
