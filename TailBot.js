const bot=document.getElementById("tailbot-btn");

const windowBox=document.getElementById("tailbot-window");

const close=document.getElementById("close-chat");

bot.onclick=()=>{

windowBox.style.display="flex";

};

close.onclick=()=>{

windowBox.style.display="none";

document.getElementById("tailbot-messages").innerHTML=`

<div class="bot-message">

👋 Hi! I'm TailBot.

Welcome to TailMates!

Ask me anything about adopting pets, registering pets, services, login, or our mission.

</div>

`;

document.getElementById("user-input").value="";

};


const knowledge = {

adopt: "...",

register: "...",

login: "...",

shop: "...",

services: "...",

tailmates: "...",

...
}
