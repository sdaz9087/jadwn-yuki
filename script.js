document.addEventListener("DOMContentLoaded", function () {
  let chatMessages = document.querySelector(".lumy-messages");
  let inputField = document.querySelector(".lumy-footer input");
  let sendButton = document.querySelector(".lumy-footer button");
  let lumyBadge = document.getElementById("lumy-badge");
  let chatBox = document.getElementById("lumy-chat");

  let unreadMessages = localStorage.getItem("unreadMessages") || 0;
  updateBadge();

  function toggleLumy() {
    if (chatBox.style.display === "none" || chatBox.style.display === "") {
      chatBox.style.display = "flex";
      chatBox.classList.add("open");
      unreadMessages = 0; // پیام‌ها خوانده شدند
      localStorage.setItem("unreadMessages", unreadMessages);
      updateBadge();
    } else {
      chatBox.classList.remove("open");
      setTimeout(() => {
        chatBox.style.display = "none";
      }, 300);
    }
  }

  function sendMessage() {
    let userText = inputField.value.trim();
    if (userText !== "") {
      let newMessage = `<p><strong>You:</strong> ${userText}</p>`;
      chatMessages.innerHTML += newMessage;
      inputField.value = "";

      localStorage.setItem("lumyChat", chatMessages.innerHTML);
      unreadMessages++;
      localStorage.setItem("unreadMessages", unreadMessages);
      updateBadge();

      setTimeout(() => {
        let lumyResponse = `<p><strong>Lumy:</strong> Keep going! You're doing great! 🌟</p>`;
        chatMessages.innerHTML += lumyResponse;
        unreadMessages++;
        localStorage.setItem("unreadMessages", unreadMessages);
        updateBadge();
        localStorage.setItem("lumyChat", chatMessages.innerHTML);
      }, 1000);
    }
  }

  function updateBadge() {
    if (unreadMessages > 0) {
      lumyBadge.textContent = unreadMessages;
      lumyBadge.style.display = "block";
    } else {
      lumyBadge.style.display = "none";
    }
  }

  sendButton.addEventListener("click", sendMessage);
  inputField.addEventListener("keypress", function (e) {
    if (e.key === "Enter") sendMessage();
  });

  window.toggleLumy = toggleLumy;
});
document.getElementById("jaden").addEventListener("click", function () {
  let quotes = [
    "Get your game on!",
    "You got this!",
    "Never back down!",
    "Duel like a pro!",
    "Keep believing in yourself!",
  ];
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  let quoteElement = document.getElementById("jaden-quote");
  quoteElement.textContent = randomQuote;
  quoteElement.style.display = "block";

  setTimeout(() => {
    quoteElement.style.display = "none";
  }, 3000);
});
document.body.addEventListener("click", function () {
  let quotes = [
    "Get your game on!",
    "You got this!",
    "Never back down!",
    "Duel like a pro!",
    "Keep believing in yourself!",
  ];
  let quoteElement = document.getElementById("quote-box");

  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteElement.textContent = randomQuote;
  quoteElement.style.display = "block";

  setTimeout(() => {
    quoteElement.style.display = "none";
  }, 3000);
});
let tasks = [
  "۵۰ تا شنا! 🏊‍♀️",
  "۱۰۰ تا درازنشست 💪",
  "یک ساعت تحقیق 📚",
  "۲۰ دقیقه پیاده‌روی 🚶‍♀️",
];

document.getElementById("lumy").addEventListener("click", function () {
  let randomTask = tasks[Math.floor(Math.random() * tasks.length)];
  let lumyText = document.getElementById("lumy-text");

  lumyText.textContent = `عشقم امروز باید ${randomTask} انجام بدی! 💜✨`;
  lumyText.style.display = "block";

  setTimeout(() => {
    lumyText.style.display = "none";
  }, 5000);
});
function showLumyMessage() {
  let lumyText = document.getElementById("lumy-text");
  let tasks = [
    "۵۰ تا شنا! 🏊‍♀️",
    "۱۰۰ تا درازنشست 💪",
    "یک ساعت تحقیق 📚",
    "۲۰ دقیقه پیاده‌روی 🚶‍♀️",
  ];
  let randomTask = tasks[Math.floor(Math.random() * tasks.length)];

  lumyText.textContent = `عشقم امروز باید ${randomTask} انجام بدی! 💜✨`;
  lumyText.style.display = "block";

  setTimeout(() => {
    lumyText.style.display = "none";
  }, 5000);
}

// هر ۳۰ دقیقه یادآوری می‌کنه!
setInterval(showLumyMessage, 30 * 60 * 1000);
// چک می‌کنه مرورگر نوتیفیکیشن رو ساپورت می‌کنه یا نه
if ("Notification" in window) {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      setInterval(() => {
        let tasks = [
          "۵۰ تا شنا! 🏊‍♀️",
          "۱۰۰ تا درازنشست 💪",
          "یک ساعت تحقیق 📚",
          "۲۰ دقیقه پیاده‌روی 🚶‍♀️",
        ];
        let randomTask = tasks[Math.floor(Math.random() * tasks.length)];

        new Notification("💕 Lumy Reminder 💕", {
          body: `عشقم، وقتشه ${randomTask} انجام بدی! 😘`,
          icon: "lumy.png",
        });
      }, 30 * 60 * 1000); // هر ۳۰ دقیقه
    }
  });
}
