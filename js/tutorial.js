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
    dots = dots + '<div data-id="atmSlideTo'+i+'"></div>';
  }

  let wrapDots = document.createElement("div"); 
  wrapDots.innerHTML = dots;
  wrapDots.classList.add('atm-dotsSlider');

  wrappTuto.appendChild(wrapDots);
}

window.onload = ()=>{
  slider();

};