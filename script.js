document.getElementById('gameForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const secretNumber = document.getElementById('secretNumber').value;
  const guessNumber = document.getElementById('guessNumber').value;

  if (secretNumber.length !== 4 || guessNumber.length !== 4) {
    alert('Ambos números deben tener 4 dígitos');
    return;
  }

  // Validación de que el número no comience por 0
  if (secretNumber[0] === '0' || guessNumber[0] === '0') {
    alert('El número no puede comenzar con 0');
    return;
  }

  // Validación de que no se repitan dígitos
  if (hasRepeatingDigits(secretNumber) || hasRepeatingDigits(guessNumber)) {
    alert('No se permiten dígitos repetidos');
    return;
  }

  let bien = 0;
  let regular = 0;

  const secretArray = secretNumber.split('');
  const guessArray = guessNumber.split('');

  // Comprobar los "bien"
  for (let i = 0; i < 4; i++) {
    if (guessArray[i] === secretArray[i]) {
      bien++;
      secretArray[i] = null; // Marcar como revisado
      guessArray[i] = null;  // Marcar como revisado
    }
  }

  // Comprobar los "regular"
  for (let i = 0; i < 4; i++) {
    if (guessArray[i] !== null && secretArray.includes(guessArray[i])) {
      regular++;
      secretArray[secretArray.indexOf(guessArray[i])] = null; // Marcar como revisado
    }
  }

  document.getElementById('result').innerHTML = `Bien: ${bien}, Regular: ${regular}`;
});

// Función para verificar si un número tiene dígitos repetidos
function hasRepeatingDigits(number) {
  const digits = number.split('');
  return new Set(digits).size !== digits.length;
}

// Función para mostrar/ocultar el número secreto
function togglePassword() {
  const passwordInput = document.getElementById('secretNumber');
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
}
