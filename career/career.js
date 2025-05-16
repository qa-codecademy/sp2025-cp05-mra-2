const serviceSelect = document.getElementById('service');
    const reasonContainer = document.getElementById('reasonContainer');
    const reasonLabel = document.getElementById('reasonLabel');
    const reasonInput = document.getElementById('reason');
    const form = document.getElementById('applicationForm');

    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');

    serviceSelect.addEventListener('change', () => {
      const selected = serviceSelect.value;
      if (selected) {
        reasonLabel.textContent = "Why should we hire you for ${selected}?";
        reasonContainer.classList.remove('hidden');
        reasonInput.required = true;
      } else {
        reasonContainer.classList.add('hidden');
        reasonInput.required = false;
      }
    });

    form.addEventListener('submit', function (e) {
      emailError.textContent = '';
      phoneError.textContent = '';
      if (!email.checkValidity()) {
        e.preventDefault();
        emailError.textContent = 'Please enter a valid email address.';
      }

      if (!phone.checkValidity()) {
        e.preventDefault();
        phoneError.textContent = 'Phone must be exactly 9 digits.';
      }
    });
     fetch('https://ipapi.co/json/')
    .then(res => res.json())
    .then(data => {
      const countryCallingCode = data.country_calling_code || '+389';
      document.getElementById('phoneCode').value = countryCallingCode;
    })
    .catch(() => {
      document.getElementById('phoneCode').value = '+389'; // fallback
    });