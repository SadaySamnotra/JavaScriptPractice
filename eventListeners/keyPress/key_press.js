function handleKeyDown(event) {
    document.getElementById('pressedKey').innerHTML = event.key;
  }
  
  function handleKeyUp(event) {
    document.getElementById('pressedKey').innerHTML = "Key released: " + event.key;
  }
  
  function handleKeyPress(event) {
    document.getElementById('pressedKey').innerHTML = "Key pressed: " + event.key;
  }
  
  const keyInput = document.getElementById('keyboard');
  keyInput.addEventListener('keydown', handleKeyDown);
  keyInput.addEventListener('keyup', handleKeyUp);
  keyInput.addEventListener('keypress', handleKeyPress);