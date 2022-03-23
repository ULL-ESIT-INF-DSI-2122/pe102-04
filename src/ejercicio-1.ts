/**
 * Clase abstracta Fighter
 */
export abstract class Fighter{
  constructor(private nombre: string, private peso_altura: number[], private tipo: string, private estadisticas: number[], private catchingPhrase: string){
  }
  /**
   * getNombre()
   * @returns el nombre del fighter
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
   * @returns el string con el tipo del luchador
   */
  getTipo() {
    return this.tipo;
  }
  /**
   * getEstadisticas()
   * @returns el array con todas las estadísticas del luchador
   */
  getEstadisticas() {
    return this.estadisticas;
  }
  /**
   * getHP()
   * @returns la vida del luchador 
   */
  getHP() {
    return this.estadisticas[0];
  }
  /**
   * getAT()
   * @returns el poder de ataque del luchador
   */
  getAT() {
    return this.estadisticas[1];
  }
  /**
   * getDEF()
   * @returns el valor de la defensa del luchador 
   */
  getDEF() {
    return this.estadisticas[2];
  }
  /**
   * getVEL()
   * @returns la velocidad del luchador 
   */
  getVEL() {
    return this.estadisticas[3];
  }
  /**
   * getCatchingPhrase
   * @returns frase representativa del personaje
   */
  getCatchingPhrase(){
    return this.catchingPhrase;
  }
  /**
   * setNombre()
   * @param nombre modifica el nombre del luchador
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
   * @param tipo modifica el tipo de un luchador
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
 /**
  * setCatchingPhrase
  * @param frase modifica la frase representativa
  */
  setCatchingPhrase(frase: string){
    this.catchingPhrase = frase;
  }
  /**
   * getter() que nombra el universo
   */
  abstract getter(): string;
}
/**
 * Clase Pokemon heredada de Fighter
 */
export class Pokemon extends Fighter{
  constructor(nombre: string, peso_altura: number[], tipo: string, estadisticas: number[], catchingPhrase: string){
  super(nombre, peso_altura, tipo, estadisticas, catchingPhrase);
  }
  /**
   * getter
   * @returns universo pokemon
   */
 getter(): string {
   return 'Soy un Pokémon';
 }
}
/**
 * Clase DragonBall heredada de Fighter
 */
export class DragonBall extends Fighter{
  constructor(nombre: string, peso_altura: number[], tipo: string, estadisticas: number[], catchingPhrase: string){
  super(nombre, peso_altura, tipo, estadisticas, catchingPhrase);
  }
  /**
   * getter()
   * @returns universo de dragon ball
   */
 getter(): string {
   return 'Soy un Saiyan';
 }
}
/**
 * Clase Marvel heredada de Fighter
 */
export class Marvel extends Fighter{
  constructor(nombre: string, peso_altura: number[], tipo: string, estadisticas: number[], catchingPhrase: string){
  super(nombre, peso_altura, tipo, estadisticas, catchingPhrase);
  }
  /**
   * getter()
   * @returns universo de Marvel
   */
 getter(): string {
   return 'Soy un personaje de Marvel';
 }
}
/**
 * Clase DC heredada de Fighter
 */
export class DC extends Fighter{
  constructor(nombre: string, peso_altura: number[], tipo: string, estadisticas: number[], catchingPhrase: string){
  super(nombre, peso_altura, tipo, estadisticas, catchingPhrase);
  }
  /**
   * getter()
   * @returns personaje del mundo de DC
   */
 getter(): string {
   return 'Soy un personaje de DC';
 }
}
/**
 * Clase StarWars
 */
export class StarWars extends Fighter{
  constructor(nombre: string, peso_altura: number[], tipo: string, estadisticas: number[], catchingPhrase: string){
  super(nombre, peso_altura, tipo, estadisticas, catchingPhrase);
  }
  /**
   * getter()
   * @returns universo de Star Wars
   */
 getter(): string {
   return 'Soy un personaje de Star Wars';
 }
}
/**
 * Clase combate
 */
