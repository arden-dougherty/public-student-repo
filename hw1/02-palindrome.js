const elem = document.querySelector("input");

// This function takes an integer and converts it into a string to determine whether it is a palindrome
const isPalindrome = function isThisNumberAPalindrome(n) {
  let string = n.toString();
  let length = string.length;
  // assume the number is a palindrome
  let palindrome = true;

  // compare characters from the ends going inward
  // if there is ever a mismatch, the number is not a palindrome
  for (let i = 0; i < length / 2; ++i) {
    if (string[i] !== string[length - 1 - i]) palindrome = false;
  }

  return palindrome;
};

// this function updates the response element to reflect whether the user input is a palindrome
const handleInput = function palindromeEventHandler() {
  let input = document.querySelector("input");
  let response = document.getElementById("response");

  if (isPalindrome(input.value)) {
    response.textContent = "Yes. This is a palindrome!";
    response.setAttribute("class", "text-dark-green");
  } else {
    response.textContent = "No. Try again.";
    response.setAttribute("class", "text-dark-red");
  }
};

elem.addEventListener("input", handleInput);
