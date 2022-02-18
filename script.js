
let video;
let audioOvers = null;
let audioOverOut = null;
let presentacionActividad;
let actividadesCuadricuala = [
    { base: 6, altura: 3 },
    { base: 3, altura: 2 },
    { base: 4, altura: 3 },
    { base: 2, altura: 3 },
    { base: 5, altura: 3 }
    
]
let alturaIncognita;
let baseEjercicio;
let posicionInicialJuegoCuadricula = 0
let cuaricula_actividad=null

let sliders = [
    '.bienvenida',
    '#slider1',
    '#slider2',
    '#slider3'
]



function init() {
    presentacionActividad = new Presentacion(sliders, '.siguienteBtn', null, false)
    audioOvers = new Sonido('33');
    audioOverOut = new Sonido('32');
    document.querySelector('.siguienteBtn').addEventListener('mouseover', btnOverMenu, false)
    document.querySelector('.siguienteBtn').addEventListener('mouseout', btnOutMenu, false)
    cuaricula_actividad= new cuadricula(6,3,'.contenedor-cuadricula')
    randomActividad()
    cuaricula_actividad.CargarCuadricula()
    cuaricula_actividad.pintarCuadricula(actividadesCuadricuala[posicionInicialJuegoCuadricula])
    document.querySelector('#numerobaseReferencia').value=actividadesCuadricuala[posicionInicialJuegoCuadricula].altura
    document.querySelector('#numeroalturaReferencia').value=actividadesCuadricuala[posicionInicialJuegoCuadricula].base
    document.querySelector('#numeroaltura').value=actividadesCuadricuala[posicionInicialJuegoCuadricula].altura
}


function resaltarCuadros(idInputAltura,idInputBase){
    let h = document.querySelector(idInputAltura).value
    let b = document.querySelector(idInputBase).value
    if(b<=6){
        if(b=='?'){
            document.querySelector(idInputBase).style.border='1px solid red'
        }else{
            let cuadriculaDibujo = { base: b, altura: h }
            cuaricula_actividad.pintarCuadricula(cuadriculaDibujo)
            document.querySelector(idInputBase).style.border='initial'
            document.querySelector('#numerobaseReferencia').value=b
            document.querySelector('#numeroalturaReferencia').value=h
        }
    }else{
        document.querySelector(idInputBase).style.border='1px solid red'
    }
   
  
   
}

function btnOverMenu() {
    audioOvers.playAudio()
    audioOverOut.stopAudio()
}


function btnOutMenu() {
    audioOvers.stopAudio()
    audioOverOut.playAudio()
}



function continuar() {
    document.querySelector('.bienvenida').style.display = "none";
    /*  document.querySelector('#slider1').style.display = "flex";
     video = document.querySelector("#video-presentacion"); */

}

function verifyMobile() {
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return isMobile
}






function comprobarEjericioPrueba() {
    let respuesta = document.querySelector('#resultado').value;
    if (parseInt(alturaIncognita) * parseInt(baseEjercicio) == parseInt(respuesta)) {
        document.querySelector('.respuesta').classList.remove('incorrecto')
        document.querySelector('.respuesta').classList.add('correcto')
    } else {
        document.querySelector('.respuesta').classList.remove('correcto')
        document.querySelector('.respuesta').classList.add('incorrecto')
    }
}


function comprobarEjericioPruebaFinal() {
    let Input1Base = document.querySelector('#resultadoBaseAFinal').value;
    let Input2Altura = document.querySelector('#resultadoAlturaAFinal').value;
    if (parseInt(Input1Base)==actividadesCuadricuala[posicionInicialJuegoCuadricula].altura  && parseInt(Input2Altura)==actividadesCuadricuala[posicionInicialJuegoCuadricula].base) {
        document.querySelector('#respuesta-actividad-final').classList.remove('incorrecto')
        document.querySelector('#respuesta-actividad-final').classList.add('correcto')
    } else {
        document.querySelector('#respuesta-actividad-final').classList.remove('correcto')
        document.querySelector('#respuesta-actividad-final').classList.add('incorrecto')
    }
}