export class Combat {
  constructor(private fighter1: Fighter, private fighter2: Fighter){}
  /**
   * calculoDeDano1()
   * @returns daño realizado del luchador 1 al 2
   */
  calculoDeDano1(): number {
    let efectividad: number = 1;
    if (this.fighter1.getNombre() === 'Clark Kent'){
      efectividad = 1000;
    }
    if (this.fighter1 instanceof Pokemon && this.fighter2 instanceof Pokemon){    
      if (this.fighter1.getTipo() === 'fuego' && this.fighter2.getTipo() === 'planta'){
        console.log('Super efectivo');
        efectividad = 2;
      } else if (this.fighter1.getTipo() === 'fuego' && this.fighter2.getTipo() === 'agua'){
        console.log('Poco efectivo');
        efectividad = 0.5;
      } else if (this.fighter1.getTipo() === 'agua' && this.fighter2.getTipo() === 'planta'){
        console.log('Poco efectivo');
        efectividad = 0.5;
      } else if (this.fighter1.getTipo() === 'agua' && this.fighter2.getTipo() === 'fuego'){
        console.log('Muy efectivo');
        efectividad = 2;
      } else if (this.fighter1.getTipo() === 'planta' && this.fighter2.getTipo() === 'agua'){
        console.log('Muy efectivo');
        efectividad = 2;
      } else if (this.fighter1.getTipo() === 'planta' && this.fighter2.getTipo() === 'fuego'){
        console.log('Poco efectivo');
        efectividad = 0.5;
      }
      else {
        console.log('Daño normal');
        efectividad = 1;
      }
    }
    if(this.fighter1 instanceof DragonBall && this.fighter2 instanceof DragonBall){
      if(this.fighter1.getTipo() === 'saiyan' && this.fighter2.getTipo() === 'villano'){
        efectividad = 20;
      }
      if(this.fighter1.getTipo() === 'villano' && this.fighter2.getTipo() === 'saiyan'){
        efectividad = 5;
      }
    } 

    if(this.fighter1 instanceof Marvel && this.fighter2 instanceof Marvel){
      if(this.fighter1.getTipo() === 'heroe' && this.fighter2.getTipo() === 'villano'){
        efectividad = 5;
      }
      if(this.fighter1.getTipo() === 'villano' && this.fighter2.getTipo() === 'heroe'){
        efectividad = 1;
      }
    } 

    if(this.fighter1 instanceof DC && this.fighter2 instanceof DC){
      if(this.fighter1.getTipo() === 'heroe' && this.fighter2.getTipo() === 'villano'){
        efectividad = 5;
      }
      if(this.fighter1.getTipo() === 'villano' && this.fighter2.getTipo() === 'heroe'){
        efectividad = 1;
      }
    } 

    if(this.fighter1 instanceof StarWars && this.fighter2 instanceof StarWars){
      if(this.fighter1.getTipo() === 'yedi' && this.fighter2.getTipo() === 'sith'){
        efectividad = 3;
      }
      if(this.fighter1.getTipo() === 'sith' && this.fighter2.getTipo() === 'yedi'){
        efectividad = 2;
      }
    } 

    if(this.fighter1 instanceof DragonBall && this.fighter2 instanceof Pokemon){
      efectividad = 100;
    } 
    if(this.fighter1 instanceof Pokemon && this.fighter2 instanceof DragonBall){
      efectividad = 0.1;
    } 

    let dano: number = (this.fighter1.getAT() / this.fighter2.getDEF()) * efectividad;
    return dano;
  }
  /**
   * calculoDeDano2
   * @returns daño realizado del luchador 2 al 1
   */
  calculoDeDano2(): number {
    let efectividad: number = 1;
    if (this.fighter2.getNombre() === 'Clark Kent'){
      efectividad = 1000;
    }
    if (this.fighter1 instanceof Pokemon && this.fighter2 instanceof Pokemon){    
      if (this.fighter2.getTipo() === 'fuego' && this.fighter1.getTipo() === 'planta'){
        console.log('Super efectivo');
        efectividad = 2;
      } else if (this.fighter2.getTipo() === 'fuego' && this.fighter1.getTipo() === 'agua'){
        console.log('Poco efectivo');
        efectividad = 0.5;
      } else if (this.fighter2.getTipo() === 'agua' && this.fighter1.getTipo() === 'planta'){
        console.log('Poco efectivo');
        efectividad = 0.5;
      } else if (this.fighter2.getTipo() === 'agua' && this.fighter1.getTipo() === 'fuego'){
        console.log('Muy efectivo');
        efectividad = 2;
      } else if (this.fighter2.getTipo() === 'planta' && this.fighter1.getTipo() === 'agua'){
        console.log('Muy efectivo');
        efectividad = 2;
      } else if (this.fighter2.getTipo() === 'planta' && this.fighter1.getTipo() === 'fuego'){
        console.log('Poco efectivo');
        efectividad = 0.5;
      }
      else {
        console.log('Daño normal');
        efectividad = 1;
      }
    }
    if(this.fighter1 instanceof DragonBall && this.fighter2 instanceof DragonBall){
      if(this.fighter2.getTipo() === 'saiyan' && this.fighter1.getTipo() === 'villano'){
        efectividad = 20;
      }
      if(this.fighter2.getTipo() === 'villano' && this.fighter1.getTipo() === 'saiyan'){
        efectividad = 5;
      }
    } 
    if(this.fighter1 instanceof Marvel && this.fighter2 instanceof Marvel){
      if(this.fighter2.getTipo() === 'heroe' && this.fighter1.getTipo() === 'villano'){
        efectividad = 20;
      }
      if(this.fighter2.getTipo() === 'villano' && this.fighter1.getTipo() === 'heroe'){
        efectividad = 5;
      }
    } 
    if(this.fighter1 instanceof DC && this.fighter2 instanceof DC){
      if(this.fighter2.getTipo() === 'heroe' && this.fighter1.getTipo() === 'villano'){
        efectividad = 20;
      }
      if(this.fighter2.getTipo() === 'villano' && this.fighter1.getTipo() === 'heroe'){
        efectividad = 5;
      }
    } 
    if(this.fighter1 instanceof StarWars && this.fighter2 instanceof StarWars){
      if(this.fighter2.getTipo() === 'yedi' && this.fighter1.getTipo() === 'sith'){
        efectividad = 20;
      }
      if(this.fighter2.getTipo() === 'sith' && this.fighter1.getTipo() === 'yedi'){
        efectividad = 5;
      }
    } 

    if(this.fighter1 instanceof Pokemon && this.fighter2 instanceof DragonBall){
      efectividad = 0.1;
    } 
    if(this.fighter2 instanceof DragonBall && this.fighter1 instanceof Pokemon){
      efectividad = 100;
    } 

    let dano: number = (this.fighter2.getAT() / this.fighter1.getDEF()) * efectividad;
    return dano;
  }
  /**
   * Método start() que simula el combate por turnos
   */
  start(){
    let turnos: number = 1;
    while(this.fighter1.getHP() > 0 || this.fighter2.getHP() > 0){
      console.log(`Turno: ${turnos}`);
      console.log(`Ataque de ${this.fighter1.getNombre()}: ${this.fighter1.getCatchingPhrase()}`);
      this.fighter2.setHP(this.fighter2.getHP() - this.calculoDeDano1());

      if(this.fighter2.getHP() <= 0){
        console.log(`${this.fighter2.getNombre()} se ha debilitado`);
        console.log(`Ganador ${this.fighter1.getNombre()}`);
        break;
      }
      console.log('--------------');
      console.log(`Vida de ${this.fighter2.getNombre()}: ${this.fighter2.getHP().toFixed(2)}`);
      console.log('--------------');

      console.log(`Ataque de ${this.fighter2.getNombre()}: ${this.fighter2.getCatchingPhrase()}`);
      this.fighter1.setHP(this.fighter1.getHP() - this.calculoDeDano2());
      
      if(this.fighter1.getHP() <= 0){
        console.log(`${this.fighter1.getNombre()} se ha debilitado`);
        console.log(`Ganador ${this.fighter2.getNombre()}`);
        break;
      }
      console.log('--------------');
      console.log(`Vida de ${this.fighter1.getNombre()}: ${this.fighter1.getHP().toFixed(2)}`);
      console.log('--------------');
      turnos = turnos + 1;
    }
  }
}
/**
 * Clase Pokedex
 */
