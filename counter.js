let count = 0;

function updateDisplay() {
  document.getElementById('countDisplay').textContent = count;
}

function increment() {
  count++; // count = count + 1
  updateDisplay();
}

function decrement() {
  count--; // count = count - 1
  updateDisplay();
}