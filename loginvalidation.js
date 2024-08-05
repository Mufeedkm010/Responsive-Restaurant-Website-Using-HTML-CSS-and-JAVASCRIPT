document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('error-message');

  form.addEventListener('submit', (event) => {
      errorMessage.style.display = 'none';
      errorMessage.textContent = '';

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const emailValue = emailInput.value;

      if (!emailRegex.test(emailValue)) {
          event.preventDefault();
          errorMessage.textContent = 'Please enter a valid email address!';
          errorMessage.style.display = 'block';
      }
  });
});
