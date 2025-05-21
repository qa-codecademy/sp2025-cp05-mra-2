document.addEventListener('DOMContentLoaded', function() {
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
    
    // Force UI update for buttons
    document.querySelectorAll('input[name="lang"]').forEach(el => {
      el.checked = (el.id === lang);
    });
  }
});