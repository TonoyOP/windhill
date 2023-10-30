const main = document.querySelector('.main');
const cursor = document.querySelector('.cursor');

main.addEventListener('mousemove',(v) =>{

    cursor.style.left = v.x + 'px';
    cursor.style.top = v.y + 'px';


})

gsap.to('.main',{

    backgroundPosition: 'bottom',
  
})

gsap.from('.LoaderTxt', {

    y: 40,
    duration: 1,
    opacity: 0,
})

gsap.from('.LoaderBtn', {

    y: 40,
    duration: 1.5,
    opacity: 0,
})

