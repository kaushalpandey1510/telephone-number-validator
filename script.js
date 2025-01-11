// Get references to the HTML elements
const userInput = document.getElementById('user-input'); // Input field for the user to enter the phone number
const checkButton = document.getElementById('check-btn'); // Button to trigger the phone number validation
const clearButton = document.getElementById('clear-btn'); // Button to clear the results displayed
const results = document.getElementById('results-div'); // Div to display the validation results

// Function to validate the phone number input
const checkInput = () => {
  // Check if the input field is empty or only contains whitespace
  if (!userInput.value.trim()) {
    alert("Please provide a phone number"); // Alert the user to provide input
    return; // Stop further execution of the function
  }

  // Array of regular expression patterns to match valid US/Canada phone numbers
  const regexPattern = [
    /^1?\s?[0-9]{3}[-][0-9]{3}-[0-9]{4}$/g, // Pattern for numbers like 123-456-7890 or 1 123-456-7890
    /^1?\s?[(][0-9]{3}[)]\s?[0-9]{3}[-][0-9]{4}$/g, // Pattern for numbers like (123) 456-7890 or 1 (123) 456-7890
    /^1?\s?[0-9]{3}\s[0-9]{3}\s[0-9]{4}$/g, // Pattern for numbers like 123 456 7890 or 1 123 456 7890
    /^[0-9]{10}$/g // Pattern for numbers like 1234567890
  ];

  // Trim whitespace from the user's input
  const trimUserInput = userInput.value.trim();

  // Check if the trimmed input matches any of the regex patterns
  const patternMatched = regexPattern.some((pattern) => pattern.test(trimUserInput));

  // If the input matches one of the patterns, display it as a valid number
  if (patternMatched) {
    results.innerHTML += "<br>Valid US number: " + trimUserInput;
  } else {
    // Otherwise, display it as an invalid number
    results.innerHTML += "<br>Invalid US number: " + trimUserInput;
  }
};

// Function to clear the results displayed in the results div
const clearInput = () => {
  results.innerHTML = ""; // Reset the content of the results div
};

// Attach event listeners to the buttons
checkButton.addEventListener('click', checkInput); // Call checkInput when the "Check" button is clicked
clearButton.addEventListener('click', clearInput); // Call clearInput when the "Clear" button is clicked