function nuevoEjercicio() {
    document.querySelector('#numerobase').value = '?'
    document.querySelector('#resultado').value=''
    document.querySelector('.respuesta').classList.remove('incorrecto')
    document.querySelector('.respuesta').classList.remove('correcto')
    
    
    if (posicionInicialJuegoCuadricula != actividadesCuadricuala.length - 1) {
        posicionInicialJuegoCuadricula++
        cuaricula_actividad.pintarCuadricula(actividadesCuadricuala[posicionInicialJuegoCuadricula])
        document.querySelector('#numerobaseReferencia').value=actividadesCuadricuala[posicionInicialJuegoCuadricula].altura
        document.querySelector('#numeroalturaReferencia').value=actividadesCuadricuala[posicionInicialJuegoCuadricula].base
        document.querySelector('#numeroaltura').value = actividadesCuadricuala[posicionInicialJuegoCuadricula].altura
    } else {
        posicionInicialJuegoCuadricula = 0
        cuaricula_actividad.pintarCuadricula(actividadesCuadricuala[posicionInicialJuegoCuadricula])
        document.querySelector('#numerobaseReferencia').value=actividadesCuadricuala[posicionInicialJuegoCuadricula].altura
        document.querySelector('#numeroalturaReferencia').value=actividadesCuadricuala[posicionInicialJuegoCuadricula].base
        document.querySelector('#numeroaltura').value = actividadesCuadricuala[posicionInicialJuegoCuadricula].altura
    }
}

function randomActividad() {

    //Clonamos los valores
    temporal = [...actividadesCuadricuala]
    //Organizamos de forma aleatoria un array.
    temporal.sort(() => Math.random() - 0.5)
    actividadesCuadricuala = [...temporal]
}

function cargarActividadFinal(){
    actividadesCuadricuala = [
        { base: 5, altura: 2 },
        { base: 3, altura: 2 },
        { base: 2, altura: 3 },
        { base: 3, altura: 3 },
        { base: 5, altura: 5 },
        { base: 2, altura: 4 },
        { base: 4, altura: 4 },
        { base: 4, altura: 3 },
        { base: 5, altura: 5 },
        { base: 5, altura: 3 },
        { base: 5, altura: 8 },
    ]
    posicionInicialJuegoCuadricula=0
    cuaricula_actividad= new cuadricula(5,8,'.contenedor-cuadricula-final')
    randomActividad()
    cuaricula_actividad.CargarCuadricula()
    cuaricula_actividad.pintarCuadricula(actividadesCuadricuala[posicionInicialJuegoCuadricula])
    document.querySelector('#resultado-marcador').innerHTML = actividadesCuadricuala[posicionInicialJuegoCuadricula].base *actividadesCuadricuala[posicionInicialJuegoCuadricula].altura
}


function nuevoEjercicioFinal() {

    document.querySelector('#respuesta-actividad-final').classList.remove('incorrecto')
    document.querySelector('#respuesta-actividad-final').classList.remove('correcto')
    document.querySelector('#resultadoBaseAFinal').value='?'
    document.querySelector('#resultadoAlturaAFinal').value='?'
    document.querySelector('#resultado-marcador').innerHTML =''

    if (posicionInicialJuegoCuadricula != actividadesCuadricuala.length - 1) {
        posicionInicialJuegoCuadricula++
        cuaricula_actividad.pintarCuadricula(actividadesCuadricuala[posicionInicialJuegoCuadricula])
        
    } else {
        posicionInicialJuegoCuadricula = 0
        cuaricula_actividad.pintarCuadricula(actividadesCuadricuala[posicionInicialJuegoCuadricula])
        
    }

    document.querySelector('#resultado-marcador').innerHTML = actividadesCuadricuala[posicionInicialJuegoCuadricula].base *actividadesCuadricuala[posicionInicialJuegoCuadricula].altura
}
