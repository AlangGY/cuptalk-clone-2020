const heartContainer = document.querySelector(".js-heartCount");
      heartCount = heartContainer.querySelector("span");

var currentNum = heartCount.innerText;

function upNum(){
    currentNum  ++;
    heartCount.innerText = currentNum;
}

function getNum(){
    heartContainer.addEventListener("click",upNum)
}

function init(){
    getNum();
}

init();