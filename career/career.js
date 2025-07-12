document.addEventListener('DOMContentLoaded', function() {
  // Initialize form service change listener
  document.getElementById('service').addEventListener('change', () => {
    const selected = document.getElementById('service').value;
    document.getElementById('reasonLabel').textContent = `Why should we hire you for ${selected}?`;
  });

  // Form validation
  document.getElementById('applicationForm').addEventListener('submit', function(e) {
    // ... (keep your existing validation code)
  });

  // Language toggle functionality
  const langToggles = document.querySelectorAll('input[name="lang"]');
  
  // Set initial state
  const savedLang = localStorage.getItem('lang') || 'eng';
  document.getElementById(savedLang).checked = true;
  updateLanguageDisplay(savedLang);

  // Add event listeners
  langToggles.forEach(toggle => {
    toggle.addEventListener('change', function() {
      if (this.checked) {
        localStorage.setItem('lang', this.id);
        updateLanguageDisplay(this.id);
      }
    });
  });

 function updateLanguageDisplay(lang) {
  // Toggle language sections
  document.getElementById('english').style.display = lang === 'eng' ? 'block' : 'none';
  document.getElementById('german').style.display = lang === 'ger' ? 'block' : 'none';
  
  // Force UI update for buttons (Bootstrap needs this)
  const selectedToggle = document.getElementById(lang);
  if (selectedToggle) {
    selectedToggle.checked = true;
    selectedToggle.dispatchEvent(new Event('change')); // Force Bootstrap to update
  }
}

  // Phone code fetch (keep your existing code)
  fetch('https://ipapi.co/json/')
    .then(res => res.json())
    .then(data => {
      const code = data.country_calling_code || '+389';
      document.getElementById('phoneCode').value = code;
    })
    .catch(() => {
      document.getElementById('phoneCode').value = '+389';
    });
});

// document.addEventListener("DOMContentLoaded", () => {
//     const toggle = document.getElementById("darkModeToggle");
//     const body = document.body;

//     // Load saved theme from localStorage
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme === "dark") {
//         body.classList.add("dark-mode");
//         toggle.classList.add("active");
//     }

//     // Toggle dark mode on button click
//     toggle.addEventListener("click", () => {
//         body.classList.toggle("dark-mode");
//         toggle.classList.toggle("active");

//         const isDarkMode = body.classList.contains("dark-mode");
//         localStorage.setItem("theme", isDarkMode ? "dark" : "light");
//     });

//     // Bootstrap dropdown requires JS bundle (make sure it's included in your HTML)
//     // No extra JS needed here as Bootstrap handles dropdown toggling automatically
// });