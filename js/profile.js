const profileImage = document.querySelectorAll(".js-profileImage");
let profileTextArray = [];
var profileObj = {
    cuphead: {
        backgroundImage: 'css/images/cupheadMugman.jpg',
        profileImage: 'css/images/cupheadProfile2.png',
        name: 'Cuphead',
        comment: 'fuck!'
    },
    mugman: {
        backgroundImage: 'css/images/mugman.jpg',
        profileImage: 'css/images/mugmanProfile2.png',
        name: 'Mugman',
        comment: 'shit!'
    },
    devil: {
        backgroundImage: 'css/images/devil.gif',
        profileImage: 'css/images/devilProfile1.gif',
        name: 'Devil',
        comment: 'GoToHell!'
    }
};

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
function removeBox(event) {
    const removeBox = event.target.parentNode;
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
    const main = document.querySelector(".main-screen");
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
    // append Child to components
    profileBox_backgroundImage_div.appendChild(profileBox_backgroundImage_img);
    profileBox_profile.appendChild(profileBox_profile_img);
    profileBox_profile.appendChild(profileBox_profile_name);
    profileBox_profile.appendChild(profileBox_profile_comment);
    profileBox_profile.appendChild(profileBox_profile_divider);
    // add class
    profileBox.classList.add("profileBox");
    exitButton.classList.add("profileBox__exitButton");
    profileBox_backgroundImage_div.classList.add("profileBox__backgroundImage");
    profileBox_profile.classList.add("profileBox__profile");
    profileBox_profile_img.classList.add("user-component__profile", "user-component__profile-xl");
    profileBox_profile_name.classList.add("profileBox__profile-name");
    profileBox_profile_comment.classList.add("profileBox__profile-comment");
    profileBox_profile_divider.classList.add("profileBox__profile-divider");
    if (!main.querySelector(".profileBox")) {

        exitButton.innerText = "X";
        main.appendChild(profileBox);
        profileBox.addEventListener("animationend", () => {
            // appendChild to profileBox
            profileBox.appendChild(exitButton);
            profileBox.appendChild(profileBox_backgroundImage_div);
            profileBox.appendChild(profileBox_profile);
           
            profileBox_backgroundImage_img.src = getBackgroundImage(event.target.parentNode);
            profileBox_profile_img.src = getProfileImage(event.target.parentNode);
            profileBox_profile_name.innerText = getName(event.target.parentNode);
            profileBox_profile_comment.innerText = getComment(event.target.parentNode);

        })
        exitButton.addEventListener("click", removeBox);
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