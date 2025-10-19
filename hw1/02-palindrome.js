const input = document.querySelector("input");

// This function takes an integer and converts it into a string to determine whether it is a palindrome
const isPalindrome = function isThisNumberAPalindrome(num) {
  let palindrome = false;
  let reverse = num.split("").reverse().join("");
  if (reverse == num) palindrome = true;

  return palindrome;
};

// this function updates the response element to reflect whether the user input is a palindrome
const handleInput = function palindromeEventHandler() {
  let response = document.getElementById("response");

  // no response if input is empty
  if (input.value === "") {
    response.textContent = "";
  }

  // error message if number is negative
  else if (input.value <= 0) {
    response.textContent = "Please enter a positive number";
    response.setAttribute("class", "text-danger");
  }

  // if input is valid, check if its a palindrome
  else if (isPalindrome(input.value)) {
    response.textContent = "Yes. This is a palindrome!";
    response.setAttribute("class", "text-success");
  } else {
    response.textContent = "No. Try again.";
    response.setAttribute("class", "text-danger");
  }
};

input.addEventListener("input", handleInput);
