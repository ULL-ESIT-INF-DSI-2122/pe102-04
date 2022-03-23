/**
 * Clase Alfabeto
 */
export class Alfabeto {
  constructor(private alfabeto: string = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'){}
  /**
   * getAlfabeto()
   * @returns la cadena con el contenido del alfabeto
   */
  getAlfabeto(){
    return this.alfabeto;
  }
  /**
   * getTam()
   * @returns el tamaño del alfabeto
   */
  getTam(){
    return this.alfabeto.length;
  }
  /**
   * getElemento(i)
   * @param i posicion de la letra del alfabeto
   * @returns la letra del alfabeto
   */
  getElemento(i: number){
    return this.alfabeto[i];
  }
  /**
   * getPosicion(s)
   * @param s caracter a buscar
   * @returns posicion del caracter en el alfabeto
   */
  getPosicion(s: string){
    return this.alfabeto.search(s);
  }
  /**
   * setAlfabeto()
   * @param a alfabeto que reemplaza el por defecto
   */
  setAlfabeto(a: string){
    this.alfabeto = a;
  }
}
/**
 * Clase Cifrado
 */
export class Cifrado {
  constructor(private alfabeto: Alfabeto, private mensaje: string, private clave: string){}
  /**
   * Método codificacion()
   */
  codificacion(){
    let cifrado: string = '';
    let d: number = 0;
    for (let i: number = 0; i < this.mensaje.length; i++){
      if(this.clave.length != this.mensaje.length){
        this.clave = this.clave + this.clave[i];
      }
    }   
    for (let j: number = 0; j < this.clave.length; j++){
      d = (this.alfabeto.getPosicion(this.clave[j]) + 1) + (this.alfabeto.getPosicion(this.mensaje[j]) + 1) ;
      if (d > this.alfabeto.getTam()){
        d = d%this.alfabeto.getTam();
      }
      cifrado = cifrado + this.alfabeto.getElemento(d - 1);
    }
    console.log(`El mensaje cifrado es: ${cifrado} \n`);
  }
  /**
   * Método decodificacion()
   */
  decodificacion(){
    let descifrado: string = '';
    let d: number = 0;
    for (let i: number = 0; i < this.mensaje.length; i++){
      if(this.clave.length != this.mensaje.length){
        this.clave = this.clave + this.clave[i];
      }
    }   
    for (let j: number = 0; j < this.clave.length; j++){
      d = (this.alfabeto.getPosicion(this.mensaje[j]) + 1) - (this.alfabeto.getPosicion(this.clave[j]) + 1);
      if (d < 0){
        d = d + this.alfabeto.getTam();
      }
      descifrado = descifrado + this.alfabeto.getElemento(d - 1);
    }
    console.log(`El mensaje descifrado es: ${descifrado} \n`);
  }
}

export let alfabetoE: Alfabeto = new Alfabeto('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ')
let scanf = require('scanf');

console.log('Introduce un mensaje:');
let mensaje: string = scanf('%s');
mensaje = mensaje.toUpperCase();

console.log('Introduce una clave:');
let clave: string = scanf('%s');
clave = clave.toUpperCase();

let cifrar: Cifrado = new Cifrado(alfabetoE, mensaje, clave);
cifrar.codificacion();
cifrar.decodificacion();
