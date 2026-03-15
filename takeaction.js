const slides= document.querySelectorAll('.slide');
let cur=0;

function goTo(i){
    slides[cur].classList.remove('active');
    cur = (i+slides.length)%slides.length;
    slides[cur].classList.add('active');
}

document.getElementById('next').addEventListener('click', ()=>goTo(cur+1));
document.getElementById('prev').addEventListener('click', ()=>goTo(cur-1));