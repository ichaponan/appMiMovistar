slider = () =>{
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
      dots = dots + '<button data-id="'+i+'" class="activeDot"></button>'; /*Añadiendo dots*/
    } else {
      dots = dots + '<button data-id="'+i+'"></button>'; /*Añadiendo dots*/
    }
  }

  let wrapDots = document.createElement("div"); 
  wrapDots.innerHTML = dots;
  wrapDots.classList.add('atm-dotsSlider');

  wrappTuto.appendChild(wrapDots);
}

window.onload = ()=>{
  slider();

};