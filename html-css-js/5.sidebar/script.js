const sidebar=document.querySelector("aside");
const barbtn=document.querySelector(".menubtn")
const clsbtn=document.querySelector(".bars");
barbtn.addEventListener("click",(e)=>{
    sidebar.classList.toggle("show-sidebar");
})
clsbtn.addEventListener("click",()=>{
    sidebar.classList.remove("show-sidebar")
})