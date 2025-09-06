document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const terms = document.getElementById("terms");
  const submitBtn = document.getElementById("submitBtn");

  // Enable/disable submit based on checkbox
  terms.addEventListener("change", function () {
    submitBtn.disabled = !terms.checked;
  });

  // Extra validation before submit
  form.addEventListener("submit", function (e) {
    if (!form.checkValidity()) {
      e.preventDefault();
      alert("Please fill all fields correctly.");
    }
  });
});
