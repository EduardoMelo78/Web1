function logar(event) {
    event.preventDefault(); 

    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

   
    if (usuario && senha) { 
        
        localStorage.setItem("usuario", usuario);

       
        window.location.href = "t2.html"; 
    } else {
       
        document.getElementById('error-message').style.display = 'block';
    }
}

function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (!nome || !email || !senha) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }
    return true;
}


window.onload = function() {
    const saudacaoElemento = document.getElementById('saudacao');
    const usuario = localStorage.getItem("usuario");

    if (saudacaoElemento && usuario) {
        saudacaoElemento.innerText = `Olá, ${usuario}`;
    }
};