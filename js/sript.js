let myMovies = [];
let AlreadySeenMovies = []; 
let newMovieInput = document.getElementById("newMovieInput");
let addNewMovie = document.getElementById("addNewBtn");
let newMoviesList = document.getElementById("newMoviesList");
let selectedMovie = document.querySelector(".list-group");
let removeMovies = document.getElementById("removeBtn");
let closeMovie = document.getElementsByClassName("closeBtn");
let userSelectedMovie = null;

const storedMovies = JSON.parse(localStorage.getItem("myMovies")); 
if(storedMovies){
    myMovies = storedMovies;
    displayMovies();
}

function saveToStorage (movies){
    localStorage.setItem("myMovies", JSON.stringify(movies));
}


function addMovieToList (){    
    if(newMovieInput.value.length > 1){
        myMovies.push(newMovieInput.value);
    }  
    newMovieInput.value = "";
    saveToStorage(myMovies);
    displayMovies();  
}




function displayMovies (){
    let movies = "";
    for(let i = 0;i < myMovies.length; i++){
        movies += "<li class='list-group-item'>" + 
        myMovies[i] +
        "<ion-icon class='closeBtn' type='button' name='close-circle-outline' onclick='onDeleteMovie(`${myMovie[i]}`)'></ion-icon>" + 
        "</li>"
    }
    newMoviesList.innerHTML = movies;    
}

function onDeleteMovie(passedMovie){
   const selectedId = myMovies.findIndex( movie => movie === passedMovie);
   const filteredMovies = myMovies.splice(selectedId, 1);
   saveToStorage(filteredMovies);
}


function selectMovie (e){
    let target = e.target;
    if (target.contains("li")){
         target.classList.toggle("listSelect");
    }
}

function removeAllMovies (){
    localStorage.clear();
    myMovies = [];
    displayMovies();
}

function onUserSelectedMovie (selectedMovie){
    userSelectedMovie = selectedMovie;
}


removeMovies.addEventListener("click", removeAllMovies)
selectedMovie.addEventListener("click", selectMovie);
addNewMovie.addEventListener("click", addMovieToList);


















