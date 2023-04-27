const questions=document.querySelectorAll(".qanda")
questions.forEach((question,idx,arr)=>{
    const btn = question.querySelector("button");
    const ans= question.querySelector(".ans");
    // current logic 
    btn.addEventListener("click",(e)=>{
        if(ans.style.display=="none"){
            ans.style.display="block";
            e.target.classList.remove("fa-plus-square")
            e.target.classList.add("fa-minus-square")
        }
        else{
            ans.style.display="none";
            e.target.classList.remove("fa-minus-square")
            e.target.classList.add("fa-plus-square")
        }

        // to hidden others while using current
        questions.forEach(function (item) {
            if (item !== question) {
                // selecting icon directly because we will className their
                const btn1 = item.querySelector("button i");
                const ans1= item.querySelector(".ans");
                if(ans1.style.display=="block"){
                    ans1.style.display="none";
                    btn1.classList.remove("fa-minus-square")
                    btn1.classList.add("fa-plus-square")
                }
            }
        });
    })
})