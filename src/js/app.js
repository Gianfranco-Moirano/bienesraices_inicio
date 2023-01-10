document.addEventListener("DOMContentLoaded", function() {
    eventlisteners();

    darkMode();
});

function darkMode() {

    const prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

    if(prefiereDarkMode.matches) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }

    prefiereDarkMode.addEventListener("change", function() {
        if(prefiereDarkMode.matches) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    });

    const botonDarkMode = document.querySelector(".dark-mode-button");

    botonDarkMode.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    })
}

function eventlisteners() {
    const mobileMenu = document.querySelector(".mobile-menu");

    mobileMenu.addEventListener("click", navegacionResponsive);
}

function navegacionResponsive() {
    const navegacion = document.querySelector(".navegacion");

    navegacion.classList.toggle("mostrar");
}
