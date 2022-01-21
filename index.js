const form = document.getElementById('form');
const firstName = document.getElementById('first');
const secondName = document.getElementById('second');
const country = document.getElementById('country');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const email = document.getElementById('email');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const secondNameValue = secondName.value.trim();
  const countryValue = country.value.trim();
  const phoneValue = phone.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();
  const emailValue = email.value.trim();

  if(firstNameValue === '') {
		setErrorFor(firstName, 'The name must be more than 2 characters');
	} else {
		setSuccessFor(firstName);
	}

  if(secondNameValue <= 2) {
		setErrorFor(secondName, 'The name must be more than 2 characters');
	} else {
		setSuccessFor(secondName);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form__group error';
	small.innerText = message;
}