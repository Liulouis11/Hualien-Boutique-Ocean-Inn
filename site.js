/* site.js — 導覽列捲動狀態 + 手機選單 */
(function(){
  const nav = document.querySelector('.nav');
  if(!nav) return;
  const overMode = nav.classList.contains('nav--over');
  function onScroll(){
    if(!overMode) return;
    const past = window.scrollY > window.innerHeight * 0.72;
    nav.classList.toggle('nav--solid', past);
    nav.classList.toggle('nav--over', !past);
  }
  if(overMode){ window.addEventListener('scroll', onScroll, {passive:true}); onScroll(); }

  const burger = nav.querySelector('.burger');
  const links = nav.querySelector('.links');
  if(burger && links){
    burger.addEventListener('click', ()=>{
      const open = links.style.display === 'flex';
      links.style.display = open ? '' : 'flex';
      links.style.flexDirection = 'column';
      links.style.position = 'absolute';
      links.style.top = '100%'; links.style.right = '0';
      links.style.background = 'var(--paper)';
      links.style.color = 'var(--ink)';
      links.style.padding = '20px 28px';
      links.style.gap = '16px';
      links.style.boxShadow = '0 10px 30px rgba(0,0,0,.12)';
    });
  }
})();
