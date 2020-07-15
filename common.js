objectFitImages();
cssVars();

document.querySelector('.hamburger').addEventListener('click', () => {
  const mobileNav = document.querySelector('.mobile-nav');
  mobileNav.style = 'transform: translateX(0);';
});

document.querySelector('.mobile-nav-close-button').addEventListener('click', () => {
  const mobileNav = document.querySelector('.mobile-nav');
  mobileNav.style = '';
})

function updateSignform() {

  const hash = window.location.hash;
  let hasMatch = false;

  const signformLayer = document.getElementById('signform-layer');

  if (hash === '#sign') {
    hasMatch = true;
    signformLayer.classList.add('open');
  } else {
    signformLayer.classList.remove('open');
  }

  // Scroll block body
  if (hasMatch) setTimeout(()=>{document.body.style = "overflow-y: hidden;";}, 400);
  else document.body.style = "overflow-y: scroll;";
}

window.addEventListener('popstate', () => {
  updateSignform();
})
updateSignform();


function createCustomSelect() {
  const targetList = document.getElementsByClassName('custom-select');

  for (let i=0; i < targetList.length; i++) {
    const select = targetList[i];
    const selectEl = select.getElementsByTagName('select')[0];
    const optionCurrent = document.createElement('div');
    optionCurrent.setAttribute('class', 'current-option');
    optionCurrent.innerHTML = selectEl.options[0].innerHTML;
    select.appendChild(optionCurrent);

    const optionsBox = document.createElement('div');
    optionsBox.setAttribute('class', 'options-box options-box--hidden');

    for (let j=1; j < selectEl.options.length; j++) {
      const optionEl = selectEl.options[j];
      const option = document.createElement('div');
      option.innerHTML = optionEl.innerHTML;
      option.setAttribute('class', 'option');
      option.addEventListener('click', (event) => {
        optionCurrent.innerHTML = option.innerHTML;
        selectEl.selectedIndex = j;

        const optionList = optionsBox.getElementsByClassName('option');
        for (let k=0; k < optionList.length; k++) {
          optionList[k].setAttribute('class', 'option');
        }

        option.setAttribute('class', 'option option--selected');

      });

      optionsBox.appendChild(option);
    }

    select.appendChild(optionsBox);

    optionCurrent.addEventListener('click', (event) => {
      event.stopPropagation();
      closeAllOtherSelects(select);
      optionsBox.classList.toggle('options-box--hidden');
      optionCurrent.classList.toggle('current-option--clicked');
    });

  }
}

function closeAllOtherSelects(element) {

  const allSelectList = document.getElementsByClassName('custom-select');

  for (let i=0; i < allSelectList.length; i++) {
    if (allSelectList[i] === element) continue;
    allSelectList[i].getElementsByClassName('options-box')[0].classList.add('options-box--hidden');
    allSelectList[i].getElementsByClassName('current-option')[0].classList.remove('current-option--clicked');
  }
}
document.addEventListener("click", closeAllOtherSelects);

createCustomSelect();

// Client-Side Form Validation
document.getElementById('signform-submit').addEventListener('click', (event) => {

  let hasError = false;

  const selectList = document.getElementsByClassName('signform-select');
  for (let i=0; i < selectList.length; i++) {
    if (selectList[i].selectedIndex == 0) {
      hasError = true;
      break;
    }
  }

  const inputList = document.getElementsByClassName('signform-input-text');
  for (let i=0; i < inputList.length; i++) {
    if (!inputList[i].value.trim()) {
      hasError = true;
      break;
    }
  }

  const checkbox = document.getElementById('agree');
  if (!checkbox.checked) {
    hasError = true;
  }

  if (hasError) {
    event.preventDefault();
    document.getElementById('error-message').classList.remove('error-message--hidden');
    return;
  }


  // Insert serverside validation
  // ...
  // Then reroute.
  
})