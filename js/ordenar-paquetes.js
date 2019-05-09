let ordenarPromo = function () {
  let contador = 0;
  let searchlistItem = setInterval(() => {
    let listItem = document.getElementsByClassName('list-item');
    contador = parseInt(contador) + 1;
    if (listItem[0] != null || listItem[0] != undefined){
      clearInterval(searchlistItem);
      let listasItem = listItem[0].querySelectorAll('.category-item');
      let arrayData = new Array();
    
      for (let i = 0; i < listasItem.length; i++) {
        let texto = listasItem[i].querySelector('.infos > .font-small').innerHTML;
        texto = texto.split('Expira en');
        if (texto[1] != undefined){
          listasItem[i].querySelector('.infos > .font-small').innerHTML = 'por' + texto[1];
        }
    
        let numero = listasItem[i].querySelector('.infos > .price').innerText;
        numero = numero.split(' ');
        listasItem[i].setAttribute('id', 'atm-posicion' + i);
        let coordenada = new Array();
        coordenada[0] = parseFloat(numero[1]);
        coordenada[1] = 'atm-posicion' + i;
        arrayData.push(coordenada);
      }
    
      const selectionSort = arr => {
        for (let j = 0; j < arr.length; ++j) {
          let i = iMin = j;
          for (++i; i < arr.length; ++i) {
            (arr[i][0] < arr[iMin][0]) && (iMin = i);
          }
          [arr[j], arr[iMin]] = [arr[iMin], arr[j]];
        }

        return arr;
      }
    
      let arrayOrdenado = selectionSort(arrayData);
      var wrappOrdenado = document.createElement('div');
    
      for (let g = 0; g < arrayOrdenado.length; g++) {
        let idItem = document.getElementById(arrayOrdenado[g][1]);
        wrappOrdenado.append(idItem);
      }
      document.getElementsByClassName('list-item')[0].appendChild(wrappOrdenado);
    }

    if (contador == 40){
      clearInterval(searchlistItem);
    }

  }, 40);
}

// var lineaCel = localStorage.getItem("atm-lineaCel");
// var tipoPlan = localStorage.getItem("atm-tipoPlan");

// alert(tipoPlan +" - "+ lineaCel);