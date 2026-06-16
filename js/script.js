
const form = document.querySelector('.login-card');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const hora = new Date().toLocaleTimeString();

    const validUser = "admin";
    const validPass = "123456";

    const status = (username === validUser && password === validPass) 
        ? "Sucesso" 
        : "Erro";

    console.log(`[${hora}] Tentativa: ${username} | Status: ${status}`);
});



// const loginForm = document.querySelector('#login-form');
// const emailInput = document.querySelector('#email');
// const passwordInput = document.querySelector('#password');
// const massaheInput = document.querySelector('#massage');