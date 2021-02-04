const profileImage = document.querySelectorAll(".js-profileImage");
var chatLink;
var callLink;
var storyLink;
var profileObj = {
    cuphead: {
        backgroundImage: 'css/images/cupheadMugman.jpg',
        profileImage: 'css/images/cupheadProfile2.png',
        name: 'Cuphead',
        comment: 'Hello!',
        chatLink: '',
        callNumber: '',
        storyLink: ''
    },
    mugman: {
        backgroundImage: 'css/images/mugman.jpg',
        profileImage: 'css/images/mugmanProfile2.png',
        name: 'Mugman',
        comment: 'I hate Cuphead!!',
        chatLink: './chat-Mugman.html',
        callNumber: '',
        storyLink: ''


    },
    devil: {
        backgroundImage: 'css/images/devil.gif',
        profileImage: 'css/images/devilProfile1.gif',
        name: 'Devil',
        comment: '빚갚을시간!!!!!!!!!',
        chatLink: './chat-Devil.html',
        callNumber: '',
        storyLink: ''
    }
};

function getChat(target) {
    if (target.classList.contains("js-profile__Cuphead")) {
        return profileObj.cuphead.chatLink;
    }
    if (target.classList.contains("js-profile__Mugman")) {
        return profileObj.mugman.chatLink;
    }
    if (target.classList.contains("js-profile__Devil")) {
        return profileObj.devil.chatLink;
    }
}
function getCall(target) {
    if (target.classList.contains("js-profile__Cuphead")) {
        return profileObj.cuphead.callNumber;
    }
    if (target.classList.contains("js-profile__Mugman")) {
        return profileObj.mugman.callNumber;
    }
    if (target.classList.contains("js-profile__Devil")) {
        return profileObj.devil.callNumber;
    }
}
function getStory(target) {
    if (target.classList.contains("js-profile__Cuphead")) {
        return profileObj.cuphead.storyLink;
    }
    if (target.classList.contains("js-profile__Mugman")) {
        return profileObj.mugman.storyLink;
    }
    if (target.classList.contains("js-profile__Devil")) {
        return profileObj.devil.storyLink;
    }
}
function getBackgroundImage(target) {
    if (target.classList.contains("js-profile__Cuphead")) {
        return profileObj.cuphead.backgroundImage;
    }
    if (target.classList.contains("js-profile__Mugman")) {
        return profileObj.mugman.backgroundImage;
    }
    if (target.classList.contains("js-profile__Devil")) {
        return profileObj.devil.backgroundImage;
    }

}
function getProfileImage(target) {
    if (target.classList.contains("js-profile__Cuphead")) {
        return profileObj.cuphead.profileImage;
    }
    if (target.classList.contains("js-profile__Mugman")) {
        return profileObj.mugman.profileImage;
    }
    if (target.classList.contains("js-profile__Devil")) {
        return profileObj.devil.profileImage;
    }

}
function getName(target) {
    if (target.classList.contains("js-profile__Cuphead")) {
        return profileObj.cuphead.name;
    }
    if (target.classList.contains("js-profile__Mugman")) {
        return profileObj.mugman.name;
    }
    if (target.classList.contains("js-profile__Devil")) {
        return profileObj.devil.name;
    }

}
function getComment(target) {
    if (target.classList.contains("js-profile__Cuphead")) {
        return profileObj.cuphead.comment;
    }
    if (target.classList.contains("js-profile__Mugman")) {
        return profileObj.mugman.comment;
    }
    if (target.classList.contains("js-profile__Devil")) {
        return profileObj.devil.comment;
    }

}

