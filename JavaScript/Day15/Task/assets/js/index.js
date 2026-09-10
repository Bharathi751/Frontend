/* const title = document.getElementById("title")
const btn = document.getElementById("btn")
const images = document.getElementById("imgs")
const link = document.getElementById("link")


btn.addEventListener("click",()=>{

    title.textContent = "This Is DOM in JAVASCRIPT"

    images.src ="images/google.jpg"

    link.href ="https://chatgpt.com/c/6aa28537-cd60-83e8-8886-dd2048bcd69c"



}) */


const showbtn = document.getElementById("showbtn")
const box = document.getElementById("box")

let ison = false
 
showbtn.addEventListener("click",()=>{

if (box.style.display === "none") {
    
box.style.display = "block"

}else{

    box.style.display = "none"
}

  /*   ison = !ison

if (ison) {

    box.style.display = "none"
    showbtn.textContent = "show"
    
}else{

    box.style.display = "block"
    showbtn.textContent = "hide"
}
 */
   
})