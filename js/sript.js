let newMovie = document.getElementById("newMovie");
let removeMovie = document.getElementById("removeBtn");
let movieList = document.getElementById("newMovies");
let watchedMovies = document.getElementById("watchedMovies");;
let moveLeft = document.getElementsByClassName("btnLeft");
let moveRight = document.getElementsByClassName("btnRight");
let addMovie = document.getElementById("addBtn");
let listedMovie = document.querySelector("li");

//general event listener
let selectedMovie = listedMovie.addEventListener("click", function(e){
    const target = e.target;
    if (target.matches("li")){
        target.classList.toggle("listSelect")
    }
    return selectedMovie;
})


// function allEventListeners(type, selector, callback){
//     document.addEventListener(type, e => {
//        if (e.target.matches(selector)) callback(e)
//     })
// }



// allEventListeners("click", "li", e => {e.target.classList.toggle("listSelect")});
// allEventListeners("click", "ion-icon", e => {console.log("guyyyyyyyyyyy")})

addMovie.addEventListener("click", addMovieToList);
removeMovie.addEventListener("click", removeFromList);

//input function
function movieInput (){   
    return newMovie.value.length
}


// adding new movie to DOM
function addNewMovie (){
    var movie = document.createElement("li");
    movie.appendChild(document.createTextNode(newMovie.value));
    movieList.appendChild(movie);
    movie.classList.add("list-group-item")
    newMovie.value = "";  
}

function addMovieToList (){
    if(movieInput() > 0){
        addNewMovie();
}
}

//removing movie from list
function removeFromList(){
    selectedMovie.remove();
}



















