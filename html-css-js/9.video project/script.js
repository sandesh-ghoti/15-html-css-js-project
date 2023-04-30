const video = document.querySelector("video");
const btn = document.querySelector("header button");
const switchbtn = document.querySelector(".switch");
const preloader = document.querySelector(".preloader");
window.addEventListener("load", () => {
    preloader.classList.add("hide-preloader");
});
video.addEventListener("click", (e) => {
    console.log(e);
});

btn.addEventListener("click", (e) => {
    if (!btn.classList.contains("slide")) {
        btn.classList.add("slide");
        video.pause();
    } else {
        btn.classList.remove("slide");
        video.play();
    }
});
