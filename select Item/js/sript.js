document.querySelector("#listGroup").addEventListener("click", function(e){
    const target = e.target;
    if(target.matches("li")){
        target.style.backgroundColor = "orange"
    }
})


// const listGroup = document.getElementById("listGroup");
// const newMovie = document.createElement("li");

// newMovie.innerText = prompt("add movie");
// newMovie.setAttribute("class", "list-group-item");

// listGroup.appendChild(newMovie);
