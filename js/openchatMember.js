const activebuttonsArray = document.querySelectorAll(".js-openchatMember");

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

function checkActive(event){
    const memberTargetButton = event.target;
    const memberTargetSpan = memberTargetButton.parentNode.querySelector("span");
    const memberTargetNum = memberTargetSpan.innerText.split(" ");
    if(event.target.innerText ==="Active"){
        memberTargetButton.innerText= "InActive";
        clickedAnim(memberTargetButton);
        memberTargetNum[0] ++;
        memberTargetSpan.innerText = `${memberTargetNum[0]} ${memberTargetNum[1]}`;
    } else{
        memberTargetButton.innerText= "Active";
        clickedAnim(memberTargetButton);
        memberTargetNum[0] --;
        memberTargetSpan.innerText = `${memberTargetNum[0]} ${memberTargetNum[1]}`;
    
    }
}

function clickActive(){
    for(var i=0; i<activebuttonsArray.length; i++){
            activebuttonsArray[i].addEventListener("click",checkActive);

    }
}


function init(){
    clickActive();
}

init();