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
        const clone = card.cloneNode(true);
        grid.appendChild(clone);
    });

    let pos = 0;
    const speed = 0.4;
    let halfWidth = 0;

    function tick() {
        if (halfWidth === 0) halfWidth = grid.scrollWidth / 2;
        pos += speed;
        if (pos >= halfWidth) pos = 0;
        grid.style.transform = `translateX(-${pos}px)`;
        requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
}
