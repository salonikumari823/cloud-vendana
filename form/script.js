function submitForm(event) {
    event.preventDefault();
  
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const gender = getSelectedGender();
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
  
    // Validate form fields
    if (!firstName || !lastName || !dob || !country || !gender || !profession || !email || !mobile) {
      alert('All fields are required. Please fill out the form.');
      return;
    }
  
    // Display values in popup
    const popupContent = document.getElementById('popupContent');
    popupContent.innerHTML = `
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Date of Birth:</strong> ${dob}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>Profession:</strong> ${profession}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;
  
    // Show popup
    document.getElementById('popup').style.display = 'flex';
  
    // Reset form
    resetForm();
  }
  
  function resetForm() {
    document.getElementById('surveyForm').reset();
  }
  
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }
  
  function getSelectedGender() {
    const checkboxes = document.querySelectorAll('input[name="gender"]:checked');
    const genderValues = Array.from(checkboxes).map(checkbox => checkbox.value);
    return genderValues.join(', ');
  }
  