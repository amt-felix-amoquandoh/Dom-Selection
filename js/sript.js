let newMovies = document.getElementById("newMovies");
let watchedMovies = document.getElementById("watchedMovies");;
let moveLeft = document.getElementsByClassName("btnLeft");
let moveRight = document.getElementsByClassName("btnRight");
let addMovie = document.getElementById("addBtn");

function allEventListeners(type, selector, callback){
    document.addEventListener(type, e => {
       if (e.target.matches(selector)) callback(e)
    })
}

allEventListeners("click", "li", e => {e.target.classList.toggle("listSelect")});
allEventListeners("click", "ion-icon", e => {console.log("guyyyyyyyyyyy")})

addMovie.addEventListener("click", function(){
    let newMovie = prompt("Enter Movie");

    newMovies.append(newMovie);
    newMovie.classList.add("list-group-items")
})

moveRight.addEventListener("click", function(){
    console.log("right")
})

moveLeft.addEventListener("click", function(){
    console.log("left")
})


// const listGroup = document.getElementById("listGroup");
// const newMovie = document.createElement("li");

// newMovie.innerText = prompt("add movie");
// newMovie.setAttribute("class", "list-group-item");

// listGroup.appendChild(newMovie);
