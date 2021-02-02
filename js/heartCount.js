const heartCountContainer = document.querySelectorAll(".js-heartCount");


function clicked(event){
    const span = event.target.parentNode.querySelector("span");
    span.innerText ++;
    console.dir(span.innerText);
}

function clickHeart(){
    for(var i=0; i<heartCountContainer.length ; i++){
        heartCountContainer[i].addEventListener("click",clicked);
    }

}

function init(){
    clickHeart();


}
init();