const sendBtn = document.getElementById("sendBtn");
const input = document.getElementById("messageInput");
const messages = document.getElementById("messages");

sendBtn.addEventListener("click", sendMessage);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  const msg = document.createElement("div");
  msg.classList.add("message", "sent");
  msg.textContent = text;

  messages.appendChild(msg);
  input.value = "";
  messages.scrollTop = messages.scrollHeight;

  // Fake reply (UI demo)
  setTimeout(() => {
    const reply = document.createElement("div");
    reply.classList.add("message", "received");
    reply.textContent = "Seen 👍";
    messages.appendChild(reply);
    messages.scrollTop = messages.scrollHeight;
  }, 800);
}
script.js
