const formLink = document.getElementById("link-form");
const formInput = document.getElementById("link-input");
const errorMsg = document.getElementById("error-msg");

formLink.addEventListener("submit", formSubmitHandler);

function formSubmitHandler(e) {
  e.preventDefault();
  const formValue = formInput.value;
  if (!formValue) {
    errorMsg.textContent = "Please enter something!";

    formInput.classList.add("border-red");
  } else if (isUrlValid(formValue)) {
    formInput.classList.remove("border-red");
    errorMsg.textContent = "";
    alert("A Valid url entered!");
  } else {
    errorMsg.textContent = "Please enter a valid url";
    formInput.classList.add("border-red");
  }
}
function isUrlValid(str) {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IP (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$", // fragment locator
    "i"
  );
  return pattern.test(str);
}