export class Pokedex {
  constructor(private fighters: Fighter[]){
  }
  /**
   * getTotalFighters()
   * @returns numero total de los luchadores de la Pokedex
   */
  getTotalFighters(){
    return this.fighters.length;
  }
  /**
   * getFighter(i)
   * @param i posicion
   * @returns luchador en la posicion i
   */
  getFighter(i: number){
    return this.fighters[i];
  }
}
/**
 * Clase PrintPokedex
 */
export class PrintPokedex {
  constructor(private pokedex: Pokedex){
  }
  /**
   * print() imprime los valores de todos los luchadores
   */
  print(){
    for (let i: number = 0; i < this.pokedex.getTotalFighters(); i++){
      console.log(`Nombre: ${this.pokedex.getFighter(i).getNombre()}`);
      console.log(`Peso: ${this.pokedex.getFighter(i).getPeso()}Kg Altura: ${this.pokedex.getFighter(i).getAltura()}m`);
      console.log(`Tipo: ${this.pokedex.getFighter(i).getTipo()}`);
      console.log(`Estadísticas:`);
      console.log(`HP: ${this.pokedex.getFighter(i).getHP()} AT: ${this.pokedex.getFighter(i).getAT()} DEF: ${this.pokedex.getFighter(i).getDEF()} VEL: ${this.pokedex.getFighter(i).getVEL()} \n`)
    }
  }
}

