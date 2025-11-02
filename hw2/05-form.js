const form = document.getElementById("form");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const registrationField = document.getElementById("registration");
const progLangField = document.getElementById("programmingLanguages");
const osField = document.getElementById("operatingSystems");
const fullStackField = document.getElementById("fullStack");
const additionalField = document.getElementById("additional");

const modal = new bootstrap.Modal(document.getElementById("modal"), {
  keyboard: false,
});
const modalBody = document.getElementById("modalBody");

// This function takes the data from the form and puts it into a modal
const getData = function getFormData(event) {
  // prevent default form submission
  event.preventDefault();

  // remove previous text
  while (modalBody.firstChild) modalBody.removeChild(modalBody.firstChild);

  // get form data
  const name = nameField.value;
  const email = emailField.value;
  const registered = registrationField.value;
  const additional = additionalField.value;

  // if name, email, or registration status is empty, send an error
  if (!name || !email || !registered) {
    alert("Name, email, and registration status are required");
    return;
  }

  // add data to modal
  const nameText = document.createElement("div");
  nameText.textContent = `Full Name: ${name}`;
  modalBody.append(nameText);

  const emailText = document.createElement("div");
  emailText.textContent = `Email: ${email}`;
  modalBody.append(emailText);

  const registrationText = document.createElement("div");
  registrationText.textContent = `Registration Status: ${registered}`;
  modalBody.append(registrationText);

  const coursesText = document.createElement("div");
  coursesText.textContent = "Courses Taken:";
  modalBody.append(coursesText);
  if (progLangField.checked) {
    const progLangText = document.createElement("div");
    progLangText.textContent = "- Programming Langauges";
    modalBody.append(progLangText);
  }
  if (osField.checked) {
    const osText = document.createElement("div");
    osText.textContent = "- Operating Systems";
    modalBody.append(osText);
  }
  if (fullStackField.checked) {
    const fullStackText = document.createElement("div");
    fullStackText.textContent = "- Full Stack Web Development";
    modalBody.append(fullStackText);
  }

  const additionalText = document.createElement("div");
  additionalText.textContent = `Additional Comments: ${additional}`;
  modalBody.append(additionalText);

  // show modal
  modal.show();
};

form.addEventListener("submit", getData);
