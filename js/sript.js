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

function saveToStorage (movie){
    localStorage.setItem("myMovies", JSON.stringify(movie));
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

    closeMovieBtn.addEventListener("click", function(e){
        let target = e.target;
        let targetedMovie = target.parentElement.parentElement;
        targetedMovie.remove();
        localStorage.removeItem(targetedMovie);
    })

    myMovies.push(newMovieInput.value);
    newMovieInput.value = "";
    saveToStorage(myMovies);
    console.log(newMovieInput.value)    
}

// 0501217514


function removeAllMovies (){
    localStorage.clear();
    myMovies = [];
}

removeMovies.addEventListener("click", removeAllMovies)

addNewMovie.addEventListener("click", addMovieToList);


















