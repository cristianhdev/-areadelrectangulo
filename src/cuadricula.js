class cuadricula{

    tablero;
    tammanocuadricula;
    base=8
    altura=5
    alturaIncognita;
    baseEjercicio;
    idcontenedorcuadricula='.contenedor-cuadricula'

    constructor(base,altura,idcontenedor_cuadricula){
        this.base=base
        this.altura=altura
        this.idcontenedorcuadricula=idcontenedor_cuadricula
        this.CargarCuadricula()
    }

    CargarCuadricula() {
        this.tablero = new Array(this.base*this.altura);
        for (let j = 0; j < this.altura; j++) {
            this.tablero[j] = new Array(this.altura)
        }
    
        let numeros = 1
        let col = this.altura;
        let row = this.base;
        for (let j = 0; j < col; j++) {
            for (let i = 0; i < row; i++) {
                let div = document.createElement('div');
                div.id = "(" + (j) + "," + (i) + ")";
                div.classList.add("figura-cuadricula")
                this.tablero[j][i] = div;
                numeros++
            }
        }
    
        document.querySelector(this.idcontenedorcuadricula).innerHTML = ''
    
    
        for (let j = 0; j < col; j++) {
            for (let i = 0; i < row; i++) {
                document.querySelector(this.idcontenedorcuadricula).appendChild(this.tablero[j][i])
    
            }
        }
    
        document.querySelector(this.idcontenedorcuadricula).style.setProperty("--altura-cuadricula",  this.altura);
        document.querySelector(this.idcontenedorcuadricula).style.setProperty("--base-cuadricula",this.base);
    }

    
    pintarCuadricula({ base: a, altura: h }) {
        alturaIncognita = h
        baseEjercicio = a
    
        let numeros = 1
        let col = a;
        let row = h;
        this.removerCuadriculaSeleccionada()
        for (let j = 0; j < col; j++) {
            for (let i = 0; i < row; i++) {
                this.tablero[j][i].classList.add("figura-cuadricula-resaltado")
                numeros++
            }
        }
    }
    
    removerCuadriculaSeleccionada() {
        let divs = document.querySelectorAll(`${this.idcontenedorcuadricula} > div`)
        divs.forEach(element => {
            element.classList.remove("figura-cuadricula-resaltado")
        });
    }

    destroyed() {
        document.querySelector(this.idcontenedorcuadricula).innerHTML = ''
    }


}