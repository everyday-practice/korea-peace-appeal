const mySwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
  },
});

const easeOutQuart = t => 1-(--t)*t*t*t;
const animDuration = 1500; // ms
const animVal = 0;
let animStart;
const graphBar = document.getElementById('graph-bar');
const graphNum = document.getElementById('graph-number');
const targetNum = parseInt(graphNum.innerText);

const anim = (timestamp) => {
  if (animStart === undefined) animStart = timestamp;
  const animTime = timestamp - animStart;

  let value = animTime / animDuration;
  value = easeOutQuart(value);
  if (value < 0) value = 0;
  else if (value >= 0.99999) value = 1;
  
  applyAnim(value);

  if (animTime < animDuration) window.requestAnimationFrame(anim);
}

setTimeout(() => {
  window.requestAnimationFrame(anim);
}, 300);

function applyAnim(value) {
  graphBar.style.width = `${value * 100}%`;

  const numString = Math.ceil(value * targetNum).toString();
  graphNum.innerHTML = '';

  numString.split('').map((char, i) => {
    const digit = document.createElement('span');
    digit.classList.add('digit');
    digit.innerHTML = char;
    if (i % 3 === 2) {
      const comma = document.createElement('span');
      comma.classList.add('comma');
      comma.innerHTML = ',';
      graphNum.appendChild(comma);
    }
    graphNum.appendChild(digit);
  })
}

// Add client-side routing to form close button
document.querySelectorAll(".signform-close-button")
  .forEach((button) => {
    button.addEventListener('click', () => {
      history.pushState(null, null, '/');
      // Somehow onpopstate doesn't recognize this pushState.
      // UI update done manually.
      updateSignform(); 
    })
  });