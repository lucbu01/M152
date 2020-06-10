function openNav() {
    let navbar = document.getElementById("navigation");

    if (!navbar.classList.contains("show")) {
        navbar.classList.add("show");
    }
}

function closeNav() {
    let navbar = document.getElementById("navigation");

    if (navbar.classList.contains("show")) {
        navbar.classList.remove("show");
    }
}
