
const form = document.querySelector('.login-card');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const hora = new Date().toLocaleTimeString();

    // Credenciais para validação
    const validUser = "admin";
    const validPass = "123456";

    const status = (username === validUser && password === validPass) 
        ? "Sucesso" 
        : "Erro";

    console.log(`[${hora}] Tentativa: ${username} | Status: ${status}`);
});