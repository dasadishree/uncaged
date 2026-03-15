const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries)=> {
    entries.forEach((e,i)=> {
        if(e.isIntersecting){
            setTimeout(()=> e.target.classList.add('visible'), i*80);
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.12});

reveals.forEach(r=>observer.observe(r));
const grid = document.getElementById('factsGrid');
if(grid){
    const originals = Array.from(grid.children);
    originals.forEach(card=>{
        const clone=card.cloneNode(true);
        grid.appendChild(clone);
    });

    let pos=0;
    const speed=0.5;

    grid.addEventListener('mouseenter', ()=>speed_paused=true);
    grid.addEventListener('mouseleave', ()=>speed_paused=false);

    let speed_paused=false;
    function tickWithPause() {
        if(!speed_paused){
            pos+=speed;
            const halfWidth=grid.scrollWidth/2;
            if(pos>=halfWidth)pos=0;
            grid.style.transform = `translateX(-${pos}px)`;
        }
        requestAnimationFrame(tickWithPause);
    }

    requestAnimationFrame(tickWithPause);
}
