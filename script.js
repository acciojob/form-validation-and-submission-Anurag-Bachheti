const checkbox = document.getElementById("terms");
const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("myForm");

checkbox.addEventListener("change", function(){
	submitBtn.disabled = !this.checked
})

form.addEventListener("submit", function(event){
	if(!form.checkValidity()){
		event.preventDefault();
		alert("Please complete all fields before submitting.");
	}
})