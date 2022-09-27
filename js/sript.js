let newMovies = document.getElementById("newMovies");
let watchedMovies = document.getElementById("watchedMovies");;
let moveLeft = document.getElementsByClassName("btnLeft");
let moveRight = document.getElementsByClassName("btnRight");

//general event listener
function allEventListeners(type, selector, callback){
    document.addEventListener(type, e => {
       if (e.target.matches(selector)) callback(e)
    })
}

allEventListeners("click", "li", e => {e.target.classList.toggle("listSelect")});
allEventListeners("click", "ion-icon", e => {console.log("guyyyyyyyyyyy")})


//input function
function movieInput (){   
    return prompt().value.length
}

console.log(prompt().value.length);

function addNewMovie (){
   
}

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