function goChat() {
    if(chatLink){
        window.location.href = chatLink;
    }
}
function goCall() {
    if(callLink){
        window.location.href = callLink;
    }
}
function goStory() {
    if(storyLink){
        window.location.href = storyLink;
    }
}
function removeBox(event) {
    const removeBox = event.target.parentNode;
    removeBox.querySelector(".profileBox__buttons").remove();
    removeBox.querySelector(".profileBox__exitButton").remove();
    removeBox.querySelector(".profileBox__backgroundImage").remove();
    removeBox.querySelector(".profileBox__profile").remove();
    removeBox.classList.remove("profileBox");
    removeBox.classList.add("profileBox__hide");
    removeBox.addEventListener("animationend", () => {
        removeBox.remove();
    })

}
function showBox(event) {
    const main = document.querySelector("body");
    const target_parentNode = event.target.parentNode;
    // create elements
    const profileBox = document.createElement("div");
    const exitButton = document.createElement("button");
    const profileBox_backgroundImage_div = document.createElement("div");
    const profileBox_backgroundImage_img = document.createElement("img");
    const profileBox_profile = document.createElement("div");
    const profileBox_profile_img = document.createElement("img");
    const profileBox_profile_name = document.createElement("span");
    const profileBox_profile_comment = document.createElement("span");
    const profileBox_profile_divider = document.createElement("div");
    const profileBox__buttons = document.createElement("div");
    const profileBox__button_chatDiv = document.createElement("div");
    const profileBox__button_callDiv = document.createElement("div");
    const profileBox__button_storyDiv = document.createElement("div");
    const profileBox__button_chatButton = document.createElement("div");
    const profileBox__button_callButton = document.createElement("div");
    const profileBox__button_storyButton = document.createElement("div");
    const profileBox__button_chatspan = document.createElement("span");
    const profileBox__button_callspan = document.createElement("span");
    const profileBox__button_storyspan = document.createElement("span");

    // add innerTexts
    exitButton.innerText = "X";
    profileBox__button_chatButton.innerHTML = `<i class="fas fa-comment fa-2x"></i>`;
    profileBox__button_callButton.innerHTML = `<i class="fas fa-phone fa-2x"></i>`;
    profileBox__button_storyButton.innerHTML = `<i class="fab fa-ioxhost fa-2x"></i>`;
    profileBox__button_chatspan.innerText = "Chat";
    profileBox__button_callspan.innerText = "Call";
    profileBox__button_storyspan.innerText = "Story";


    // append Child to components
    profileBox_backgroundImage_div.appendChild(profileBox_backgroundImage_img);
    profileBox_profile.appendChild(profileBox_profile_img);
    profileBox_profile.appendChild(profileBox_profile_name);
    profileBox_profile.appendChild(profileBox_profile_comment);
    profileBox_profile.appendChild(profileBox_profile_divider);
    profileBox__buttons.appendChild(profileBox__button_chatDiv);
    profileBox__buttons.appendChild(profileBox__button_callDiv);
    profileBox__buttons.appendChild(profileBox__button_storyDiv);
    profileBox__button_chatDiv.appendChild(profileBox__button_chatButton);
    profileBox__button_chatDiv.appendChild(profileBox__button_chatspan);
    profileBox__button_callDiv.appendChild(profileBox__button_callButton);
    profileBox__button_callDiv.appendChild(profileBox__button_callspan);
    profileBox__button_storyDiv.appendChild(profileBox__button_storyButton);
    profileBox__button_storyDiv.appendChild(profileBox__button_storyspan);


    // add class
    profileBox.classList.add("profileBox");
    exitButton.classList.add("profileBox__exitButton");
    profileBox_backgroundImage_div.classList.add("profileBox__backgroundImage");
    profileBox_profile.classList.add("profileBox__profile");
    profileBox_profile_img.classList.add("user-component__profile", "user-component__profile-xl");
    profileBox_profile_name.classList.add("profileBox__profile-name");
    profileBox_profile_comment.classList.add("profileBox__profile-comment");
    profileBox_profile_divider.classList.add("profileBox__profile-divider");
    profileBox__buttons.classList.add("profileBox__buttons");
    profileBox__button_chatDiv.classList.add("profileBox__button");
    profileBox__button_callDiv.classList.add("profileBox__button");
    profileBox__button_storyDiv.classList.add("profileBox__button");
    profileBox__button_chatButton.classList.add("profileBox__buttons-chatButton");
    profileBox__button_callButton.classList.add("profileBox__buttons-callButton");
    profileBox__button_storyButton.classList.add("profileBox__buttons-storyButton");


    if (!main.querySelector(".profileBox")) {

        main.appendChild(profileBox);
        profileBox.addEventListener("animationend", () => {
            // appendChild to profileBox
            profileBox.appendChild(exitButton);
            profileBox.appendChild(profileBox_backgroundImage_div);
            profileBox.appendChild(profileBox_profile);
            profileBox.appendChild(profileBox__buttons);

            profileBox_backgroundImage_img.src = getBackgroundImage(target_parentNode);
            profileBox_profile_img.src = getProfileImage(target_parentNode);
            profileBox_profile_name.innerText = getName(target_parentNode);
            profileBox_profile_comment.innerText = getComment(target_parentNode);
            chatLink = getChat(target_parentNode);
            callLink = getCall(target_parentNode);
            storyLink = getStory(target_parentNode);
            profileBox__button_chatDiv.addEventListener("click", goChat);
            profileBox__button_callDiv.addEventListener("click", goCall);
            profileBox__button_storyDiv.addEventListener("click", goStory);
            exitButton.addEventListener("click", removeBox);
        })

    }

}
function clickProfileImage() {
    for (var i = 0; i < profileImage.length; i++) {
        profileImage[i].addEventListener("click", showBox);
    }

}

function init() {
    clickProfileImage();
}

init();
