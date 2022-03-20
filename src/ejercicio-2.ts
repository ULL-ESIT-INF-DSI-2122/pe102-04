/**
 * Clase Rejilla
 * Contiene una tupla de string
 */
export class Rejilla  {
  private rejilla: string[][];
  constructor() {
    let aux: string[][] = [];
    for (let j: number = 0; j < 6; j++) {
      aux.push(['0', '0', '0', '0', '0', '0', '0']); 
    }
    this.rejilla = aux;
  }
  /**
   * getTamano
   * @returns el tamaño de la rejilla (42)
   */
  getTamano(){
    return this.rejilla.length;
  }
  /**
   * getValor()
   * @param i posición en la fila
   * @param j posición columna
   * @returns el valor de la casilla
   */
  getValor(i: number, j: number){
    return this.rejilla[i][j];
  }
  /**
   * setValor()
   * @param valor valor a modificar 
   * @param fila fila donde se modifica
   * @param columna columna donde se modifica
   */
  setValor(valor: string, fila: number, columna: number){
    this.rejilla[fila][columna] = valor;
  }
  /**
   * printRejilla imprime la rejilla actual
   */
  printRejilla(){
    for (let i = 0; i < 6; i++) { 
      console.log(this.rejilla[i] + " ");
   }
  }
}
/**
 * Clase Jugador1
 * Contiene el número de fichas de cada jugador y el color 'R' Rojo del jugador 1
 */
export class Jugador1 {
  private fichas: number;
  private fichatipo: string;
  constructor(){
    this.fichas = 21;
    this.fichatipo = 'R';
  }
  /**
   * getFichasN()
   * @returns el valor de las fichas que tiene
   */
  getFichasN(){
    return this.fichas;
  }
  /**
   * getFichasTipo()
   * @returns el color de la ficha
   */
  getFichasTipo(){
    return this.fichatipo;
  }
  /**
   * setFichasN()
   * @param fichasn numero de fichas que modificar 
   */
  setFichasN(fichasn: number){
    this.fichas = fichasn;
  }
  /**
   * setFichasT()
   * @param fichast cambia el color/valor del tipo de ficha 
   */
  setFichasT(fichast: string){
    this.fichatipo = fichast;
  }
}
/**
 * clase Jugador2 heredada de Jugador 1 que modifica su parámetro de color de ficha
 */
export class Jugador2 extends Jugador1{
  constructor(){
    super();
    this.setFichasT('A');
  }
}
/**
 * Readline necesario para que el usuario introduzca valores por consola
 */
import * as readline from 'readline';
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
/**
 * clase Conecta4 que contiene el código para realizar el juego
 */
export class Conecta4{
  constructor(private jugador1: Jugador1, private jugador2: Jugador2, private rejilla: Rejilla){}
 /**
  * Método comprobar
  * @param rejilla rejilla a analizar cada valor y sus consiguientes
  */
  comprobar(rejilla: Rejilla){
    for (let i: number = 0; i < rejilla.getTamano(); i++){   
      for(let j: number = 0; j < 7; j++){     
        if(rejilla.getValor(i,j) === 'R' && rejilla.getValor(i,j+1) === 'R' && rejilla.getValor(i, j+2) === 'R' && rejilla.getValor(i,j+3) === 'R' ){
          console.log('Ganador Jugador 1'); 
          console.log();
          rl.close();
        }
        if(rejilla.getValor(i,j) === 'A' && rejilla.getValor(i,j+1) === 'A' && rejilla.getValor(i, j+2) === 'A' && rejilla.getValor(i,j+3) === 'A' ){
          console.log('Ganador Jugador 2'); 
          console.log();
          rl.close();
        }
        if(rejilla.getValor(i,j) === 'R' && rejilla.getValor(i-1,j) === 'R' && rejilla.getValor(i-2, j) === 'R' && rejilla.getValor(i-3,j) === 'R'){
          console.log('Ganador Jugador 1'); 
          console.log();
          rl.close();
        }
        if(rejilla.getValor(i,j) === 'A' && rejilla.getValor(i-1,j) === 'A' && rejilla.getValor(i-2, j) === 'A' && rejilla.getValor(i-3,j) === 'A'){
          console.log('Ganador Jugador 2'); 
          console.log();
          rl.close();
        }
        if(rejilla.getValor(i,j) === 'R' && rejilla.getValor(i-1,j+1) === 'R' && rejilla.getValor(i-2, j+2) === 'R' && rejilla.getValor(i-3,j+3) === 'R'){
          console.log('Ganador Jugador 1'); 
          console.log();
          rl.close();
        }
        if(rejilla.getValor(i,j) === 'A' && rejilla.getValor(i-1,j+1) === 'A' && rejilla.getValor(i-2, j+2) === 'A' && rejilla.getValor(i-3,j+3) === 'A'){
          console.log('Ganador Jugador 2'); 
          console.log();
          rl.close();
        }
        if(rejilla.getValor(i,j) === 'R' && rejilla.getValor(i-1,j-1) === 'R' && rejilla.getValor(i-2, j-2) === 'R' && rejilla.getValor(i-3,j-3) === 'R' ){
          console.log('Ganador Jugador 1'); 
          console.log();
          rl.close();
        }
        if(rejilla.getValor(i,j) === 'A' && rejilla.getValor(i-1,j-1) === 'A' && rejilla.getValor(i-2, j-2) === 'A' && rejilla.getValor(i-3,j-3) === 'A' ){
          console.log('Ganador Jugador 2'); 
          console.log();
          rl.close();
        }
      }
    }
  }

