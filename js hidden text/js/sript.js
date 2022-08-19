const showText = document.querySelector(".showBtn");
const textInfo = document.querySelector(".hiddenText");


function showInfo(){
    if(textInfo.classList.contains("showBtn")){
        textInfo.classList.remove("showBtn")
        showText.innerText = "Show More"
    } else {
        textInfo.classList.add("showBtn");
        showText.innerText = "Reveal Less"
    }
}

showText.addEventListener("click", showInfo);