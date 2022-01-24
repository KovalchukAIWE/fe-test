const form = document.getElementById('form');
const firstName = document.getElementById('first');
const secondName = document.getElementById('second');
const country = document.getElementById('country');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm');
const email = document.getElementById('email');
const select = document.getElementById('select');

const getData = async() => {
  const response = await fetch('./countries.json');
  const dataCountries = await response.json();
	const countrySelect = dataCountries.map(el => el.name);
	const phoneSelect = dataCountries.map(el => el.dial_code);
	console.log(countrySelect);
	console.log(phoneSelect);
}
getData();

form.addEventListener('submit', function (event) {
  event.preventDefault()

	checkInputs();
});

const checkInputs = () => {
  const firstNameValue = firstName.value.trim();
  const secondNameValue = secondName.value.trim();
  const countryValue = country.value.trim();
  const phoneValue = phone.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();
  const emailValue = email.value.trim();

  if (firstNameValue.length <= 2) {
		setErrorFor(firstName, 'The name must be more than 2 characters');
		setTimeout(function() {
			document.getElementById('firstId').style.display = 'none'
	  }, 4000)
	} else {
		setSuccessFor(firstName);
	};

  if (secondNameValue.length <= 2) {
		setErrorFor(secondName, 'The name must be more than 2 characters');
		setTimeout(function() {
			document.getElementById('secondId').style.display = 'none'
	  }, 4000)
	} else {
		setSuccessFor(secondName);
	};

	if (passwordValue === '') {
		setErrorFor(password, 'Password must have 1 letter, 1 number and one symbol');
		setTimeout(function() {
			document.getElementById('passwordId').style.display = 'none'
	  }, 4000)
	} else if (!isPassword(passwordValue)) {
		setErrorFor(password, 'Password must have 1 letter, 1 number and one symbol');
		setTimeout(function() {
			document.getElementById('passwordId').style.display = 'none'
	  }, 4000)
		setSuccessFor(password);
	};
	
	if (confirmPasswordValue === '') {
		setErrorFor(confirmPassword, 'Password must have 1 letter, 1 number and one symbol');
		setTimeout(function() {
			document.getElementById('confirmId').style.display = 'none'
	  }, 4000)
	} else if (passwordValue !== confirmPasswordValue) {
		setErrorFor(confirmPassword, 'Passwords does not match');
		setTimeout(function() {
			document.getElementById('confirmId').style.display = 'none'
	  }, 4000)
	} else {
		setSuccessFor(confirmPassword);
	};

	if(emailValue === '') {
		setErrorFor(email, 'Email is not correct');
		setTimeout(function() {
			document.getElementById('emailId').style.display = 'none'
	  }, 4000)
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Email is not correct');
		setTimeout(function() {
			document.getElementById('emailId').style.display = 'none'
	  }, 4000)
	} else {
		setSuccessFor(email);
	};

	if(countryValue === '') {
		setErrorFor(country, 'Fill in the field');
		setTimeout(function() {
			document.getElementById('countryId').style.display = 'none'
	  }, 4000)
	} else {
		setSuccessFor(country);
	};

	if(phoneValue === '') {
		setErrorFor(phone, 'Fill in the field');
		setTimeout(function() {
			document.getElementById('phoneId').style.display = 'none'
	  }, 4000)
	} else {
		setSuccessFor(phone);
	};
};

const setErrorFor = (input, message) => {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form__group error';
	small.innerText = message;
}

 const setSuccessFor = (input) => {
	const formControl = input.parentElement;
	formControl.className = 'form__group success';
}
	
const isEmail = (email) => {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

const isPassword = (password) => {
	return /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{3,10}$/.test(password)
}


document.getElementById("registration").addEventListener("click", function(){
	let first = document.querySelector(".first");
	let second = document.querySelector(".second");
	let country = document.querySelector(".country");
	let phone = document.querySelector(".phone");
	let password = document.querySelector(".password");
	let confirm = document.querySelector(".confirm");
	let email = document.querySelector(".email");
	let checkbox = document.querySelector(".checkbox");
	 TweenMax.staggerFrom([
		 first, 
		 second, 
		 country, 
		 phone, 
		 password, 
		 confirm, 
		 email, 
		 checkbox,
		], 2, {top:"200px"}, 0.25);
 })