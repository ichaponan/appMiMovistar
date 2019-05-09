alert("version app");
atmAppVersion = function () {
  if (navigator.platform != 'iPad' && navigator.platform != 'iPhone' && navigator.platform != 'iPod') {
    deleteAviso = function(){
      document.getElementById('atm-avisoVersion').remove();
      // dataLayer.push({
      //   'event': 'atm.event',
      //   'eventCategory': 'alerta version',
      //   'eventAction': 'click',
      //   'eventLabel': 'omitir',
      //   'nonInteraction': 0
      // });
    }
    updateApp = function () {
      let url;
      if (navigator.platform != 'iPad' && navigator.platform != 'iPhone' && navigator.platform != 'iPod') {
        /*Android*/
        url = "https://play.google.com/store/apps/details?id=tdp.app.col";
      } else {
        /*IOS*/
        url = "https://itunes.apple.com/pe/app/mi-movistar-lite/id1437658799?mt=8";
      }
      "undefined" != typeof deviceapis ? deviceapis.open(url) : open(url);
      // dataLayer.push({
      //   'event': 'atm.event',
      //   'eventCategory': 'alerta version',
      //   'eventAction': 'click',
      //   'eventLabel': 'actualizar',
      //   'nonInteraction': 0
      // });
    }

    let structureHTML = '<div class="wrappCeluAviso"><section class="atm-section1"><div class="atm-adornos"><img src="http://servicios.movistar.com.pe/images_publica/alertaversion/images/adornos.svg" alt="adornos"></div><div class="atm-celuWrapp"><img src="http://servicios.movistar.com.pe/images_publica/alertaversion/images/celu.svg" alt="celu" class="atm-celu" /><img src="http://servicios.movistar.com.pe/images_publica/alertaversion/images/isologo.svg" alt="isologo" class="atm-isologo"></div><div class="atm-sombra"><img src="http://servicios.movistar.com.pe/images_publica/alertaversion/images/sombra.svg" alt="sombra" /></div></section><section class="atm-section2"><div class="atm-titulo">¡Tenemos una nueva<br />actualización para ti!</div><p>No te quedes atrás</p><button id="atm-updateApp" class="atm-updateApp" onclick="updateApp(this)">Actualizar</button><button id="atm-omitir" class="atm-omitir" onclick="deleteAviso(this)">Omitir</button></section></div>';

    let wrappApp = document.getElementById('screen-root');
    let divWrapp = document.createElement("div");
    divWrapp.setAttribute('id', 'atm-avisoVersion');
    divWrapp.innerHTML = structureHTML;
    let avisoVersion = document.getElementById('atm-avisoVersion');
    if (avisoVersion == null || avisoVersion == undefined){
      wrappApp.appendChild(divWrapp);
    }
  }
}
