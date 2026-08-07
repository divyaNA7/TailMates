// ===============================
// TailBot v1.0
// TailMates
// ===============================

const tailbotBtn = document.getElementById("tailbot-btn");
const tailbotWindow = document.getElementById("tailbot-window");
const closeChat = document.getElementById("close-chat");

const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");

const messages = document.getElementById("tailbot-messages");

const quickButtons =
document.querySelectorAll("#quick-buttons button");


// ===============================
// Open Chat
// ===============================

tailbotBtn.addEventListener("click",()=>{

    if(tailbotWindow.style.display==="flex"){

        tailbotWindow.style.display="none";

        resetChat();

    }

    else{

        tailbotWindow.style.display="flex";

        userInput.focus();

    }

});


// ===============================
// Close Chat
// ===============================

closeChat.addEventListener("click", () => {

    tailbotWindow.style.display = "none";

    resetChat();

});


// ===============================
// Welcome Message
// ===============================

const welcomeMessage = `

<div class="bot-message">

<strong>Hello!</strong>

<br><br>

I'm <strong>TailBot</strong>, an assistant for you.

<br><br>

Welcome to TailMates

<br><br>

You can ask me about:

</div>

`;


// ===============================
// Reset Chat
// ===============================

function resetChat(){

    messages.innerHTML = welcomeMessage;

    userInput.value = "";

}


// Run once when page loads

resetChat();


// ===============================
// Add Message
// ===============================

function addMessage(type,text){

    const bubble = document.createElement("div");

    bubble.className =

        type === "user"

        ? "user-message"

        : "bot-message";

    bubble.innerHTML = text;

    messages.appendChild(bubble);

    scrollChat();

}


// ===============================
// Scroll Down
// ===============================

function scrollChat(){

    messages.scrollTop = messages.scrollHeight;

}


// ===============================
// Typing Animation
// ===============================

function botTyping(callback){

    const typing = document.createElement("div");

    typing.className = "bot-message";

    typing.id = "typing";

    typing.innerHTML =

    "TailBot is typing";

    messages.appendChild(typing);

    scrollChat();

    let dots = 0;

    const animation = setInterval(()=>{

        dots++;

        typing.innerHTML =

        "TailBot is typing" +

        ".".repeat(dots % 4);

    },300);

    setTimeout(()=>{

        clearInterval(animation);

        typing.remove();

        callback();

    },900);

}
