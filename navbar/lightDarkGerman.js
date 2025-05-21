document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("darkModeToggle-german");
    const body = document.body;

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        toggle.classList.add("active");
    }

    // Toggle dark mode on button click
    toggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        toggle.classList.toggle("active");

        const isDarkMode = body.classList.contains("dark-mode");
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    });

    // Bootstrap dropdown requires JS bundle (make sure it's included in your HTML)
    // No extra JS needed here as Bootstrap handles dropdown toggling automatically
});