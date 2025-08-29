const checkbox = document.getElementById("terms");
const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("myForm");

checkbox.addEventListener("click", function(){
	submitBtn.disabled = !this.checked
})

form.addEventListener("click", function(event){
	if(!form.checkValidity()){
		event.preventDefault();
	}
})