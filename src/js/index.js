//Humberger menu
const open = document.getElementById("open");
const overlay = document.querySelector(".overlay");
const close = document.getElementById("close");

<<<<<<< HEAD

=======
open.addEventListener("click",()=>{
    overlay.classList.add("show");
    open.classList.add("hide");
});

close.addEventListener("click",()=>{
    overlay.classList.remove("show");
    open.classList.remove("hide");
});

//Q&A section
>>>>>>> 411b959817bd59f31359ea47ed131c07d2ade7a6
const h4s = document.querySelectorAll("h4");
h4s.forEach(h4=>{
    h4.addEventListener("click",()=>{
        h4.parentNode.classList.toggle("appear");
        h4s.forEach(el=>{
            if(h4 !== el){
                el.parentNode.classList.remove("appear");
            }
        });
    });
});