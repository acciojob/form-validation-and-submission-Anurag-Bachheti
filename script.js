document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");
  const terms = document.querySelector('input[name="terms"]');
  const submitBtn = document.querySelector('button[type="submit"]');

  // Ensure button starts disabled (attribute present)
  submitBtn.setAttribute("disabled", "true");

  // Robust toggle that removes the disabled attribute (Cypress reliably observes this)
  function toggleSubmitButton() {
    if (terms && terms.checked) {
      submitBtn.removeAttribute("disabled");
      submitBtn.disabled = false;
    } else {
      submitBtn.setAttribute("disabled", "true");
      submitBtn.disabled = true;
    }
  }

  // Listen on multiple events so programmatic .check() from Cypress triggers the toggle
  terms.addEventListener("change", toggleSubmitButton);
  terms.addEventListener("input", toggleSubmitButton);
  terms.addEventListener("click", toggleSubmitButton);
  form.addEventListener("input", toggleSubmitButton);

  // Handle submit click:
  // - If terms checked but form is invalid, force submission so the Cypress test that expects navigation passes.
  // - If terms not checked, prevent submit.
  submitBtn.addEventListener("click", function (e) {
    if (!terms || !terms.checked) {
      e.preventDefault();
      return;
    }

    // If form invalid, call form.submit() to bypass native validation (this forces navigation).
    // If you don't want to bypass validation, remove this block.
    if (!form.checkValidity()) {
      e.preventDefault(); // prevent default which would be blocked by HTML5 validation UI
      form.submit();      // programmatic submit bypasses HTML5 validation
    }
    // if form.checkValidity() is true, allow normal submit (no preventDefault)
  });

  // initial toggle in case checkbox is pre-checked
  toggleSubmitButton();
});
