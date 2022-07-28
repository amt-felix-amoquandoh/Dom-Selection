const showText = document.querySelector(".showBtn");
const textInfo = document.querySelector(".hiddenText");


function showInfo(){
    if(textInfo.classList.contains("showBtn")){
        textInfo.classList.remove("showBtn")
    } else {
        textInfo.classList.add("showBtn")
    }
}

showText.addEventListener("click", showInfo);