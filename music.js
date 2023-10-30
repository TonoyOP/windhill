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

var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    loop: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 40,
      shadowScale: 1.2,
    },
    
  });
  

// MUSIC PLAYER FUNCTIONALITY

function musicPlayer(){

    let LevyEternity = new Audio('Assets\\LevaEternity.mp3');
    let Sedative = new Audio('Assets\\s.mp3');
    let SummerWalk = new Audio('Assets\\SummerWalk.mp3');
    let InsideYou = new Audio('Assets\\Inside You.mp3');

    let Btn = document.querySelector('.swiper-slide .icon');
    Btn.addEventListener('click', () => {

        mainAudio.pause();
        Sedative.pause();
        SummerWalk.pause();
        InsideYou.pause();

        Btn.classList.toggle('active');

        if(Btn.classList.contains('active')){

            Btn.innerHTML = `<i class="fa-solid fa-circle-pause"></i>`;
            Btn2.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
            Btn3.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
            Btn4.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
            LevyEternity.play();


            
        }
        else{

            Btn.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
           
            setTimeout(()=>{

                LevyEternity.pause();
            }, 1)
            
        }


    })

    let Btn2 = document.querySelector('.swiper-slide .icon2');
    Btn2.addEventListener('click', () => {

        mainAudio.pause();
        Sedative.pause();
        LevyEternity.pause();
        InsideYou.pause();



        Btn2.classList.toggle('active');

        if(Btn2.classList.contains('active')){

            Btn2.innerHTML = `<i class="fa-solid fa-circle-pause"></i>`;
            Btn.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
            Btn3.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
            Btn4.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
            SummerWalk.play();
            
        }
        else{

            Btn2.innerHTML = `<i class="fa-solid fa-circle-play"></i>`
            setTimeout(()=>{

                SummerWalk.pause();
            }, 1)
            
        }
    })

    let Btn3 = document.querySelector('.swiper-slide .icon3');
    Btn3.addEventListener('click', () => {

        mainAudio.pause();
        LevyEternity.pause();
        InsideYou.pause();
        SummerWalk.pause();



        Btn3.classList.toggle('active');

        if(Btn3.classList.contains('active')){

            Btn3.innerHTML = `<i class="fa-solid fa-circle-pause"></i>`;
            Btn.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
            Btn2.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
            Btn4.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
            Sedative.play();
            
        }
        else{

            Btn3.innerHTML = `<i class="fa-solid fa-circle-play"></i>`
            setTimeout(()=>{

                Sedative.pause();
            }, 1)
            
        }
    })

    let Btn4 = document.querySelector('.swiper-slide .icon4');
    Btn4.addEventListener('click', () => {

        mainAudio.pause();
        LevyEternity.pause();
        Sedative.pause();
        SummerWalk.pause();



        Btn4.classList.toggle('active');

        if(Btn4.classList.contains('active')){

            Btn4.innerHTML = `<i class="fa-solid fa-circle-pause"></i>`;
            Btn.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
            Btn2.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
            Btn3.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
            InsideYou.play();
            
        }
        else{

            Btn4.innerHTML = `<i class="fa-solid fa-circle-play"></i>`
            setTimeout(()=>{

                InsideYou.pause();
            }, 1)
            
        }
    })

    
}

musicPlayer();

// MAIN GSAP CODE

function mainGsapCode(){

    let tl = gsap.timeline();

    tl.to('.frontUi', {
        backgroundPosition : 'bottom',
        duration: 3
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

      tl.from('.frontUi-main-txt',{

        opacity: 0,
        y: -40,
        duration: .5
      })

      tl.from('.swiper', {

        opacity: 0,
        y: 40,
        duration: .5
      })
}

mainGsapCode();


/*   CUSTOM CURSOR */

const cursor = document.querySelector('.cursor');
const main = document.querySelector('.main');

window.addEventListener('mousemove',(e) =>{

  cursor.style.left = e.x + 'px'
  cursor.style.top = e.y + 'px'

})