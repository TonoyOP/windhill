

const loco_ScrollTriggerFix = () =>{

    gsap.registerPlugin(ScrollTrigger);



const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});





ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();

}

loco_ScrollTriggerFix(); 

/*  NAVBAR RESPONSIVE FUNCTIONALITY*/ 

function navBarFunctionality(){

  let iBtn = document.querySelector('.icon');
  let navEl = document.querySelector('.nav');
  iBtn.addEventListener('click',() =>{

    navEl.classList.toggle('xpand');
    document.querySelector('.frontUi-main').classList.toggle('rl');
    document.querySelector('.frontUi-scroll-i').classList.toggle('rl');

    if(navEl.classList.contains('xpand')){

    
      let closeICode = `<i class="fa-solid fa-xmark"></i>`;
      iBtn.innerHTML = closeICode;
  
    }
  
    else{
  
      iBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`
    }


  })
}

navBarFunctionality();


/* FRONT UI GSAP CODE (SCROLL TRIGGER) */ 
function frontUiGsapCode(){

  gsap.to('.frontUi-main',{

  transform: 'translateX(-100%)',
  scrollTrigger: {

    trigger: '.frontUi',
    scroller: '.main',
    scrub: 3,
    pin: true,
    start: 'top 0%',
    end: 4000

  }
})

gsap.to('.frontUi-scroll-i',{

  y: 20,
  
  duration: 2,
  repeat: -1,
  yoyo: true
})



let tl = gsap.timeline();

tl.from('.frontUi',{

  opacity: 0,
  duration: 3,
 })

tl.from('.logo',{

  y: -20,
  opacity: 0,
  duration: .5,

})

tl.from('.navList',{

  y: -20,
  opacity: 0,
  duration: .5
})

tl.from('.frontUi-main-cont h1',{

  y: -40,
  opacity: 0,
  duration: 1
})

tl.from('.frontUi-main-cont p',{

  y: -40,
  opacity: 0,
  duration: 1
})

}
frontUiGsapCode();


/* Front Ui Sound Effects */ 
function frontUiSound(){
  const clickSound = new Audio('Assets\\clickSEnhancedx.mp3');
  const mainAudio = new Audio('Assets\\Sedative.mp3')
function btnSound(){
  ;
  let afTag = document.querySelector('#aF').addEventListener('mouseenter', () =>{

  
    clickSound.play();
})

let asTag = document.querySelector('#aS').addEventListener('mouseover', () =>{

   clickSound.play();
})

let atTag = document.querySelector('#aT').addEventListener('mouseover', () =>{

  clickSound.play();
})
}

btnSound();

mainAudio.play();

}

frontUiSound();


/*   CUSTOM CURSOR */

const cursor = document.querySelector('.cursor');
const main = document.querySelector('.main');

main.addEventListener('mousemove',(e) =>{

  cursor.style.left = e.x + 'px'
  cursor.style.top = e.y + 'px'

})



