function toggleSidebar() {
  var sidebar = document.getElementById('sidebar');
  var content = document.getElementById('content');

  if (sidebar.style.left === '-250px') {
    sidebar.style.left = '0';
    content.style.marginLeft = '250px';
  } else {
    sidebar.style.left = '-250px';
    content.style.marginLeft = '0';
  }
}
const textElement = document.getElementById('text');
const text = "I'm Rehman ";

let index = 0;

function animateText() {
  textElement.textContent = text.slice(0, index);
  index++;

  if (index > text.length) {
    index = 0;
  }
}

setInterval(animateText, 250); // Adjust the interval for speed control
// ////////////////