  /**
   * Método start() comienza con el juego paso a paso
   */
    start(){
    let turno: number = 1;
    let fil1: number = 5;
    let fil2: number = 5;
    let fil3: number = 5;
    let fil4: number = 5;
    let fil5: number = 5;
    let fil6: number = 5;
    let fil7: number = 5;
    
    console.log(`Turno: ${turno}`);
    console.log('Jugador 1 Introduce el valor de una columna: ');
    rl.on('line', (answer) => {
      switch(answer) {
        case '1':
          if(turno % 2 === 1){
          this.rejilla.setValor(this.jugador1.getFichasTipo(), fil1, 0);
          }
          else {
          this.rejilla.setValor(this.jugador2.getFichasTipo(), fil1, 0);
          }
          if (fil1 === 0){
            this.rejilla.printRejilla();
            break;
          }
          else{
            fil1 --;
          }
          console.log(); 
          this.rejilla.printRejilla();
          break;
        case '2':
          if(turno % 2 === 1){
            this.rejilla.setValor(this.jugador1.getFichasTipo(), fil2, 1);
            }
            else {
            this.rejilla.setValor(this.jugador2.getFichasTipo(), fil2, 1);
            }
            if (fil2 === 0){
              this.rejilla.printRejilla();
              break;
            }
            else{
              fil2 --;
            }
            console.log();
            this.rejilla.printRejilla();
          break;
        case '3':
          if(turno % 2 === 1){
            this.rejilla.setValor(this.jugador1.getFichasTipo(), fil3, 2);
            }
            else {
            this.rejilla.setValor(this.jugador2.getFichasTipo(), fil3, 2);
            }
            if (fil3 === 0){
              this.rejilla.printRejilla();
              break;
            }
            else{
              fil3 --;
            }
            console.log();
            this.rejilla.printRejilla(); 
          break;
        case '4':
          if(turno % 2 === 1){
            this.rejilla.setValor(this.jugador1.getFichasTipo(), fil4, 3);
            }
            else {
            this.rejilla.setValor(this.jugador2.getFichasTipo(), fil4, 3);
            }
            if (fil4 === 0){
              this.rejilla.printRejilla();
              break;
            }
            else{
              fil4 --;
            }
            console.log();
            this.rejilla.printRejilla();
          break;
        case '5':
          if(turno % 2 === 1){
            this.rejilla.setValor(this.jugador1.getFichasTipo(), fil5, 4);
            }
            else {
            this.rejilla.setValor(this.jugador2.getFichasTipo(), fil5, 4);
            }
            if (fil5 === 0){
              this.rejilla.printRejilla();
              break;
            }
            else{
              fil5 --;
            }
            console.log();
            this.rejilla.printRejilla();
          break;
        case '6':
          if(turno % 2 === 1){
            this.rejilla.setValor(this.jugador1.getFichasTipo(), fil6, 5);
            }
            else {
            this.rejilla.setValor(this.jugador2.getFichasTipo(), fil6, 5);
            }
            if (fil6 === 0){
              this.rejilla.printRejilla();
              break;
            }
            else{
              fil6 --;
            }
            console.log();
            this.rejilla.printRejilla();
          break;
        case '7':
          if(turno % 2 === 1){
            this.rejilla.setValor(this.jugador1.getFichasTipo(), fil7, 6);
            }
            else {
            this.rejilla.setValor(this.jugador2.getFichasTipo(), fil7, 6);
            }
            if (fil7 === 0){
              this.rejilla.printRejilla();
              break;
            }
            else{
              fil7 --;
            }
            console.log();
            this.rejilla.printRejilla();
          break;
        default:
          console.error(`El valor introducido es inválido`);
          break;
      }
      turno++;
      console.log();
      
      this.comprobar(this.rejilla);

      console.log(`Turno: ${turno}`);
      if (turno % 2=== 0){
        console.log('Jugador 2 introduce valor de una columna:');
      }
      else{
        console.log('Jugador 1 introduce valor de una columna:');
      }

      if(turno === 42){
        this.rejilla = new Rejilla;
        fil1 = 5, fil2 = 5, fil3 = 5, fil4 = 5, fil5 = 5, fil6 = 5, fil7 = 5;
        for(let i:number = 0; i < 6; i++){
          this.rejilla.setValor('0', i, i);
        }
        turno = 0;
      }
      rl.prompt();
      });
    }
}

let player1 = new Jugador1();
let player2 = new Jugador2();
let tablero = new Rejilla();

let juego = new Conecta4(player1, player2, tablero);
juego.start();
