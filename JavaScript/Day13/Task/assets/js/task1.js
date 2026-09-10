const heading = document.getElementById("heading")
heading.textContent = "The DOM in JavaScript"

const paragraphs = document.querySelectorAll(".para")

paragraphs.forEach((paragraph, index) => {
paragraph.textContent = "The DOM is a API" + (index + 1)
});
