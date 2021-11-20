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

let labels = document.getElementsByTagName("label");
for (label of labels) {
    label.style.fontSize = "30px";
}

let name = document.getElementById("name");
name.style.height = "50px";

let email = document.getElementById("email");
email.style.height = "50px";

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
}