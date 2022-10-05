let myMovies = [];
let AlreadySeenMovies = []; 
let newMovieInput = document.getElementById("newMovieInput");
let addNewMovie = document.getElementById("addNewBtn");
let newMoviesList = document.getElementById("newMoviesList");
let selectedMovie = document.querySelector(".list-group");
let removeMovies = document.getElementById("removeBtn");
let closeMovie = document.getElementsByClassName("closeBtn");



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
        "<ion-icon class='closeBtn' type='button' name='close-circle-outline'></ion-icon>" + 
        "</li>"
    }
    newMoviesList.innerHTML = movies;    
}

function moveMovie(){
    console.log("trieeeeeeeee")
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

closeMovie.addEventListener("click", moveMovie)
removeMovies.addEventListener("click", removeAllMovies)
selectedMovie.addEventListener("click", selectMovie);
addNewMovie.addEventListener("click", addMovieToList);


















