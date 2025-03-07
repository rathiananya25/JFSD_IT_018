// script.js
document.getElementById('votingForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const nationality = document.getElementById('nationality').value;
  
    // Check eligibility
    let resultText = '';
    if (age >= 18 && nationality !== '') {
      // resultText = `Hi ${name}, you are eligible to vote!`;
      console.log(`Hi ${name}, you are eligible to vote!`);
    } else if (age < 18) {
      resultText = `Hi ${name}, you are not eligible to vote. You must be at least 18 years old.`;
    } else if (nationality === '') {
      resultText = `Hi ${name}, please select your nationality.`;
    }
  
    // Display result
    document.getElementById('result').textContent = resultText;
  });