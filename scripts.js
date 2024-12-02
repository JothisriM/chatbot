  // Select elements
  const chatWindow = document.querySelector(".chat-window");
  const inputField = document.querySelector("footer input");
  const sendButton = document.querySelector("footer .send-button");

  // Example bot responses
  const responses = {
    hi: "I am here assist to assist you?",
    hello: "I am here assist to assist you?",
    default: "I'm sorry, I don't understand that.",
  };

  // Function to create a chat message bubble
  function createMessage(content, isUser = true) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add(isUser ? "user-message" : "bot-message");
    messageDiv.textContent = content;
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the latest message
  }

  // Function to handle user input and bot response
  function handleMessage() {
    const userInput = inputField.value.trim();
    if (!userInput) return;

    // Add user message
    createMessage(userInput, true);

    // Generate bot response
    const botResponse = responses[userInput.toLowerCase()] || responses.default;
    setTimeout(() => createMessage(botResponse, false), 500);

    // Clear input field
    inputField.value = "";
    updateSendButtonIcon(); // Reset icon after sending
  }

  // Function to dynamically update the send button icon
  function updateSendButtonIcon() {
    const inputText = inputField.value.trim();

    if (inputText.includes("rocket")) {
      sendButton.textContent = "🚀";
    } else if (inputText.includes("check")) {
      sendButton.textContent = "✔";
    } else if (inputText === "") {
      sendButton.textContent = "▶"; // Default icon
    } else {
      sendButton.textContent = "SEND"; // General case
    }
  }

  // Event listeners for sending messages
  sendButton.addEventListener("click", handleMessage);
  inputField.addEventListener("input", updateSendButtonIcon);
  inputField.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      handleMessage();
    }
  });

  // Additional settings panel functionality
  document.getElementById("border-radius").addEventListener("input", (e) => {
    document.querySelector(".chatbot-interface").style.borderRadius = `${e.target.value}px`;
  });

  document.getElementById("header-bg").addEventListener("input", (e) => {
    document.querySelector("header").style.backgroundColor = e.target.value;
  });

  document.getElementById("bot-text-color").addEventListener("input", (e) => {
    document.querySelectorAll(".bot-message").forEach((el) => {
      el.style.color = e.target.value;
    });
  });

  document.getElementById("bot-bubble-color").addEventListener("input", (e) => {
    document.querySelectorAll(".bot-message").forEach((el) => {
      el.style.backgroundColor = e.target.value;
    });
  });

  document.getElementById("user-text-color").addEventListener("input", (e) => {
    document.querySelectorAll(".user-message").forEach((el) => {
      el.style.color = e.target.value;
    });
  });

  document.getElementById("user-bubble-color").addEventListener("input", (e) => {
    document.querySelectorAll(".user-message").forEach((el) => {
      el.style.backgroundColor = e.target.value;
    });
  });

  document.getElementById("font-style").addEventListener("change", (e) => {
    document.body.style.fontFamily = e.target.value;
  });
