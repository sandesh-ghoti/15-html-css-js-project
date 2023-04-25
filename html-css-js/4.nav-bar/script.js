const navlinks = document.querySelector(".nav-links");
const bars = document.querySelector(".menubtn");
bars.addEventListener("click", (e) => {
    if (e.target.className == "fa-solid fa-x") {
        e.target.className = "fa-solid fa-bars";
        navlinks.style.display = "none";
    } else if (e.target.className == "fa-solid fa-bars") {
        e.target.className = "fa-solid fa-x";
        navlinks.style.display = "block";
        navlinks.style.transition = "all 0.3s linear;";
    }
});
