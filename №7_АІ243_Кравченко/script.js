const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const birthdateInput = document.getElementById('birthdate');
const passwordInput = document.getElementById('password');
const confirmInput = document.getElementById('confirm_password');

function validateName() {
    const value = nameInput.value.trim();
    const group = nameInput.closest('.form-group');
    const isValid = value.length >= 2;
    
    if (isValid) {
        nameInput.classList.add('valid');
        nameInput.classList.remove('invalid');
        group.classList.remove('error');
    } else {
        nameInput.classList.add('invalid');
        nameInput.classList.remove('valid');
        group.classList.add('error');
    }
    return isValid;
}

function validateEmail() {
    const value = emailInput.value.trim();
    const group = emailInput.closest('.form-group');
    const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
    const isValid = emailRegex.test(value);
    
    if (isValid) {
        emailInput.classList.add('valid');
        emailInput.classList.remove('invalid');
        group.classList.remove('error');
    } else {
        emailInput.classList.add('invalid');
        emailInput.classList.remove('valid');
        group.classList.add('error');
    }
    return isValid;
}

function validatePhone() {
    const value = phoneInput.value.trim();
    const group = phoneInput.closest('.form-group');
    const digits = value.replace(/\D/g, '');
    const isValid = digits.length >= 10 && digits.length <= 15;
    
    if (isValid) {
        phoneInput.classList.add('valid');
        phoneInput.classList.remove('invalid');
        group.classList.remove('error');
    } else {
        phoneInput.classList.add('invalid');
        phoneInput.classList.remove('valid');
        group.classList.add('error');
    }
    return isValid;
}

function validateBirthdate() {
    const value = birthdateInput.value;
    const group = birthdateInput.closest('.form-group');
    const isValid = value !== '';
    
    if (isValid) {
        birthdateInput.classList.add('valid');
        birthdateInput.classList.remove('invalid');
        group.classList.remove('error');
    } else {
        birthdateInput.classList.add('invalid');
        birthdateInput.classList.remove('valid');
        group.classList.add('error');
    }
    return isValid;
}

function validatePassword() {
    const value = passwordInput.value;
    const group = passwordInput.closest('.form-group');
    const hasLetters = /[A-Za-z]/.test(value);
    const hasDigits = /\d/.test(value);
    const isValid = value.length >= 8 && hasLetters && hasDigits;
    
    if (isValid) {
        passwordInput.classList.add('valid');
        passwordInput.classList.remove('invalid');
        group.classList.remove('error');
    } else {
        passwordInput.classList.add('invalid');
        passwordInput.classList.remove('valid');
        group.classList.add('error');
    }
    return isValid;
}

function validateConfirm() {
    const password = passwordInput.value;
    const confirm = confirmInput.value;
    const group = confirmInput.closest('.form-group');
    const isValid = password === confirm && password !== '';
    
    if (isValid) {
        confirmInput.classList.add('valid');
        confirmInput.classList.remove('invalid');
        group.classList.remove('error');
    } else {
        confirmInput.classList.add('invalid');
        confirmInput.classList.remove('valid');
        group.classList.add('error');
    }
    return isValid;
}

function validateForm() {
    return validateName() && validateEmail() && validatePhone() && 
           validateBirthdate() && validatePassword() && validateConfirm();
}

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
phoneInput.addEventListener('input', validatePhone);
birthdateInput.addEventListener('change', validateBirthdate);
passwordInput.addEventListener('input', validatePassword);
confirmInput.addEventListener('input', validateConfirm);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (validateForm()) {
        alert('Реєстрація успішна! Ласкаво просимо до медичного кабінету.');
        form.reset();
        [nameInput, emailInput, phoneInput, birthdateInput, passwordInput, confirmInput].forEach(input => {
            input.classList.remove('valid', 'invalid');
            input.closest('.form-group').classList.remove('error');
        });
    } else {
        alert('Будь ласка, виправте помилки у формі перед надсиланням.');
    }
});