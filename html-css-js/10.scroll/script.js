const menubtn = document.querySelector("nav .menubtn");
const navLinks = document.querySelector("nav .nav-links");
const linkCont = document.querySelector(".link-container");
const home = document.querySelector(".home");
const toplink = document.querySelector(".toplink");
// event listener for menu button
menubtn.addEventListener("click", () => {
    const linkContHeight = linkCont.getBoundingClientRect().height;
    const navLinksHeight = navLinks.getBoundingClientRect().height;
    if (linkContHeight === 0) {
        linkCont.style.height = `${navLinksHeight}px`;
    } else {
        linkCont.style.height = 0;
    }
});

// make year changeable
const date = document.querySelector(".footer .date");
date.innerHTML = new Date().getFullYear();

//fix navbar-- if user scroll navbar height then fix nav bar and user scroll whole home then show top link scroller
const navbar = document.querySelector("nav");
const navHeight = navbar.getBoundingClientRect().height;
const homeHeight = home.getBoundingClientRect().height;
window.addEventListener("scroll", (e) => {
    const scrollHeight = window.scrollY;
    if (scrollHeight > navHeight) {
        navbar.classList.add("fix");
    } else {
        navbar.classList.remove("fix");
    }
    if (scrollHeight > homeHeight) {
        toplink.classList.add("fixToplink");
    } else {
        toplink.classList.remove("fixToplink");
    }
});

// smooth scroll to all section
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link=>{
    link.addEventListener("click",e=>{
        e.preventDefault();
        // find section upto we have to scroll
        const eleClassName = e.currentTarget.getAttribute("href").slice(1);  //home
        // now get its location
        let position=document.getElementsByClassName(eleClassName)[0].offsetTop-navHeight;
        
        if(!navbar.classList.contains("fix")){
            position=position-navHeight;
        }
        window.scrollTo({
            left:0,
            top:position,
        });
        linkCont.style.height = 0;
    })
})
