const langButtons = document.querySelectorAll('input[name="lang"]');

langButtons.forEach(button => {
  button.addEventListener('change', () => {
    if (document.getElementById('ger').checked) {
      console.log("German selected");
      // logic for german language implementation
    } else {
      console.log("English selected");
     // logic for english language implementation
    }
  });
});
 