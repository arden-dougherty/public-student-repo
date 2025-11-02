const searchButton = document.getElementById("search");
const searchInput = document.getElementById("userInput");
const cardContainer = document.getElementById("cardContainer");

// This function is called whenever the search button is clicked.
// It takes the user's input and performs a search with that string
const handleClick = function searchButtonEventHandler() {
  let searchStr = searchInput.value;
  search(searchStr);
};

// This function takes a string and searches all characters in the data.js file.
// For each character whose name matches the string, a card is created for that character
const search = function searchDataAndCreateCards(str) {
  let matches = 0;
  // if there are cards from a previous search remove them
  while (cardContainer.firstChild)
    cardContainer.removeChild(cardContainer.firstChild);
  // search the characters array and create a card for each match
  characters.forEach((element) => {
    let { name } = element;
    if (name.toLowerCase().includes(str.toLowerCase())) {
      ++matches;
      createCard(element, str);
    }
  });
  // if no matches were found, let the user know
  if (matches <= 0) {
    const response = document.createElement("div");
    const responseText = document.createTextNode("No matches found");
    response.append(responseText);
    cardContainer.append(response);
  }
};

// This function takes an object from the data.js file and generates a card
// containing the character's name and birth year
const createCard = function createCardFromCharacter(obj, searchText) {
  // create a card
  const card = document.createElement("div");
  card.setAttribute("class", "card m-2 p-2");
  // add the character's name as a card title
  const name = document.createElement("h2");
  name.setAttribute("class", "card-title");
  // highlight the searched text
  let regex = new RegExp(searchText, "gi");
  const nameText = document.createTextNode(obj.name);
  name.append(nameText);
  name.innerHTML = name.innerHTML.replace(
    regex,
    '<span style="background-color: yellow">$&</span>'
  );
  card.append(name);
  // add the character's birth year as card text
  const year = document.createElement("p");
  year.setAttribute("class", "card-text");
  const yearText = document.createTextNode(`Birth year: ${obj.birth_year}`);
  year.append(yearText);
  card.append(year);
  // add the card to the container
  cardContainer.append(card);
};

searchButton.addEventListener("click", handleClick);
