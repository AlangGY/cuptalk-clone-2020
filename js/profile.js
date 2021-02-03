const profileImage =document.querySelectorAll(".js-profileImage");
let profileTextArray =[];
var profileObj = {
    cuphead: {
        comment: 'fuck!'
    },
    mugman: {
        comment: 'shit!'
    },
    devil: {
        comment: 'GoToHell!'
    }
};
console.log(profileObj);


function removeBox(event){
    const removeBox = event.target;
    removeBox.querySelector("span").remove();
    removeBox.classList.remove("whiteBox");
    removeBox.classList.add("whiteBox__hide");
    removeBox.addEventListener("animationend",()=>{
        removeBox.remove();
    })

}

function getText(target){
    if(target.classList.contains("js-profile__Cuphead")){
        return profileObj.cuphead.comment;
    }
    if(target.classList.contains("js-profile__Mugman")){
        return profileObj.mugman.comment;
    }
    if(target.classList.contains("js-profile__Devil")){
        return profileObj.devil.comment;
    }

}

function showBox(event){
    const main = document.querySelector(".main-screen");
    const box = document.createElement("div");
    const text =document.createElement("span");
    if(!main.querySelector(".whiteBox")){
        box.classList.add("whiteBox");
        main.appendChild(box);
        box.addEventListener("animationend",()=>{
            text.classList.add("boxText");
            box.appendChild(text);
            text.innerText= getText(event.target.parentNode);
  
        })
        box.addEventListener("click",removeBox);
    }

}

function clickProfileImage(){
    for(var i=0; i<profileImage.length; i++){
        profileImage[i].addEventListener("click",showBox);
    }

}

function init(){
    clickProfileImage();
}

init();