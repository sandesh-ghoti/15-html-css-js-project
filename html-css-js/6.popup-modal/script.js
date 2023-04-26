const openbtn=document.querySelector(".box .btn");
const closebtn=document.querySelector(".box-1 .btn");
const box1=document.querySelector(".container-1")
openbtn.addEventListener("click",e=>{
    box1.classList.add("show-container");
})
closebtn.addEventListener("click",()=>{
    box1.classList.remove("show-container");
})