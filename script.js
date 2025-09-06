 const form = document.getElementById("myForm");
    const terms = document.querySelector('input[name="terms"]');
    const submitBtn = document.getElementById("submitBtn");

    // Enable submit button only when checkbox is checked
    terms.addEventListener("change", () => {
      submitBtn.disabled = !terms.checked;
    });

    // Validate before submission
    form.addEventListener("submit", (e) => {
      if (!form.checkValidity()) {
        e.preventDefault();
        alert("Please complete all required fields.");
      }
    });