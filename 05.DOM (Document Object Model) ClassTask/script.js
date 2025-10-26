const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const toggleIcon = document.getElementById('toggleIcon');
const submitButton = document.getElementById('submit');

togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    toggleIcon.src = type === 'password' ? './icons/hide.png' : './icons/show.png';
});

submitButton.addEventListener('click', () => {
    console.clear();
    console.log('Name:', nameInput.value);
    console.log('Surname:', surnameInput.value);
    console.log('Email:', emailInput.value);
    console.log('Password:', passwordInput.value);
});
