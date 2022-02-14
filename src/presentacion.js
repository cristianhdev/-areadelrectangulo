class Presentacion {

    sliders = [];
    presentacion_slide = 0;
    btnSiguiente;
    btnAtras;
    paginacionActiva = false
    audio_actual = null
    audios_sond = [new Sonido('Audio1'), new Sonido('Audio1'), new Sonido('Audio1')]

    /**
     * 
     * @param {Array} slidersP  Array que contiene los id de los div 
     * @param {String} idBtnSiguiente 
     * @param {String} idBtnAtras 
     * @param {Boolean} paginacionActiva 
     */
    constructor(slidersP, idBtnSiguiente, idBtnAtras, paginacionActiva) {
        this.sliders = slidersP
        this.btnSiguiente = idBtnSiguiente
        this.btnAtras = idBtnAtras
        document.querySelectorAll(`${idBtnSiguiente}`).forEach((btn) => {
            btn.addEventListener('click', this.siguiente.bind(this), false)
        })
        document.body.addEventListener('keyup', this.presentacionteclado.bind(this), false)

    }



    presentacionteclado(e) {
        if (e.keyCode == 39) {

            this.siguiente()
        }

        if (e.keyCode == 37) {
            if (this.getCurrentSlider() == 0) {

            } else {
                this.atras()
            }

        }


        if (e.keyCode == 13 && this.presentacion_slide == this.sliders.length - 1) {
            this.comprobar()
        }


    }

    cargarAudio(loop = false) {

        if (this.audios_sond[this.presentacion_slide] != null || this.audios_sond[this.presentacion_slide] != undefined) {
            audio = new Audio(`${path_sound}${this.audios_sond[this.presentacion_slide]}.mp3`);
            audio.loop = loop
            audio.pause();

            audio.onloadeddata = () => {


            };
            audio.addEventListener('ended', () => {

            });
        }

    }

    changeSound(new_sond) {
        audio.src = `${path_sound}${new_sond}.mp3`;
        audio.pause();
        audio.load();
        audio.play();
        /* audio.addEventListener("timeupdate", function () {
            
        }, false); */
        audio.addEventListener('canplaythrough', () => {
            /* document.getElementById('contenedor-explicacion-paralelogramo') */
            //videoEscenas[getCurrentSlider() - 1].play()
        }, false);
        audio.addEventListener('ended', () => {
            cambiotexto = false
        });
    }


    presentacion() {
        if (this.paginacionActiva) {
            if (this.presentacion_slide == 0) {

                validarBoton(this.btnSiguiente) ? document.getElementById(this.btnSiguiente).style.display = "inline-block" : null
                validarBoton(this.btnAtras) ? document.getElementById(this.btnAtras).style.visibility = "hidden" : null

            } else if (this.presentacion_slide == sliders.length - 1) {
                validarBoton(this.btnSiguiente) ? document.getElementById(this.btnSiguiente).style.display = "none" : null
                validarBoton(this.btnAtras) ? document.getElementById(this.btnAtras).style.visibility = "visible" : null

            } else {
                validarBoton(this.btnSiguiente) ? document.getElementById(this.btnSiguiente).style.display = "block" : null
                validarBoton(this.btnSiguiente) ? document.getElementById(this.btnSiguiente).style.visibility = "visible" : null

                validarBoton(this.btnAtras) ? document.getElementById(this.btnAtras).style.display = "block" : null
                validarBoton(this.btnAtras) ? document.getElementById(this.btnAtras).style.visibility = "visible" : null
            }
        }
        this.detectarSlider() 
    }

    validarBoton(elementId) {
        return elementId != null ? true : false
    }

    siguiente() {
        if (this.presentacion_slide == this.sliders.length - 1) {
        } else {
            this.presentacion_slide++
            console.log(this.sliders[this.presentacion_slide])
            console.log(this.sliders[this.presentacion_slide - 1])
            document.querySelector(this.sliders[this.presentacion_slide - 1]).style.display = "none"
            document.querySelector(this.sliders[this.presentacion_slide]).style.display = "flex"
            this.playSonidoSlider()
            this.presentacion()
        }
    }

    atras() {
        this.presentacion_slide--
        document.querySelector(this.sliders[this.presentacion_slide + 1]).style.display = "none"
        document.querySelector(this.sliders[this.presentacion_slide]).style.display = "flex"
        playSonidoSlider()
        this.presentacion()
    }

    playSonidoSlider() {
        if (this.audio_actual != null) {
            this.audio_actual.pauseAudio()
        } else {
            this.audio_actual = this.audios_sond[this.presentacion_slide]
            this.audio_actual.playAudio()
        }

    }

    detectarSlider() {
        switch (this.getCurrentSlider()) {
            case 1:

                break;

            case 2:

                break;
            case 3:
                cargarActividadFinal()
                break;

            default:
                break;
        }
    }


    getCurrentSlider() {
        return this.presentacion_slide
    }

    getSliders() {
        return this.sliders
    }

}