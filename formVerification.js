// Function checks if text typed in a name field is in a valid name syntax
function  validUsername() {
	var userName = document.getElementById('userName');			
	var regex = /^[a-zA-Z][a-zA-Z0-9\-\_]*$/;
	// If the captured username does not match the regex pattern, display an error message in red, and return false as an "error code".
	if (!regex.test(userName.value)) {
		document.getElementById('userNameError').innerHTML = 'The name entered is not valid. Your username must start with an alphabet, and only "-" and "_" symbols are allowed.';
		document.getElementById('userNameError').style.color = 'red';
		return false;
	// If the captured username matches the regex pattern, clear any error messages if they are present, and return true as a "success code".
	} else {
		document.getElementById('userNameError').innerHTML = '';
		return true;
	}
}

// Function checks if text typed in a name field is in a valid name syntax
function  validPassword() {
	var password = document.getElementById('password');			
	var regex = /^[a-zA-Z][a-zA-Z0-9\-\_]*$/;
	// If the captured password does not match the regex pattern, display an error message in red, and return false as an "error code".
	if (!regex.test(password.value)) {
		document.getElementById('passwordError').innerHTML = 'The password entered is not valid. Your password must start with an alphabet, and only "-" and "_" symbols are allowed.';
		document.getElementById('passwordError').style.color = 'red';
		return false;
	// If the captured password matches the regex pattern, clear any error messages if they are present, and return true as a "success code".
	} else {
		document.getElementById('passwordError').innerHTML = '';
		return true;
	}
}

