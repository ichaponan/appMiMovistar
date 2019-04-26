let slider = () =>{
  let htmlStructure = '<div id="tutorial" class="atm-tutorialWrapp"> <div id="titulo" class="atm-tutorial"> Mejorar de Plan <button id="atm-backIcon" class="atm-backIcon"> <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="long-arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" ><path d="M152.485 396.284l19.626-19.626c4.753-4.753 4.675-12.484-.173-17.14L91.22 282H436c6.627 0 12-5.373 12-12v-28c0-6.627-5.373-12-12-12H91.22l80.717-77.518c4.849-4.656 4.927-12.387.173-17.14l-19.626-19.626c-4.686-4.686-12.284-4.686-16.971 0L3.716 247.515c-4.686 4.686-4.686 12.284 0 16.971l131.799 131.799c4.686 4.685 12.284 4.685 16.97-.001z"></path></svg> </button> </div> <div class="atm-bodyTutorial"> <h2>¿Cómo cambiar de plan?</h2> <div id="atm-sliderTutorial" class="atm-sliderTutorial"> <div class="atm-wrappSlider"> <div class="atm-slideTuto activeSlide"> <img src="http://servicios.movistar.com.pe/images_publica/atm-tutorial/1.jpg" alt="1 de 3" /> <p>1/3</p> <p>Aquí encontrarás los planes que tenemos para ti,selecciona el plan que más te guste y elige.</p> <button class="greenButton">LO QUIERO</button> </div> <div class="atm-slideTuto"> <img src="http://servicios.movistar.com.pe/images_publica/atm-tutorial/2.jpg" alt="2 de 3" /> <p>2/3</p> <p>Luego, lee tu contrato y aceptapara solicitar tu nuevo Plan.</p> </div> <div class="atm-slideTuto"> <img src="http://servicios.movistar.com.pe/images_publica/atm-tutorial/3.jpg" alt="3 de 3" /> <p>3/3</p> <p>¡Listo! Ahora solo espera a tu próxima renovación para disfrutar tu nuevo plan. (Recuerda mantener tus pagos al día paraque el cambio se haga efectivo).</p> </div> </div> </div> <button class="atm-greenButton">Ver planes</button> <button id="atm-omitirTutorial" class="atm-omitirTutorial">Omitir tutorial</button> </div> </div>';
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

let searchWrappTuto = setInterval(() => {
  let wrappTuto = document.getElementById('wrappTutorialGTM');
  if(wrappTuto != null){
    clearInterval(searchWrappTuto);
    slider();
  }
}, 500);