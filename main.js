// let se_work = document.getElementById("work");
// se_work.style.backgroundColor = "#717171";

// let se_work_h1 = document.getElementById("work").querySelector("h1");
// se_work_h1.style.color = "#fcfcfc";

// let se_contact = document.getElementById("contact");
// se_contact.style.backgroundColor = "#717171";

// let se_contact_h1 = document.getElementById("contact").querySelector("h1");
// se_contact_h1.style.color = "#fcfcfc";


let form = document.getElementById("form");
form.style.border = "thin solid #040404";
form.style.textAlign = "center";
form.style.width = "50%";
form.style.height = "100%";
form.style.borderRadius = "10px";
form.style.padding = "4%";
form.style.marginLeft = "auto";
form.style.marginRight = "auto";
form.style.fontFamily = "Open Sans, Helvetica Neue, sans-serif";
form.style.marginBottom = "100px";
form.style.backgroundColor = "#d1d1d1";

let labels = document.getElementsByTagName("label");
for (label of labels) {
    label.style.fontSize = "30px";
}

let n = document.getElementById("name");
n.style.height = "50px";

let email = document.getElementById("email");
email.style.height = "50px";

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
}