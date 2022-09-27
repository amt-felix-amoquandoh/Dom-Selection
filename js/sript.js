let newMovie = document.getElementById("newMovie");
let movieList = document.getElementById("newMovies");
let watchedMovies = document.getElementById("watchedMovies");;
let moveLeft = document.getElementsByClassName("btnLeft");
let moveRight = document.getElementsByClassName("btnRight");
let addMovie = document.getElementById("addBtn");

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
    return newMovie.value.length
}



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

function addOnEnterKeypress(event) {
        if(movieInput() > 1 && event.key === "Enter" ){
            addNewMovie();
            event.preventDefault();
    }
}

addMovie.addEventListener("click", addMovieToList);
addMovie.addEventListener("keypress", addOnEnterKeypress);
















