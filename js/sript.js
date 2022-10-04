let myMovies = [];
let AlreadySeenMovies = []; 
let newMovieInput = document.getElementById("newMovieInput");
let addNewMovie = document.getElementById("addNewBtn");
let newMoviesList = document.getElementById("newMoviesList");
let selectedMovie = document.querySelector(".list-group");

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

const storedMovies = JSON.parse(localStorage.getItem("myMovies")); 
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
        movies += "<li class='list-group-item'>" + 
        myMovies[i] +
        "<ion-icon class='closeBtn' type='button' name='close-circle-outline' onclick='moveMovie()'></ion-icon>" + 
        "</li>"
    }
    newMoviesList.innerHTML = movies;
}

function moveMovie(){
    storedMovies.remove()
}

function selectMovie (e){
    const target = e.target;
    if (target.matches("li")){
         target.classList.toggle("listSelect");
    }
}



selectedMovie.addEventListener("click", selectMovie);
addNewMovie.addEventListener("click", addMovieToList);


















