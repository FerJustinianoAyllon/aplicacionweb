const imagenes = document.querySelectorAll(".card img");

imagenes.forEach(img => {
    img.addEventListener("click", () => {
        img.style.opacity = "0.5"; 
        alert("Seleccionaste esta imagen");
    });
});