const form = document.getElementById("myForm");
    const terms = document.getElementById("terms");
    const submitBtn = document.getElementById("submitBtn");

    // Enable/disable button whenever checkbox changes
    terms.addEventListener("change", () => {
      if (terms.checked) {
        submitBtn.removeAttribute("disabled"); // ✅ explicitly remove disabled
      } else {
        submitBtn.setAttribute("disabled", "true");
      }
    });

    // Validate before submit
    form.addEventListener("submit", (e) => {
      if (!form.checkValidity()) {
        e.preventDefault();
        alert("Please complete all required fields.");
      }
    });