
let insertAviso = () => {
  let structureHTML = '<div class="wrappCeluAviso"><section class="atm-section1"><div class="atm-adornos"><img src="http://servicios.movistar.com.pe/images_publica/alertaversion/images/adornos.svg" alt="adornos"></div><div class="atm-celuWrapp"><img src="http://servicios.movistar.com.pe/images_publica/alertaversion/images/celu.svg" alt="celu" class="atm-celu" /><img src="http://servicios.movistar.com.pe/images_publica/alertaversion/images/isologo.svg" alt="isologo" class="atm-isologo"></div><div class="atm-sombra"><img src="http://servicios.movistar.com.pe/images_publica/alertaversion/images/sombra.svg" alt="sombra" /></div></section><section class="atm-section2"><div class="atm-titulo">¡Tenemos una nueva actualización para ti!</div><p>No te quedes atrás</p><button class="atm-updateApp" onclick="openAppStore(this)">Actualizar la App</button></section></div>';

  let wrappApp = document.getElementById('screen-root');
  let divWrapp = document.createElement("div");
  divWrapp.innerHTML = structureHTML;
  wrappApp.appendChild(divWrapp);
}

let openAppStore = () => {
  if (navigator.platform != 'iPad' && navigator.platform != 'iPhone' && navigator.platform != 'iPod') {
    /*Android*/
    let url = "https://play.google.com/store/apps/details?id=tdp.app.col";
    "undefined" != typeof deviceapis ? deviceapis.open(url) : open(url);
  }
  else {
    /*IOS*/
    let url = "https://itunes.apple.com/pe/app/mi-movistar-lite/id1437658799?mt=8";
    "undefined" != typeof deviceapis ? deviceapis.open(url) : open(url);
  }
}

insertAviso();