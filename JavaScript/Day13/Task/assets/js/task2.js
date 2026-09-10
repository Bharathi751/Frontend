const heading = document.getElementById("heading");
const button = document.getElementById("btn");

button.addEventListener("click", () => {

heading.textContent = "Button Clicked";

heading.style.color = "red";

heading.classList.add("newStyle");

});