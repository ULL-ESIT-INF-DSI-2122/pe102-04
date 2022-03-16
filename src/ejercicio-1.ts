/**
 * Clase Pokémon contiene nombre, peso y altura, tipo y sus estadísticas
 */
export class Pokémon  {
  private nombre: string;
  private peso_altura: number[];
  private tipo: string;
  private estadisticas: number[];
  constructor(nombre: string, peso_altura: number[], tipo: string, estadisticas: number[]) {
    this.nombre = nombre;
    this.peso_altura = peso_altura;
    this.tipo = tipo;
    this.estadisticas = estadisticas;
  }
  /**
   * getNombre()
   * @returns el nombre del pokémon
   */
  getNombre() {
    return this.nombre;
  }
  /**
   * getPesoAltura()
   * @returns el array con el peso en la posición 0 y altura en la posición 1
   */
  getPesoAltura() {
    return this.peso_altura;
  }
  /**
   * getPeso()
   * @returns el peso únicamente
   */
  getPeso() {
    return this.peso_altura[0];
  }
  /**
   * getAltura()
   * @returns la altura únicamente
   */
  getAltura() {
    return this.peso_altura[1];
  }
  /**
   * getTipo()
   * @returns el string con el tipo del Pokémon
   */
  getTipo() {
    return this.tipo;
  }
  /**
   * getEstadisticas()
   * @returns el array con todas las estadísticas del Pokémon
   */
  getEstadisticas() {
    return this.estadisticas;
  }
  /**
   * getHP()
   * @returns la vida del Pokémon 
   */
  getHP() {
    return this.estadisticas[0];
  }
  /**
   * getAT()
   * @returns el poder de ataque del Pokémon
   */
  getAT() {
    return this.estadisticas[1];
  }
  /**
   * getDEF()
   * @returns el valor de la defensa del Pokémon 
   */
  getDEF() {
    return this.estadisticas[2];
  }
  /**
   * getVEL()
   * @returns la velocidad del Pokémon 
   */
  getVEL() {
    return this.estadisticas[3];
  }
  /**
   * setNombre()
   * @param nombre modifica el nombre del Pokémon
   */
  setNombre(nombre:string) {
    this.nombre = nombre;
  }
  /**
   * setPesoAltura()
   * @param peso_altura modifica el array con el peso y la altura (recibe un array)
   */
  setPesoAltura(peso_altura: number[]) {
    this.peso_altura = peso_altura;
  }
  /**
   * setPeso()
   * @param peso modifica el peso únicamente (recibe un number)
   */
  setPeso(peso: number) {
    this.peso_altura[0] = peso;
  }
  /**
   * setAltura()
   * @param altura modifica la altura únicamente (recibe un number) 
   */
  setAltura(altura: number) {
    this.peso_altura[1] = altura;
  }
  /**
   * setTipo()
   * @param tipo modifica el tipo de un Pokémon
   */
  setTipo(tipo: string) {
    this.tipo = tipo;
  }
  /**
   * setEstadísticas
   * @param estadisticas modifica el array con las estadísticas 
   */
  setEstadisticas(estadisticas: number[]) {
    this.estadisticas = estadisticas;
  }
  /**
   * setHP()
   * @param hp modifica el valor de la vida máxima unicamente 
   */
  setHP(hp: number) {
    this.estadisticas[0] = hp;
  }
  /**
   * setAT()
   * @param ataque modifica el poder de ataque únicamente
   */
  setAT(ataque: number) {
    this.estadisticas[1] = ataque;
  }
  /**
   * setDEF()
   * @param defensa modifica el valor de la defensa únicamente
   */
  setDEF(defensa: number) {
    this.estadisticas[2] = defensa;
  }
  /**
   * setVEL()
   * @param velocidad modifica la velocidad únicamente
   */
  setVEL(velocidad: number) {
    this.estadisticas[3] = velocidad;
  }
}

/**
 * Clase Pokédex recibe un array de Pokémon
 */
export class Pokédex {
  private pokemon: Pokémon[];
  constructor (pkmn: Pokémon[]){
    this.pokemon = pkmn;
  }
  /**
   * getPokemonNumeros()
   * @returns la longitud del array de Pokémons
   */
  getPokemonNumeros(){
    return this.pokemon.length;
  }
  /**
   * método printPokedex() imprime los valores de cada Pokémon
   */
  printPokedex(){
    this.pokemon.forEach(element => {
      console.log(`Nombre: ${element.getNombre()}`);
      console.log(`Peso: ${element.getPeso()}Kg Altura: ${element.getAltura()}m`);
      console.log(`Tipo: ${element.getTipo()}`);
      console.log(`Estadísticas:`);
      console.log(`HP: ${element.getHP()} AT: ${element.getAT()} DEF: ${element.getDEF()} VEL: ${element.getVEL()} \n`);
    });  
  }
}
/**
 * clase Combat
 */
