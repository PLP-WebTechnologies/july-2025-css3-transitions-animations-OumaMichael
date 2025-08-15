// Function with parameters and return value
function calculateArea(width, height) {
  return width * height;
}

// Demonstrate scope
function scopeDemo() {
  const localVar = "I'm local";
  console.log(localVar); // Accessible
  
  if (true) {
    const blockVar = "I'm block scoped";
    console.log(blockVar); // Accessible
  }
  // console.log(blockVar); // Would throw ReferenceError
}

// Reusable animation trigger function
function toggleAnimation(element, className) {
  element.classList.toggle(className);
  return element.classList.contains(className);
}

// Function to change theme
function setTheme(color) {
  document.body.style.backgroundColor = color;
  return `Theme changed to ${color}`;
}
// DOM Elements
const themeBtn = document.getElementById('themeBtn');
const animateBtn = document.getElementById('animateBtn');
const jsBox = document.getElementById('jsBox');

// Theme toggle with function
themeBtn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  console.log(setTheme(isDark ? '#222' : '#f5f5f5'));
});

// Animation trigger
animateBtn.addEventListener('click', () => {
  const isAnimating = toggleAnimation(jsBox, 'spin');
  jsBox.style.backgroundColor = isAnimating ? '#4285f4' : '#ea4335';
});

// Add styles for JS-controlled elements
const style = document.createElement('style');
style.textContent = `
  .box {
    width: 100px;
    height: 100px;
    background: #ea4335;
    margin: 20px;
    transition: all 0.5s ease;
  }
  
  .spin {
    animation: spin 1s linear infinite;
  }
  
  .dark-mode {
    background: #222;
    color: white;
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);

// Demonstrate function usage
console.log('Area calculation:', calculateArea(10, 20));
scopeDemo();