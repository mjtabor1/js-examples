
function changeColor() {
  const colors = ['pink', 'lightblue', 'lightgreen', 'lavender', 'lightyellow'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  console.log(`Changing color to: ${randomColor}`);
  document.body.style.backgroundColor = randomColor;
}