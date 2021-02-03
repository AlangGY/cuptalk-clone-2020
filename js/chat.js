const replyForm = document.querySelector(".js-reply");
const replyButton = replyForm.querySelector("button");
const replyInput = replyForm.querySelector("input");

function sendTime(){
    const sendDate = new Date;
    const sendHours = sendDate.getHours();
    const sendMinutes = sendDate.getMinutes();
    const sendTime = `${sendHours <10 ?`0${sendHours}` : sendHours }:${sendMinutes <10 ?`0${sendMinutes}` :sendMinutes}`;
    return sendTime ;
}

function sendMessage(text,time){
    const main_chat = document.querySelector(".js-main-chat");
    const div_messageRow = document.createElement("div");
    const div_messageRow__content = document.createElement("div");
    const div_message__info = document.createElement("div");
    const span_message__bubble = document.createElement("span");
    const span_message__time = document.createElement("span");
    div_messageRow.classList.add("message-row","message-row__own");
    div_messageRow__content.classList.add("message-row__content");
    div_message__info.classList.add("message__info");
    span_message__bubble.classList.add("message__bubble");
    span_message__time.classList.add("message__time");

    main_chat.appendChild(div_messageRow);
    div_messageRow.appendChild(div_messageRow__content);
    div_messageRow__content.appendChild(div_message__info);
    div_message__info.appendChild(span_message__bubble);
    div_message__info.appendChild(span_message__time);

    span_message__bubble.innerText = text;
    span_message__time.innerText = time;
    div_messageRow.classList.add("ani-sendMessage");
}

function getMessage(event){
    event.preventDefault();
    if(replyInput.value){
        var replyText = replyInput.value;
        sendMessage(replyText,sendTime());
        replyInput.value = "";
    }
}

function init(){
    replyInput.addEventListener("submit",getMessage);
    replyButton.addEventListener("click",getMessage);
}
init();