let myMovies = [];
let AlreadySeenMovies = []; 
let newMovieInput = document.getElementById("newMovieInput");
const addNewMovie = document.getElementById("addNewBtn");
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
    
     
    newMovieInput.value = "";
    saveToStorage(myMovies);
    displayMovies();  
}




function displayMovies (){
    let movies = "";
    for(let i = 0;i < myMovies.length; i++){
        
    }
    newMoviesList.innerHTML = movies;    
 }



function removeAllMovies (){
    localStorage.clear();
    myMovies = [];
    displayMovies();
}

removeMovies.addEventListener("click", removeAllMovies)
selectedMovie.addEventListener("click", selectMovie);
addNewMovie.addEventListener("click", addMovieToList);


