export class Combat{
  private pokemon1: Pokémon;
  private pokemon2: Pokémon;
  constructor(pkmn1: Pokémon, pkmn2: Pokémon){
    this.pokemon1 = pkmn1;
    this.pokemon2 = pkmn2;
  }
  /**
   * entrenadorPokemon1()
   * @returns el daño realizado del pokemon1 al pokemon2
   */
  entrenadorPokemon1(): number {
    let efectividad: number = 0;
    if (this.pokemon1.getTipo() === 'fuego' && this.pokemon2.getTipo() === 'planta'){
      console.log('Super efectivo');
      efectividad = 2;
    } else if (this.pokemon1.getTipo() === 'fuego' && this.pokemon2.getTipo() === 'agua'){
      console.log('Poco efectivo');
      efectividad = 0.5;
    } else if (this.pokemon1.getTipo() === 'agua' && this.pokemon2.getTipo() === 'planta'){
      console.log('Poco efectivo');
      efectividad = 0.5;
    } else if (this.pokemon1.getTipo() === 'agua' && this.pokemon2.getTipo() === 'fuego'){
      console.log('Muy efectivo');
      efectividad = 2;
    } else if (this.pokemon1.getTipo() === 'planta' && this.pokemon2.getTipo() === 'agua'){
      console.log('Muy efectivo');
      efectividad = 2;
    } else if (this.pokemon1.getTipo() === 'planta' && this.pokemon2.getTipo() === 'fuego'){
      console.log('Poco efectivo');
      efectividad = 0.5;
    }
    else {
      console.log('Daño normal');
      efectividad = 1;
    }
    let dano: number = (this.pokemon1.getAT() / this.pokemon2.getDEF()) * efectividad;
    return dano;
  }
  /**
   * entrenadorPokemon2()
   * @returns el daño realizado del pokemon2 al 1
   */
  entrenadorPokemon2(): number {
    let efectividad: number = 0;
    if (this.pokemon2.getTipo() === 'fuego' && this.pokemon1.getTipo() === 'planta'){
      console.log('Super efectivo');
      efectividad = 2;
    } else if (this.pokemon2.getTipo() === 'fuego' && this.pokemon1.getTipo() === 'agua'){
      console.log('Poco efectivo');
      efectividad = 0.5;
    } else if (this.pokemon2.getTipo() === 'agua' && this.pokemon1.getTipo() === 'planta'){
      console.log('Poco efectivo');
      efectividad = 0.5;
    } else if (this.pokemon2.getTipo() === 'agua' && this.pokemon1.getTipo() === 'fuego'){
      console.log('Muy efectivo');
      efectividad = 2;
    } else if (this.pokemon2.getTipo() === 'planta' && this.pokemon1.getTipo() === 'agua'){
      console.log('Muy efectivo');
      efectividad = 2;
    } else if (this.pokemon2.getTipo() === 'planta' && this.pokemon1.getTipo() === 'fuego'){
      console.log('Poco efectivo');
      efectividad = 0.5;
    }
    else {
      console.log('Daño normal');
      efectividad = 1;
    }
    let dano: number = (this.pokemon2.getAT() / this.pokemon1.getDEF()) * efectividad;
    return dano;
  }
  /**
   * método start() que imprime el resultado, paso a paso, del combate
   */
  start(){
    let turnos: number = 1;
    while(this.pokemon1.getHP() > 0 || this.pokemon2.getHP() > 0){
      console.log(`Turno: ${turnos}`);
      console.log(`Ataque de ${this.pokemon1.getNombre()}`);
      this.pokemon2.setHP(this.pokemon2.getHP() - this.entrenadorPokemon1());

      if(this.pokemon2.getHP() <= 0){
        console.log(`${this.pokemon2.getNombre()} se ha debilitado`);
        console.log(`Ganador ${this.pokemon1.getNombre()}`);
        break;
      }
      console.log('--------------');
      console.log(`Vida de ${this.pokemon2.getNombre()}: ${this.pokemon2.getHP().toFixed(2)}`);
      console.log('--------------');

      console.log(`Ataque de ${this.pokemon2.getNombre()}`);
      this.pokemon1.setHP(this.pokemon1.getHP() - this.entrenadorPokemon2());
      
      if(this.pokemon1.getHP() <= 0){
        console.log(`${this.pokemon1.getNombre()} se ha debilitado`);
        console.log(`Ganador ${this.pokemon2.getNombre()}`);
        break;
      }
      console.log('--------------');
      console.log(`Vida de ${this.pokemon1.getNombre()}: ${this.pokemon1.getHP().toFixed(2)}`);
      console.log('--------------');
      turnos = turnos + 1;
    }
  }
}

let pkmn1 = new Pokémon('Bulbasur', [0.7, 6.9], 'planta', [45, 49, 49, 45]);
let pkmn2 = new Pokémon('Ivysaur', [1, 13], 'planta', [60, 62, 63, 60]);
let pkmn3 = new Pokémon('Venusaur', [2, 100], 'planta', [80, 100, 123, 122]);

let pkmn4 = new Pokémon('Charmander', [0.6, 8.5], 'fuego', [39, 52, 43, 65]);
let pkmn5 = new Pokémon('Charmeleon', [1.1, 19], 'fuego', [58, 64, 58, 80]);
let pkmn6 = new Pokémon('Charizard', [1.7, 90.5], 'fuego', [78, 104, 78, 100]);

let pkmn7 = new Pokémon('Squirtle', [0.5, 9], 'fuego', [44, 48, 65, 43]);
let pkmn8 = new Pokémon('Wartortle', [1, 22.5], 'fuego', [59, 63, 80, 58]);
let pkmn9 = new Pokémon('Blastoise', [1.6, 85.5], 'fuego', [79, 83, 100, 78]);

let pokedex9 = new Pokédex([pkmn1, pkmn2, pkmn3, pkmn4, pkmn5, pkmn6, pkmn7, pkmn8, pkmn9]);
let pokedex3 = new Pokédex([pkmn1, pkmn4, pkmn7]);
//pokedex3.printPokedex();

let combate = new Combat(pkmn4, pkmn1);
combate.start()
// stats [HP, AT, DEF, SPEED]
