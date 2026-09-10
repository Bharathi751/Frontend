const para = document.getElementById("para");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {

    para.classList.toggle("show");

    if (para.classList.contains("show")) {
        btn.textContent = "Hide";
    } else {
        btn.textContent = "Show";
    }

});   