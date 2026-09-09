const button = document.getElementById("btn")
const box = document.getElementById("box")




btn.addEventListener("click",()=>{ 

    box.textContent='This is DOM';

   if (box.textContent =='This is DoM') {
    btn.textContent='show';

    box.textContent='thangam Bharathi';
    
   }else{
    btn.textContent='hiden';
    box.textContent='Bharathi kaviya';
}
    
});