let myMovies = [];
let AlreadySeenMovies = []; 
const newMovieInput = document.getElementById("newMovieInput");
const addNewMovie = document.getElementById("addNewBtn");
let newMoviesList = document.getElementById("newMoviesList");
let removeMovies = document.getElementById("removeBtn");

const storedMovies = JSON.parse(localStorage.getItem("myMovies")); 
if(storedMovies){
    myMovies = storedMovies;
    displayMovies();
}

function saveToStorage (movies){
    localStorage.setItem("myMovies", JSON.stringify(movies));
}


function addMovieToList (){   
    let newMovies = document.createElement("ul");
    newMovies.classList.add("list-group");

    let newMovie = document.createElement("li");
    newMovie.innerText = `${newMovieInput.value}`;
    newMovies.appendChild(newMovie);

    let closeMovieBtn = document.createElement("span");
    closeMovieBtn.innerHTML = `<ion-icon type="button" name="close-circle-outline"></ion-icon>`
    closeMovieBtn.classList.add("closeBtn");
    newMovie.appendChild(closeMovieBtn);

    if( newMovieInput.value === ""){
        alert("enter movie")
    }
    
     
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

addNewMovie.addEventListener("click", addMovieToList);


















