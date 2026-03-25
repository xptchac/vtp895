const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");
const chatMessages = document.getElementById("chat-messages");

chatForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const question = userInput.value.trim();
  if (question === "") return;
  chatForm.classList.add("moved");
  appendMessage(question, "user-message");
  userInput.value = "";
  setTimeout(() => {
    appendMessage(
      "Cảm ơn bạn đã hỏi về Quy chế Đào tạo UTT! Tôi đang xử lý câu hỏi của bạn...",
      "bot-message",
    );
  }, 1000);
});

function appendMessage(text, className) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", className);
  msgDiv.innerText = text;
  chatMessages.appendChild(msgDiv);

  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
}

chatForm.addEventListener('submit', function(event) {
    event.preventDefault();

showTypingIndicator();

setTimeout(() => {
  removeTypingIndicator();
  appendMessage(
    "Đây là câu trả lời mẫu cho câu hỏi của bạn về Quy chế Đào tạo UTT. Bạn có thể hỏi thêm để biết chi tiết hơn!",
    "bot-message",
  );
}, 2000);
});

function showTypingIndicator() {
  const typingDiv = document.createElement("div");
  typingDiv.id = "typing-indicator";
  typingDiv.classList.add("typing", "message"); 
  typingDiv.innerHTML =
    '<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
  chatMessages.appendChild(typingDiv);
}

function removeTypingIndicator() {
  const indicator = document.getElementById("typing-indicator");
  if (indicator) indicator.remove();
}
