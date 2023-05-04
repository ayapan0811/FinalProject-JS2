

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