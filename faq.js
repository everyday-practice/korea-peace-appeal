const faqList = document.querySelectorAll(".faq");

faqList.forEach((faq) => {
  faq.addEventListener('click', () => {

    // Reset all accordions
    faqList.forEach((faq) => {
      faq.classList.remove('faq--open');
      faq.style.maxHeight = null;
    });

    faq.classList.toggle("faq--open");

    // Close accordion
    if (faq.classList.contains('faq--open')) {
      faq.style.maxHeight = `${faq.scrollHeight}px`;
    } 

    // Open accordion
    else {
      faq.style.maxHeight = null;
    }
  });
});

function updateAccordion() {

  const hash = window.location.hash;
  let hasMatch = false;

  faqList.forEach((faq) => {
    if (hash === faq.getAttribute('href')) {
      hasMatch = true;
      faq.classList.add('faq--open');
    } else {
      faq.classList.remove('faq--open');
    }

    // Close accordion
    if (faq.classList.contains('faq--open')) {
      faq.style.maxHeight = `${faq.scrollHeight}px`;
    } 
    // Open accordion
    else {
      faq.style.maxHeight = null;
    }
  });
}

window.addEventListener('popstate', () => {
  updateAccordion();
})
updateAccordion();

// Add client-side routing to form close button
document.querySelectorAll(".signform-close-button")
  .forEach((button) => {
    button.addEventListener('click', () => {
      history.pushState(null, null, '/faq.html');
      // Somehow onpopstate doesn't recognize this pushState.
      // UI update done manually.
      updateSignform(); 
    })
  });
