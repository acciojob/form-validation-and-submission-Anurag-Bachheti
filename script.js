const form = document.getElementById("myForm");
    const terms = document.getElementById("terms");
    const submitBtn = document.getElementById("submitBtn");

    // Enable submit button only when checkbox is checked
    terms.addEventListener("change", () => {
      submitBtn.disabled = !terms.checked;
    });

    // Validate all fields before submit
    form.addEventListener("submit", (e) => {
      if (!form.checkValidity()) {
        e.preventDefault(); // prevent submission if fields are invalid
        alert("Please complete all required fields.");
      }
    });