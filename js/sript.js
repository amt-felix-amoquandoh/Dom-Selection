document.querySelector("#listGroup").addEventListener("click", function(e){
    const target = e.target;
    if(target.matches("li")){
        target.classList.toggle("selectedItem");
    }  
})

