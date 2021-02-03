const heartCountContainer = document.querySelectorAll(".js-heartCount");
var clickTimer ;


function clickedAnim(target){
    if(!target.classList.contains("ani-clicked")){
        target.classList.add("ani-clicked");
        target.addEventListener("animationend", () =>{
            target.classList.remove("ani-clicked");
        })

        // using with Timer 
        //     clickTimer = setInterval(()=>{target.classList.toggle("clicked");
        // clearInterval(clickTimer);},500);

    }

}
function clicked(event){
    const span = event.target.parentNode.querySelector("span");
    clickedAnim(span);
    span.innerText ++;

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