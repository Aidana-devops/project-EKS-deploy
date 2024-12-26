document.addEventListener("DOMContentLoaded", () => {
    const quotes = [
        "Believe you can and you're halfway there.",
        "Success is not the key to happiness. Happiness is the key to success.",
        "The best time to plant a tree was 20 years ago. The second best time is now.",
        "Creativity is intelligence having fun.",
    ];

    const quoteButton = document.getElementById("generate-quote");
    const quoteText = document.getElementById("quote");
    const themeToggle = document.getElementById("toggle-theme");

    // Generate Random Quote
    quoteButton.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteText.textContent = quotes[randomIndex];
        quoteText.style.animation = "fadeIn 1s ease-in-out";
    });

    // Toggle Light/Dark Mode
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        document.querySelectorAll("button").forEach((btn) => btn.classList.toggle("dark-mode"));
    });
});

