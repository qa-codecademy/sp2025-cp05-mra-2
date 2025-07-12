document.addEventListener("DOMContentLoaded", function () {
    const engRadio = document.getElementById("eng");
    const gerRadio = document.getElementById("ger");

    const englishDiv = document.getElementById("english");
    const germanDiv = document.getElementById("german");

    function toggleLanguage() {
        if (engRadio.checked) {
            englishDiv.style.display = "block";
            germanDiv.style.display = "none";
        } else if (gerRadio.checked) {
            englishDiv.style.display = "none";
            germanDiv.style.display = "block";
        }
    }

    // Initial check on load
    toggleLanguage();

    // Event listeners for toggle change
    engRadio.addEventListener("change", toggleLanguage);
    gerRadio.addEventListener("change", toggleLanguage);
});