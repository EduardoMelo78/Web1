function toggleOpcoes() {
    const opcoesMenu = document.getElementById('opcoesMenu');
    opcoesMenu.style.display = opcoesMenu.style.display === 'block' ? 'none' : 'block';
}

function verPerfil() {
    alert("Em atualizações futuras...");
}

function gerenciamentoAdmin() {
    alert("Em atualizações Futuras...");
}


function sair() {
    localStorage.removeItem("usuario");
    window.location.href = "login.html";
}