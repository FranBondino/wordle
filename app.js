var colores = [
    [0, 1, 2, 3, 2],
    [1, 2, 3, 0, 2],
    [0, 3, 2, 1, 2],
    [0, 2, 3, 1, 2],
    [0, 2, 1, 3, 1],
    [1, 2, 3, 1, 2]
]

var letras = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
]

function pintarTablero () {
    for (let iFila = 0; iFila < 6; iFila++) {
        for (let iCelda= 0; iCelda < 5; iCelda++) {
           var input= document.getElementById(iFila + ',' + iCelda)
           switch (colores[iFila][iCelda]) {
                case 0:
                   input.className = "color-blanco";
                   break;
                case 1:
                    input.className = "color-verde";
                    break;
                case 2:
                    input.className = "color-amarillo";
                    break;
                case 3:
                    input.className = "color-gris";
                    break;
               default:
                   break;
           }
        }
    }
}

function inicio () {
    for (let iFila = 0; iFila < 6; iFila++) {
        for (let iCelda= 0; iCelda < 5; iCelda++) {
            var input = document.getElementById(iFila + ',' + iCelda)
            input.oninput = function(e) {
                letras[iFila][iCelda] = e.target.value;
            }
            var fieldset = document. 
        }        
    }
}


 window.onload = function () {
     pintarTablero();
     inicio();
 }