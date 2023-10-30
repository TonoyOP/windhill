// NAVBAR RESPONSIVE FUNCTIONALITY

function navBarFunctionality(){

    let iBtn = document.querySelector('.icon');
    let navEl = document.querySelector('.nav');
    iBtn.addEventListener('click',() =>{
  
      navEl.classList.toggle('xpand');
      document.querySelector('.frontUi-main').classList.toggle('rl');
      if(navEl.classList.contains('xpand')){
  
      
        let closeICode = `<i class="fa-solid fa-xmark"></i>`;
        iBtn.innerHTML = closeICode;
    
      }
    
      else{
    
        iBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
      }
  
  
    })
  }
  
navBarFunctionality();


// PAGE MAIN SOUND
const clickSound = new Audio('Assets\\clickSEnhancedx.mp3');
const mainAudio = new Audio('Assets\\Sedative.mp3')
function btnSound(){
 
  
    
  document.querySelector('#aF').addEventListener('mouseover', () =>{
  
      clickSound.play();
  })
  
  document.querySelector('#aS').addEventListener('mouseover', () =>{
  
     clickSound.play();
  })
  
  document.querySelector('#aT').addEventListener('mouseover', () =>{
  
    clickSound.play();
  })

  mainAudio.play();
}

btnSound();



/*   CUSTOM CURSOR */

const cursor = document.querySelector('.cursor');
const main = document.querySelector('.main');

main.addEventListener('mousemove',(e) =>{

  cursor.style.left = e.x + 'px'
  cursor.style.top = e.y + 'px'

})

function pageGsapCode(){

  let tl = gsap.timeline();

  tl.to('.frontUi',{

    backgroundPosition: 'bottom',
    duration: 2,
  })

  tl.from('.logo',{

    opacity: 0,
    y: -40,
    duration: 1,
  })

  tl.from('.navList',{

    y: -40,
    opacity: 0,
    duration: 1
  })

  tl.from('img',{

    y: -40,
    opacity: 0,
    duration: .5,
  })

  tl.from('.frontUi-main p',{
    y:-40,
    opacity: 0,
    duration: 0.5
  })

  tl.to('.playBtn',{
    opacity: 1,
    duration: 0.5,
  })
}

pageGsapCode();

let playBtn = document.querySelector('.playBtn');

playBtn.addEventListener('click',() =>{

  document.querySelector('.frontUi').classList.add('rl');
  document.querySelector('.main').classList.add('xxl');
  document.querySelector('.xxl-code').style.display = 'block';
})



