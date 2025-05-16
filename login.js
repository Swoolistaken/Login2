const pwInput = document.getElementById('pw');
const toggleBtn = document.getElementById('togglePw');

toggleBtn.addEventListener('click', () => {
  const type = pwInput.getAttribute('type') === 'password' ? 'text' : 'password';
  pwInput.setAttribute('type', type);

  toggleBtn.textContent = type === 'password' ? '👁️' : '🙈';
});
