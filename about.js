// Add client-side routing to form close button
document.querySelectorAll(".signform-close-button")
  .forEach((button) => {
    button.addEventListener('click', () => {
      history.pushState(null, null, '/about.html');
      // Somehow onpopstate doesn't recognize this pushState.
      // UI update done manually.
      updateSignform(); 
    })
  });
