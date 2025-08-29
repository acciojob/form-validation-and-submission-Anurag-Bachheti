const checkbox = document.getElementById("terms");
const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("myForm");

// Enable/disable button based on checkbox
checkbox.addEventListener("change", function () {
  submitBtn.disabled = !this.checked;
});

// Validate form before submission
form.addEventListener("submit", function (event) {
  if (!form.checkValidity()) {
    event.preventDefault();
    alert("Please fill all fields before submitting.");
  }
});