// Function checks if text typed in a name field is in a valid name syntax
function  validFirstName() {
	var firstName = document.getElementById('firstName');			
	var regex = /^[a-zA-Z][a-zA-Z \']*$/;
	// If the captured first name does not match the regex pattern, display an error message in red, and return false as an "error code".
	if (!regex.test(firstName.value)) {
		document.getElementById('firstNameError').innerHTML = 'The name entered is not valid. Do not use characters other than alphabets, single whitespace or apostrophes.';
		document.getElementById('firstNameError').style.color = 'red';
		return false;
	// If the captured first name matches the regex pattern, clear any error messages if they are present, and return true as a "success code".
	} else {
		document.getElementById('firstNameError').innerHTML = '';
		return true;
	}
}

// Function checks if text typed in a name field is in a valid name syntax
function  validLastName() {
	var lastName = document.getElementById('lastName');
	var regex = /^[a-zA-Z][a-zA-Z \']*$/;
	// If the captured last name does not match the regex pattern, display an error message in red, and return false as an "error code".
	if (!regex.test(lastName.value)) {
		document.getElementById('lastNameError').innerHTML = 'The name entered is not valid. Do not use characters other than alphabets, single whitespace or apostrophes.';
		document.getElementById('lastNameError').style.color = 'red';
		return false;
	// If the captured last name matches the regex pattern, clear any error messages if they are present, and return true as a "success code".
	} else {
		document.getElementById('lastNameError').innerHTML = '';
		return true;
	} 
}

// Function checks if user-input date of birth is in a valid dd/mm/yyyy format.
function validDOB() {
	var dateOfBirth = document.getElementById('dateOfBirth');
	// taken from 'http://stackoverflow.com/questions/5465375/javascript-date-regex-dd-mm-yyyy')
	var regex = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;
	// If the captured Date of Birth does not match the regex pattern, display an error message in red, and return false as an "error code".
	if (!regex.test(dateOfBirth.value)) {
		document.getElementById('dobError').innerHTML = 'The date of birth entered is not valid. Please enter a valid date in the format dd/mm/yyyy.';
		document.getElementById('dobError').style.color = 'red';
		return false;
	// If the captured Date of Birth matches the regex pattern, clear any error messages if they are present, and return true as a "success code".
	} else {
		document.getElementById('dobError').innerHTML = '';
		return true;
	} 
}

function validSex() {
	var sex = document.getElementById('subjectSex');
	console.log("sex is "+sex.value);
	if (sex.value == 'm' || sex.value == 'f') {
		document.getElementById('sexError').innerHTML = '';
		return true;
	} else {
		document.getElementById('sexError').innerHTML = 'Please make a choice for Male or Female.';
		document.getElementById('sexError').style.color = 'red';
		return false;
	} 
}

function validPractitioner() {
	var pracID = document.getElementById('practitionerDropdown');
	console.log("pracID is "+pracID.value);
	if (pracID.value != '') {
		document.getElementById('practitionerError').innerHTML = '';
		return true;
	} else {
		document.getElementById('practitionerError').innerHTML = 'Please make a choice for practitioner.';
		document.getElementById('practitionerError').style.color = 'red';
		return false;
	} 
}

function validSubject() {
	var subjectID = document.getElementById('subjectDropdown');
	console.log("subjectID is "+subjectID.value);
	if (subjectID.value != '') {
		document.getElementById('subjectError').innerHTML = '';
		return true;
	} else {
		document.getElementById('subjectError').innerHTML = 'Please make a choice for subject.';
		document.getElementById('subjectError').style.color = 'red';
		return false;
	} 
}

// Function checks if all field checks have been satisfied. If yes, proceed. If not, deny progress, and popup with an alert message. 
// This function is run upon pressing of the submit button.
function validLoginInfo() {
	// Check that all field verification functions have returned true as success codes. If not, cause an alert popup box to appear with an error message, 
	// and return false to prevent redirection of the page to the "successful registration page"
	if (!(validUserName() && validPassword())) {
		alert("Please fix any errors in your provided information before we proceed with registration.");
		return false;
	// If the field verification functions have all returned true, the user's input is valid and we allow him to proceed to the "successful registration page"
	} else {
		return true;
	}
}

// Function checks if all field checks have been satisfied. If yes, proceed. If not, deny progress, and popup with an alert message. 
// This function is run upon pressing of the submit button.
function validSubjectInfo() {
	// Check that all field verification functions have returned true as success codes. If not, cause an alert popup box to appear with an error message, 
	// and return false to prevent redirection of the page to the "successful registration page"
	if (!(validFirstName() && validLastName() && validDOB() && validSex())) {
		alert("Please fix any errors in your provided information before the new subject can be added.");
		return false;
	// If the field verification functions have all returned true, the user's input is valid and we allow him to proceed to the "successful registration page"
	} else {
		return true;
	}
}

// Function checks if all field checks have been satisfied. If yes, proceed. If not, deny progress, and popup with an alert message. 
// This function is run upon pressing of the submit button.
function validRelationshipInfo() {
	// Check that all field verification functions have returned true as success codes. If not, cause an alert popup box to appear with an error message, 
	// and return false to prevent redirection of the page to the "successful registration page"
	if (!(validSubject() && validPractitioner())) {
		alert("Please fix any errors in your provided information before we proceed with registration.");
		return false;
	// If the field verification functions have all returned true, the user's input is valid and we allow him to proceed to the "successful registration page"
	} else {
		return true;
	}
}

// Function checks if all field checks have been satisfied. If yes, proceed. If not, deny progress, and popup with an alert message. 
// This function is run upon pressing of the submit button.
function validPractitionerInfo() {
	// Check that all field verification functions have returned true as success codes. If not, cause an alert popup box to appear with an error message, 
	// and return false to prevent redirection of the page to the "successful registration page"
	if (!(validFirstName() && validLastName() && validUsername() && validPassword())) {
		alert("Please fix any errors in your provided information before the new subject can be added.");
		return false;
	// If the field verification functions have all returned true, the user's input is valid and we allow him to proceed to the "successful registration page"
	} else {
		return true;
	}
}

// Function checks if text typed in a description field is in a valid description syntax
function  validDescription() {
	var description = document.getElementById('description');			
	var regex = /^[a-zA-Z][a-zA-Z_]*$/;
	// If the captured description does not match the regex pattern, display an error message in red, and return false as an "error code".
	if (!regex.test(description.value)) {
		document.getElementById('descriptionError').innerHTML = 'The description entered is not valid. Do not use characters other than alphabets or underscores(_).';
		document.getElementById('descriptionError').style.color = 'red';
		return false;
	// If the captured description matches the regex pattern, clear any error messages if they are present, and return true as a "success code".
	} else {
		document.getElementById('descriptionError').innerHTML = '';
		return true;
	}
}

// Function checks if user-input test date is in a valid dd/mm/yyyy format.
function validTestDate() {
	var testDate = document.getElementById('testDate');
	// taken from 'http://stackoverflow.com/questions/5465375/javascript-date-regex-dd-mm-yyyy')
	var regex = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;
	// If the captured test date does not match the regex pattern, display an error message in red, and return false as an "error code".
	if (!regex.test(testDate.value)) {
		document.getElementById('testDateError').innerHTML = 'The test date entered is not valid. Please enter a valid date in the format dd/mm/yyyy.';
		document.getElementById('testDateError').style.color = 'red';
		return false;
	// If the captured test date matches the regex pattern, clear any error messages if they are present, and return true as a "success code".
	} else {
		document.getElementById('testDateError').innerHTML = '';
		return true;
	} 
}

// Function checks if the True Falls Risk entered is in a valid TFR syntax
function validTFR() {
	var tfr = document.getElementById('fallsRisk');			
	
	var regex = /^-?\d\.?\d{0,2}$/;

	// If the captured tfr does not match the regex pattern, display an error message in red, and return false as an "error code".
	if (!regex.test(tfr.value) || tfr.value > 5.0 || tfr.value < -5.0) {
		console.log(tfr.value);
		document.getElementById('tfrError').innerHTML = 'The Falls Risk Value entered is not valid. Please enter a number in 2 Decimal places in the range -5 <= 0 <= 5.';
		document.getElementById('tfrError').style.color = 'red';
		return false;
	// If the captured tfr matches the regex pattern, clear any error messages if they are present, and return true as a "success code".
	} else {
		document.getElementById('tfrError').innerHTML = '';
		return true;
	}
}

// Function checks if all field checks have been satisfied. If yes, proceed. If not, deny progress, and popup with an alert message. 
// This function is run upon pressing of the submit button.
function validDataInfo() {
	// Check that all field verification functions have returned true as success codes. If not, cause an alert popup box to appear with an error message, 
	// and return false to prevent redirection of the page to the "successful registration page"
	if (!(validDescription() && validTestDate() && validTFR())) {
		alert("Please fix any errors in your provided information before the new data can be added.");
		return false;
	// If the field verification functions have all returned true, the user's input is valid and we allow him to proceed to the "successful registration page"
	} else {
		return true;
	}
}
