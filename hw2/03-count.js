const input = document.getElementById("userInput");
const paragraph = document.getElementById("paragraph");
const originalText = paragraph.textContent;
// split the paragraph text into an array of words.
// keep punctuation by splitting on an empty string
// only if that empty string is preceded or followed by punctuation/whitespace
const originalWords = originalText.split(/(?<=[\s,—])|(?=[\s,—])/g);

// This function takes a string and highlights all matching words in the paragraph text
const count = function countMatchingWords(str) {
  // remove existing highlights
  paragraph.textContent = originalText;
  let words = Array.from(originalWords);
  // if the input is empty, highlight nothing
  if (str !== "") {
    words.forEach((word, index) => {
      if (word === str) {
        words[index] = `<span style="background-color: yellow">${word}</span>`;
      }
    });
    paragraph.innerHTML = words.join("");
  }
};

const handleInput = function userInputEventHandler() {
  const userInput = input.value;
  count(userInput);
};

input.addEventListener("input", handleInput);
