const socket = io();

function sendMessage() {
    const messageInput = document.getElementById("message");
    const message = messageInput.value;

    if (message.trim() !== "") {
        socket.emit("chat message", message);
        messageInput.value = "";
    }
}

socket.on("chat message", (msg) => {
    const chatBox = document.getElementById("chat-box");
    const p = document.createElement("p");
    p.textContent = msg;
    chatBox.appendChild(p);
});
