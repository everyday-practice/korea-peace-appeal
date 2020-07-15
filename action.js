const newsCardList = document.querySelectorAll(".news-card");
const newsPopupList = document.querySelectorAll(".news-popup-layer");

function updatePopup() {

  const hash = window.location.hash;
  let hasMatch = false;

  newsPopupList.forEach((newsPopup) => {
    if (hash === `#${newsPopup.getAttribute('id')}`) {
      hasMatch = true;
      newsPopup.classList.add('mounted');
      setTimeout(() => {
        newsPopup.classList.add('open');
      }, 0);
    } else {
      newsPopup.classList.remove('open');
      setTimeout(() => {
        newsPopup.classList.remove('mounted');
      }, 500);
    }
  });

  // Scroll block body
  if (hasMatch) document.body.style = "overflow-y: hidden;";
  else document.body.style = "overflow-y: scroll;";
}

window.addEventListener('popstate', () => {
  updatePopup();
})
updatePopup();

// Add client-side routing to popup close button
document.querySelectorAll(".popup-close-button")
  .forEach((button) => {
    button.addEventListener('click', () => {
      history.pushState(null, null, '/action.html');
      // Somehow onpopstate doesn't recognize this pushState.
      // UI update done manually.
      updatePopup(); 
    })
  });

// Add client-side routing to form close button
document.querySelectorAll(".signform-close-button")
  .forEach((button) => {
    button.addEventListener('click', () => {
      history.pushState(null, null, '/action.html');
      // Somehow onpopstate doesn't recognize this pushState.
      // UI update done manually.
      updateSignform(); 
    })
  });
