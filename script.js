document.getElementById('gameForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const secretNumber = document.getElementById('secretNumber').value;
  const guessNumber = document.getElementById('guessNumber').value;

  if (secretNumber.length !== 4 || guessNumber.length !== 4) {
    alert('Ambos números deben tener 4 dígitos');
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
