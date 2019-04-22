let slider = () =>{
  let dots = '';
  let wrappTuto = document.getElementById('atm-sliderTutorial');
  let slide = wrappTuto.getElementsByClassName('atm-slideTuto');

  /**Añadiendo el ancho segun la cantidad de slider */
  let anchoTotal = parseInt(slide.length) * 75;
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
    removeActive();
    document.getElementById('slide' + id).classList.add('activeSlide');
    document.getElementById('dots' + id).classList.add('activeDot');

    /*Cambiando el slider*/
    let wrappSlider = document.getElementsByClassName('atm-wrappSlider');
    let moveTo = parseInt(id) * 75;
    wrappSlider[0].style.transform = 'translateX(-'+moveTo+'vw)';
    
    if (id == 2) {
      document.getElementById('atm-omitirTutorial').style.zIndex = '-1';
      document.getElementsByClassName('atm-greenButton')[0].style.zIndex = '99';
    } else {
      document.getElementById('atm-omitirTutorial').style.zIndex = '99';
      document.getElementsByClassName('atm-greenButton')[0].style.zIndex = '-1';
    }
  }

  removeActive = () => {
    let dots = document.getElementsByClassName('dots');
    for (let i = 0; i < slide.length; i++) {
      dots[i].classList.remove('activeDot');
      slide[i].classList.remove('activeSlide');
    }
  }
}

window.onload = () => {
  slider();
};