export let pkmn1 = new Pokemon('Bulbasur', [6.9, 0.7], 'planta', [45, 49, 49, 45], 'Bulbaaaa');
let pkmn4 = new Pokemon('Charmander', [8.5, 0.6], 'fuego', [39, 52, 43, 65], 'Chaaaar');
let pkmn7 = new Pokemon('Squirtle', [9, 1], 'fuego', [44, 48, 65, 43], 'Escueroo');

export let goku = new DragonBall('Kakarot', [80, 1.9], 'saiyan', [1000, 500, 600, 500], '¡Kamehamehaaa!');
let freezer = new DragonBall('Freezer', [100, 2], 'villano', [1500, 350, 450, 400], '¡Bola Mortaaaal!');

export let spiderman = new Marvel('Peter Parker', [60, 1.7], 'heroe', [500, 200, 200, 300], 'Tu amigo y vecino spidey');
let drOctopus = new Marvel('Octavius Octopus', [120, 2], 'villano', [650, 150, 250, 100], 'Hola Peter');

export let yoda = new StarWars('Yoda', [40, 1], 'yedi', [750, 300, 300, 600], 'Conmigo pelear tú no querer');
let darthVader = new StarWars('Anakin Skywalker', [80, 1.8], 'sith', [850, 400, 350, 200], 'Yo soy tu padre');

export let superman = new DC('Clark Kent', [90, 1.9], 'heroe', [1000, 1000, 1000, 100], 'Kriptonita');
let joker = new DC('Joker', [70, 1.8], 'villano', [200, 150, 150, 100], 'JAJAJAJAJA');

export let pokedexCompl = new Pokedex([pkmn1, goku, freezer, spiderman, drOctopus, yoda, darthVader, superman, joker])

export let comb = new Combat(pkmn4, pkmn7);
export let comb2 = new Combat(goku, pkmn7);
export let comb3 = new Combat(pkmn4, freezer);
export let comb4 = new Combat(pkmn1, pkmn7);
export let comb5 = new Combat(pkmn1, pkmn4);
export let comb6 = new Combat(spiderman, drOctopus);
export let comb7 = new Combat(yoda, darthVader);
export let comb8 = new Combat(superman, joker);

comb.start();
comb2.start();
comb3.start();
comb4.start();
comb5.start();
comb6.start();
comb7.start();
comb8.start();


export let ipokedexCompl = new PrintPokedex(pokedexCompl);
ipokedexCompl.print();

//[HP, AT, DEF, SP]