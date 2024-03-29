function validateName(){
	var nameField = document.getElementById('name');
	var validName = /^[A-Za-z\s]+$/;
	var errorName = document.getElementById('nameError');

	if(nameField.value == 0){
		errorName.innerHTML = "Rellene este campo";
		nameField.classList.add("error");
		nameField.classList.add("errorIcon");
		return false; 
	}
	else if(validName.test(nameField.value)){
		nameField.classList.remove("error");
		nameField.classList.remove("errorIcon");
		errorName.innerHTML = "";
		nameField.classList.add("success");
		nameField.classList.add("successIcon");
		return true; 
	}
	else {
		errorName.innerHTML = "Nombre inválido";
		nameField.classList.add("error");
		nameField.classList.add("errorIcon");
		return false; }
	}

function validateEmail(){
	var emailField = document.getElementById('email');
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	var errorEmail = document.getElementById('emailError');

	if(emailField.value == 0){
		errorEmail.innerHTML = "Rellene este campo";
		emailField.classList.add("error");
		emailField.classList.add("errorIcon");
		return false; 
	}
	else if(validEmail.test(emailField.value) ){
		emailField.classList.remove("error");
		emailField.classList.remove("errorIcon");
		errorEmail.innerHTML = "";
		emailField.classList.add("success");
		emailField.classList.add("successIcon");
		return true; 
	}
	else {
		errorEmail.innerHTML = "Email inválido";
		emailField.classList.add("error");
		emailField.classList.add("errorIcon");
		return false; 
	}
} 

function validatePassword(){
	var passwordField = document.getElementById('password');
	var validPassword = /^[\s\S]{1,8}$/;
	var errorPassword = document.getElementById('passError');

	if(passwordField.value == 0){
		errorPassword.innerHTML = "Rellene este campo";
		passwordField.classList.add("error");
		passwordField.classList.add("errorIcon");
		return false; }
	else if(validPassword.test(passwordField.value) ){
		passwordField.classList.remove("error");
		passwordField.classList.remove("errorIcon");
		errorPassword.innerHTML = "";
		passwordField.classList.add("success");
		passwordField.classList.add("successIcon");
		return true; 
	}
	else {	
		errorPassword.innerHTML = "No debe tener mas de 8 caracteres";
		passwordField.classList.add("error");
		return false; }
}

function validateConfirm(){
	var passwordField = document.getElementById('password');
	var confirmField = document.getElementById('confirm');
	var errorConfirm = document.getElementById('confirmError');

	if(confirmField.value == 0){
		errorConfirm.innerHTML = "Rellene este campo";
		confirmField.classList.add("error");
		confirmField.classList.add("errorIcon");
		return false;
	 }
	else if (passwordField.value == confirmField.value ){
		confirmField.classList.remove("error");
		confirmField.classList.remove("errorIcon");
		errorConfirm.innerHTML = "";
		confirmField.classList.add("success");
		confirmField.classList.add("successIcon");
		return true; 
	}
	else {
		errorConfirm.innerHTML = "Las contraseñas no coinciden";
		confirmField.classList.add("error");
		confirmField.classList.add("errorIcon");
		return false; 
	} 
}

function borderButton(){
	var borderButton = document.getElementById('button');
	borderButton.onmouseover = () => {
		borderButton.classList.add('borderColor'); 	}
	borderButton.onmouseout = () => {	
		borderButton.classList.remove('borderColor'); 	}
}
borderButton()

function validateForm(){

	if (validateConfirm() && validatePassword() && validateEmail() && validateName()){
		alert("La inscripcion ha sido correcta");
		return true; }
	else {
		return false; }
}