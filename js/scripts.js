let gtmFunction = () => {
  /**
  Función general para eliminar un tag en la lista.
  ------------------------------------------------------
  | tagElement: elemento a eliminar
  | busqueda: 
  | ** all: Todos los elementos mencionados
  | ** 1: Un solo elemento
  | validacion: validacion de texto para eliminar el tag ejm. '=,plan datos' que el innerText del tag sea = a plan datos
  | destroy: true / false -- Destruir el tag o solo ocultarlo 
  ------------------------------------------------------
  **/

  let elmHideTag = {
    "elementos": [
      {
        'tagElement': '.navigation > .menu > li:nth-child(2)',
        'busqueda': '1',
        'validacion': '==,PLAN',
        'linea': 'PREPAID',
        'plan': 'Preplan',
        'destroy': true
      }
    ]
  }
  /**
   * Función destroy, elimina o oculta elementos 
  */
  let _destroyTag = (state, tag) =>{
    state 
    ? tag.remove()
    : tag.style.display = 'none'
  }

  /**
   * Función hideElements que recogerá y ocultará los tags que se le envíen
  */
  let _searchHideElements = (tagElement, busqueda, validacion, linea, plan, destroy) => {
    var storageLinea = localStorage.getItem("atm-lineaCel");
    var storageTipoPlan = localStorage.getItem("atm-tipoPlan");

    if(storageLinea == linea && storageTipoPlan == plan){
      if (busqueda == 'all') {
        let stopIntervalAll = 0;
        let searchTagAll = setInterval(() => {
          let tagAll = document.querySelectorAll(tagElement);
          stopIntervalAll = parseInt(stopIntervalAll) + 1;

          if (tagAll.length > 0) {
            // console.log("Tags encontrados");
            clearInterval(searchTagAll);
            for (let i = 0; i < tagAll.length; i++) {
              if (validacion != undefined) {
                let vallAll = validacion.split(',');
                let textTagAll = tagAll[i].innerText;
                textTagAll = textTagAll.replace(/(\r\n|\n|\r)/gm, "");
                textTagAll = textTagAll.replace(/\s+/g, " ");
                // alert(textTagAll);
                switch (vallAll[0]) {
                  case '==':
                    if (textTagAll == vallAll[1]) {
                      _destroyTag(destroy, tagAll[i]);
                    }
                    break;
                  case '!=':
                    if (textTagAll != vallAll[1]) {
                      _destroyTag(destroy, tagAll[i]);
                    }
                    break;
                  default:
                    _destroyTag(destroy, tagAll[i]);
                    break;
                }
              } else {
                _destroyTag(destroy, tagAll[i]);
              }
            }
          }
          if (stopIntervalAll > 40) {
            // console.log("Tag no encontrado");
            clearInterval(searchTagAll);
          }
        }, 50);
      } else {
        let stopInterval = 0;
        let searchTag = setInterval(() => {
          let tag = document.querySelector(tagElement);
          stopInterval = parseInt(stopInterval) + 1;
          if (tag != null) {
            // console.log("Tag encontrado");
            clearInterval(searchTag);
            if (validacion != undefined) {
              let val = validacion.split(',');
              let textTag = tag.innerText;
              textTag = textTag.replace(/(\r\n|\n|\r)/gm, "");
              textTag = textTag.replace(/\s+/g, " ");
              // alert(textTag);
              switch (val[0]) {
                case '==':
                  if (textTag == val[1]) {
                    _destroyTag(destroy, tag);
                    // alert('..');
                  }
                  break;
                case '!=':
                  if (textTag != val[1]) {
                    _destroyTag(destroy, tag);
                  }
                  break;
                default:
                  _destroyTag(destroy, tag);
                  break;
              }
            } else {
              _destroyTag(destroy, tag);
            }
          }
          if (stopInterval > 40) {
            // console.log("Tag no encontrado");
            clearInterval(searchTag);
          }
        }, 50);
      }
    }
  }

  /**
    Recorriendo el Objeto con un Map
  **/
  elmHideTag.elementos.map((index) => {  
    _searchHideElements(index.tagElement, index.busqueda, index.validacion, index.linea, index.plan, index.destroy);
  });
}