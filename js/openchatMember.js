const activebuttonsArray = document.querySelectorAll(".js-openchatMember");

function memberDown(event){
    const memberTargetButton = event.target;
    const memberTargetSpan = memberTargetButton.parentNode.querySelector("span");
    const memberTargetNum = memberTargetSpan.innerText.split(" ");
    memberTargetButton.innerText= "Active";
    memberTargetNum[0] --;
    memberTargetSpan.innerText = `${memberTargetNum[0]} ${memberTargetNum[1]}`;

}

function memberUp(event){
    const memberTargetButton = event.target;
    const memberTargetSpan = memberTargetButton.parentNode.querySelector("span");
    const memberTargetNum = memberTargetSpan.innerText.split(" ");
    memberTargetButton.innerText= "InActive";
    memberTargetNum[0] ++;
    memberTargetSpan.innerText = `${memberTargetNum[0]} ${memberTargetNum[1]}`;
}

function checkActive(event){
    if(event.target.innerText ==="Active"){
        memberUp(event);
    } else{
        memberDown(event);
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