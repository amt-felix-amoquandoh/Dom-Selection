// function allEventListeners(type, selector, callback){
//     document.addEventListener(type, e => {
//        if (e.target.matches(selector)) callback(e)
//     })
// }
// allEventListeners("click", "li", e => {e.target.classList.toggle("listSelect")});
// allEventListeners("click", "ion-icon", e => {console.log("guyyyyyyyyyyy")})



let myMovies = [];
let AlreadySeenMovies = []; 
let newMovieInput = document.getElementById("newMovieInput");
let addNewMovie = document.getElementById("addNewBtn");
let newMoviesList = document.getElementById("newMoviesList");

// let removeMovie = document.getElementById("removeBtn");
// let watchedMovies = document.getElementById("watchedMovies");;
// let moveLeft = document.getElementsByClassName("btnLeft");
// let moveRight = document.getElementsByClassName("btnRight");

// let listedMovie = document.querySelector("li");

// //general event listener
// let selectedMovie = listedMovie.addEventListener("click", function(e){
//     const target = e.target;
//     if (target.matches("li")){
//         target.classList.toggle("listSelect")
//     }
//     return selectedMovie;
// })

let storedMovies = JSON.parse(localStorage.getItem("myMovies")); 
if(storedMovies){
    myMovies = storedMovies;
    displayMovies();
}

function addMovieToList (){    
    if(newMovieInput.value.length > 1){
        myMovies.push(newMovieInput.value);
    }  
    newMovieInput.value = "";
    localStorage.setItem("myMovies", JSON.stringify(myMovies));
    displayMovies();  
}

function displayMovies (){
    let movies = "";
    for(let i = 0;i < myMovies.length; i++){
        movies += "<li class='list-group-item'>" + myMovies[i] + "</li>"
    }
    newMoviesList.innerHTML = movies;
}




addNewMovie.addEventListener("click", addMovieToList);


















