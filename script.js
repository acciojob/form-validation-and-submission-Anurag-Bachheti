document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const terms = document.querySelector('input[name="terms"]'); // Cypress looks for this
  const submitBtn = document.getElementById("submitBtn");

  // initial state
  submitBtn.disabled = true;

  function toggleSubmit() {
    // enable only if terms is checked AND all fields are filled
    const allValid = form.checkValidity();
    submitBtn.disabled = !(terms.checked && allValid);
  }

  // run check on every input change
  form.addEventListener("input", toggleSubmit);
  terms.addEventListener("change", toggleSubmit);

  // final validation on submit
  form.addEventListener("submit", function (e) {
    if (!form.checkValidity() || !terms.checked) {
      e.preventDefault();
    }
  });
});
