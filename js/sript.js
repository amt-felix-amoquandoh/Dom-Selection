let group1 = [];
let group2 = [];
let moveLeft = document.getElementsByClassName("btnLeft");
let moveRight = document.getElementsByClassName("btnRight");

function allEventListeners(type, selector, callback){
    document.addEventListener(type, e => {
       if (e.target.matches(selector)) callback(e)
    })
}

allEventListeners("click", "li", e => {e.target.classList.toggle("listSelect")})
allEventListeners("click", "ion-icon", e => {console.log("guyyyyyyyyyyy")})



// const listGroup = document.getElementById("listGroup");
// const newMovie = document.createElement("li");

// newMovie.innerText = prompt("add movie");
// newMovie.setAttribute("class", "list-group-item");

// listGroup.appendChild(newMovie);
