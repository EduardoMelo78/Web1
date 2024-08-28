function scrollLeft() {
    const container = document.getElementById("carrossel");
    container.scrollBy({
        top: 0,
        left: -200, // Ajuste o valor conforme necessário
        behavior: 'smooth' // Rolagem suave
    });
}

function scrollRight() {
    const container = document.getElementById("carrossel");
    container.scrollBy({
        top: 0,
        left: 200, // Ajuste o valor conforme necessário
        behavior: 'smooth' // Rolagem suave
    });
}