function scrollLeft() {
    const container = document.getElementById("carrossel");
    container.scrollBy({
        top: 0,
        right: 200,
        behavior: 'smooth'
    });
}

function scrollRight() {
    const container = document.getElementById("carrossel");
    container.scrollBy({
        top: 0,
        left: 200,
        behavior: 'smooth'
    });
}