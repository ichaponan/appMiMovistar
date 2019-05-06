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
    {'tagElement': '.tagelemento', 'busqueda': 'all', 'validacion': '!=,222', 'destroy': true},
    {'tagElement': '#ooculta', 'busqueda': '1', 'validacion': '!=,undefined', 'destroy': false}
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
let _searchHideElements = (tagElement, busqueda, validacion, destroy) => {
  if(busqueda == 'all'){
    let stopIntervalAll = 0;                                     
    let searchTagAll = setInterval(() => {                       
      let tagAll = document.querySelectorAll(tagElement);        
      stopIntervalAll = parseInt(stopIntervalAll) + 1;

      if (tagAll.length > 0) {
        console.log("Tags encontrados");
        clearInterval(searchTagAll);                             
        for (let i = 0; i < tagAll.length; i++) {                
          if (validacion != undefined){
            let val = validacion.split(',');
            switch (val[0]) {
              case '==':
                if (tagAll[i].innerText == val[1]) {
                  _destroyTag(destroy, tagAll[i]);
                }
              break;
              case '!=':
                if (tagAll[i].innerText != val[1]) {
                  _destroyTag(destroy, tagAll[i]);
                }
              break;
              default:
                _destroyTag(destroy, tagAll[i]);
              break;
            }
          }
          else{
            tagAll[i].remove();
          }
        }
      }

      else if (stopIntervalAll >= 100) {
        console.log("Tag no encontrado");
        clearInterval(searchTagAll);                             
      }
    }, 50);
  }
  else {
    let stopInterval = 0;
    let searchTag = setInterval(() => {
      let tag = document.querySelector(tagElement);
      stopInterval = parseInt(stopInterval) + 1;
      console.log(stopInterval);
      if (tag != null){
        console.log("Tag encontrado");
        clearInterval(searchTag);
        if (validacion != undefined) {
          let val = validacion.split(',');
          switch (val[0]) {
            case '==':
              if (tag.innerText == val[1]) {
                _destroyTag(destroy, tag);
              }
              break;
            case '!=':
              if (tag.innerText != val[1]) {
                _destroyTag(destroy, tag);
              }
              break;
            default:
              _destroyTag(destroy, tag);
              break;
          }
        } else {
          tag.remove();
        }
      }
      else if (stopInterval >= 100) {
        console.log("Tag no encontrado");
        clearInterval(searchTag);
      }
    }, 50);
  }
}

/**
  Recorriendo el Objeto con un Map
**/
elmHideTag.elementos.map((index) => {
  _searchHideElements(index.tagElement, index.busqueda, index.validacion, index.destroy);
});