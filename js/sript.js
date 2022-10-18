let myMovies = [];
let AlreadySeenMovies = []; 
const newMovieInput = document.getElementById("newMovieInput");
const addNewMovie = document.getElementById("addNewBtn");
const newMoviesList = document.getElementById("movieContainer");
let removeMovies = document.getElementById("removeBtn");

const storedMovies = JSON.parse(localStorage.getItem("myMovies")); 
if(storedMovies){
    myMovies = storedMovies;
}

function saveToStorage (movies){
    localStorage.setItem("myMovies", JSON.stringify(movies));
}


function addMovieToList (){   
    let newMovies = document.createElement("ul");
    newMovies.classList.add("list-group");

    let newMovie = document.createElement("li");
    newMovie.innerText = `${newMovieInput.value}`;
    newMovie.classList.add("list-group-item");
    newMovies.appendChild(newMovie);


    let closeMovieBtn = document.createElement("span");
    closeMovieBtn.innerHTML = `<ion-icon type="button" name="close-circle-outline"></ion-icon>`
    closeMovieBtn.classList.add("closeBtn");
    newMovie.appendChild(closeMovieBtn);

    if( newMovieInput.value === ""){
        alert("sorry enter a movie")
    } else{
        newMoviesList.appendChild(newMovies)
    }

    myMovies.push(newMovieInput);
    newMovieInput.value = "";
    saveToStorage(myMovies);
    console.log(myMovies)

    closeMovieBtn.addEventListener("click", function(e){
        let target = e.target;
        target.parentElement.parentElement.remove();
    })
    
}




function removeAllMovies (){
    localStorage.clear();
    myMovies = [];
    displayMovies();
}

removeMovies.addEventListener("click", removeAllMovies)

addNewMovie.addEventListener("click", addMovieToList);


















