let slider = () =>{
  let dots = '';
  let wrappTuto = document.getElementById('atm-sliderTutorial');
  let slide = wrappTuto.getElementsByClassName('atm-slideTuto');

  /**Añadiendo el ancho segun la cantidad de slider */
  let anchoTotal = parseInt(slide.length) * 70;
  let wrappSlide = wrappTuto.getElementsByClassName('atm-wrappSlider');
  wrappSlide[0].style.width = anchoTotal + 'vw';

  /*Añadiendo los doots*/
  for (let i = 0; i < slide.length; i++) {
    slide[i].setAttribute('id', 'slide'+i); /*Añadiendo id*/
    if(i == 0){
      dots = dots + '<button id="dots'+i+'" data-id="'+i+'" class="dots activeDot" onclick="slideTo(this)"></button>'; /*Añadiendo dots*/
    } else {
      dots = dots + '<button id="dots'+i+'" data-id="'+i+'" class="dots" onclick="slideTo(this)"></button>'; /*Añadiendo dots*/
    }
  }

  let wrapDots = document.createElement("div"); 
  wrapDots.innerHTML = dots;
  wrapDots.classList.add('atm-dotsSlider');

  wrappTuto.appendChild(wrapDots);


  /*Añadiendo el dinamismo del slider*/
  slideTo = (element) => {
    let id = element.getAttribute('data-id');
    // console.log(id);
    removeActive();
    document.getElementById('slide' + id).classList.add('activeSlide');
    document.getElementById('dots' + id).classList.add('activeDot');
  }

  removeActive = () =>{
    let dots = document.getElementsByClassName('dots');
    for (let i = 0; i < slide.length; i++) {
      dots[i].classList.remove('activeDot');
      slide[i].classList.remove('activeSlide');
    }
  }
}

window.onload = ()=>{
  slider();
};