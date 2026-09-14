const progress=document.getElementById('progressBar');
const toggle=document.getElementById('themeToggle');
const menu=document.getElementById('mobileMenu');
const menuToggle=document.getElementById('menuToggle');
const top=document.getElementById('backToTop');
function update(){const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(h>0?(scrollY/h)*100:0)+'%';if(top)top.classList.toggle('show',scrollY>700)}
addEventListener('scroll',update,{passive:true});update();
if(localStorage.getItem('itq-theme')==='dark')document.body.classList.add('dark');
if(toggle)toggle.onclick=()=>{document.body.classList.toggle('dark');localStorage.setItem('itq-theme',document.body.classList.contains('dark')?'dark':'light')};
if(menuToggle)menuToggle.onclick=()=>menu.classList.toggle('hidden');
if(top){top.onclick=()=>scrollTo({top:0,behavior:'smooth'});}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
