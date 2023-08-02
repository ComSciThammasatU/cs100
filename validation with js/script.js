function validateName() {
  const fullnameInput = document.getElementById("fullname");
  const names = fullnameInput.value.trim().split(" ");
  const errorElement = document.getElementById("fullnameError");

  if (names.length !== 2) {
    errorElement.textContent = "Please enter both your Firstname and Lastname.";
    return false;
  } else {
    errorElement.textContent = ""; // Clear the error message when valid
  }
  return true;
}

function validateStudentID() {
  const studentIDInput = document.getElementById("studentID");
  const studentIDPattern = /^\d{10}$/;
  const errorElement = document.getElementById("studentIDError");

  if (!studentIDPattern.test(studentIDInput.value)) {
    errorElement.textContent = "Please enter a 10-digit Student ID.";
    return false;
  } else {
    errorElement.textContent = ""; // Clear the error message when valid
  }
  return true;
}

function validateEmail() {
  const emailInput = document.getElementById("email");
  const emailPattern = /^.+@dome\.tu\.ac\.th$/;
  const errorElement = document.getElementById("emailError");

  if (!emailPattern.test(emailInput.value)) {
    errorElement.textContent = "Please provide a valid university email in the format 'xxx.yyy@dome.tu.ac.th'.";
    return false;
  } else {
    errorElement.textContent = ""; // Clear the error message when valid
  }
  return true;
}

function validateFormOnInput() {
  validateName();
  validateStudentID();
  validateEmail();
}

function submitForm(event) {
  event.preventDefault();
  if (validateForm()) {
    const startDateInput = document.getElementById("startDate").value;
    const endDateInput = document.getElementById("endDate").value;
    const startDate = new Date(startDateInput);
    const endDate = new Date(endDateInput);

    if (endDate <= startDate) {
      alert("End datetime should be after the start datetime.");
      return;
    }
    
    const formData = new FormData(event.target);
    for (const [name, value] of formData) {
      console.log(name, value);
    }
    document.getElementById("myForm").reset();
  }
}

document.getElementById("myForm").addEventListener("submit", submitForm);
document.getElementById("fullname").addEventListener("input", validateName);
document.getElementById("studentID").addEventListener("input", validateStudentID);
document.getElementById("email").addEventListener("input", validateEmail);
