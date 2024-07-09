// menu

const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none";
  }
});

// contact form

class Contact {
  constructor(firstName, secondName, emailAddress, address) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.emailAddress = emailAddress;
    this.address = address;
  }
}

const contactButton = document.querySelector(".contact-button");
const contactForm = document.querySelector("form");
const submitButton = document.querySelector(".submit-button");
const infoParagraph = document.createElement("p");
const output = document.querySelector(".output");
const error = document.getElementById("error-info");

contactButton.addEventListener("click", () => {
  contactForm.style.display = "block";
  infoParagraph.textContent = "";
  output.innerHTML = "";
  error.textContent = "";
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  error.innerHTML = "";

  const firstName = document.getElementById("first-name").value;
  const secondName = document.getElementById("surname").value;
  const emailAddress = document.getElementById("email").value;
  const address = document.getElementById("address").value;

  const userContact = new Contact(firstName, secondName, emailAddress, address);

  let isValid = true;

  if (userContact.firstName === "") {
    isValid = false;
    error.innerHTML = "You need to enter name. <br>";
  }
  if (userContact.secondName === "") {
    isValid = false;
    error.innerHTML += "You need to enter surname. <br>";
  }
  if (userContact.emailAddress === "") {
    isValid = false;
    error.innerHTML += "You need to enter e-mail. <br>";
  }
  if (userContact.address === "") {
    isValid = false;
    error.innerHTML += "You need to enter address. <br>";
  }
  if (isValid) {
    contactForm.style.display = "none";

    document.getElementById("first-name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    error.innerHTML = "";

    infoParagraph.textContent = "Your message was send.";

    document.querySelector(".send-info").appendChild(infoParagraph);
    output.innerHTML = `Your entered information: <br> Name: ${userContact.firstName} <br> Surname: ${userContact.secondName} <br> E-mail: ${userContact.emailAddress} <br> Address: ${userContact.address} `;
  }
});
