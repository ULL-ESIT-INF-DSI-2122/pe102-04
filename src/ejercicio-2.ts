/**
 * Interfaz Streameable
 */
export interface Streameable<T> {
  /**
   * add()
   * @param item objeto a añadir
   */
  add(item: T): void;
  /**
   * getName()
   * @param nombre recibe el nombre del objeto
   */
  getName(nombre: string): T[];
  /**
   * getAge()
   * @param age recibe el año de publicación 
   */
  getAge(age: number): T[];
}
/**
 * Clase Abstracta BasicStreameableCollection
 */
export abstract class BasicStreameableCollection<T> implements Streameable<T>{
  constructor(protected items: T[]){}
  /**
   * add()
   * @param item añade un objeto
   */
  add(item: T){
    this.items.push(item);
  }
  /**
   * Método abstracto getName()
   * @param nombre recibe el nombre del objeto y devuelve el objeto
   */
  abstract getName(nombre: string): T[];
  /**
   * Método abstracto getAge()
   * @param age recive la fecha de publicacíon y devuelve el objeto
   */
  abstract getAge(age: number): T[]; 
  /**
   * Método abstracto getTipo()
   */
  abstract getTipo(): string;
}
/**
 * Clase Series
 */
export class Series {
  constructor(private nombre: string, private age: number, private caps: number){}
  /**
   * getName()
   * @returns el nombre de la serie
   */
  getName(){
    return this.nombre;
  }
  /**
   * getAge()
   * @returns fecha de la serie 
   */
  getAge(){
    return this.age;
  }
  /**
   * getCapitulos()
   * @returns numero de capitulos que tiene la serie
   */
  getCapitulos(){
    return this.caps;
  }
}
/**
 * Clase Peliculas
 */
export class Peliculas {
  constructor(private nombre: string, private age: number, private protagonista: string){}
  /**
   * getName()
   * @returns nombre de la pelicula
   */
  getName(){
    return this.nombre;
  }
  /**
   * getAge()
   * @returns fecha de estreno de la pelicula
   */
  getAge(){
    return this.age;
  }
  /**
   * getProtagonista()
   * @returns Protagonista de la pelicula
   */
  getProtagonista(){
    return this.protagonista;
  }
}
/**
 * Clase Documentales
 */
export class Documentales {
  constructor(private nombre: string, private age: number, private genero: string){}
  /**
   * getName()
   * @returns Nombre del documental
   */
  getName(){
    return this.nombre;
  }
  /**
   * getAge()
   * @returns fecha del documental
   */
  getAge(){
    return this.age;
  }
  /**
   * getGenero()
   * @returns el genero del documental
   */
  getGenero(){
    return this.genero;
  }
}
/**
 * Clase heredada CollectionSeries
 */
export class CollectionSeries extends BasicStreameableCollection<Series>{
  constructor(private series: Series[]){
    super(series);
  }
  /**
   * getName()
   * @param nombre recibe el nombre de la serie
   * @returns una lista con las series que tengan el mismo nombre
   */
  getName(nombre: string): Series[] {
    let auxN: Series[] = [];
    for (let i: number = 0; i < this.series.length; i++){
      if (this.series[i].getName() === nombre){
        auxN.push(this.series[i]);
      }
    }
    return auxN;
  }
  /**
   * getAge()
   * @param age fecha de salida de la serie
   * @returns lista con las series que se hayan realizado en esa fecha
   */
  getAge(age: number): Series[] {
    let auxA: Series[] = [];
    for (let i: number = 0; i < this.series.length; i++){
      if (this.series[i].getAge() === age){
        auxA.push(this.series[i]);
      }
    }
    return auxA;
  }
  /**
   * getTipo()
   * @returns que es una serie
   */
  getTipo(): string {
    return 'Serie';
  }
}
/**
 * Clase heredada CollectionPeliculas
 */
export class CollectionPeliculas extends BasicStreameableCollection<Peliculas>{
  constructor(private peliculas: Peliculas[]){
    super(peliculas);
  }
  /**
   * getName()
   * @param nombre nombre de la pelicula
   * @returns lista con las peliculas con ese nombre
   */
  getName(nombre: string): Peliculas[] {
    let auxN: Peliculas[] = [];
    for (let i: number = 0; i < this.peliculas.length; i++){
      if (this.peliculas[i].getName() === nombre){
        auxN.push(this.peliculas[i]);
      }
    }
    return auxN;
  }
  /**
   * getAge()
   * @param age año
   * @returns lista con las peliculas de ese año
   */
  getAge(age: number): Peliculas[] {
    let auxA: Peliculas[] = [];
    for (let i: number = 0; i < this.peliculas.length; i++){
      if (this.peliculas[i].getAge() === age){
        auxA.push(this.peliculas[i]);
      }
    }
    return auxA;
  }
  /**
   * getTipo()
   * @returns Pelicula
   */
  getTipo(): string {
    return 'Pelicula';
  }
}
/**
 * Clase heredada CollectionDocumentales
 */
export class CollectionDocumentales extends BasicStreameableCollection<Documentales>{
  constructor(private documentales: Documentales[]){
    super(documentales);
  }
  /**
   * getName()
   * @param nombre nombre del documental
   * @returns lista con el nombre del documental
   */
  getName(nombre: string): Documentales[] {
    let auxN: Documentales[] = [];
    for (let i: number = 0; i < this.documentales.length; i++){
      if (this.documentales[i].getName() === nombre){
        auxN.push(this.documentales[i]);
      }
    }
    return auxN;
  }
  /**
   * getAge()
   * @param age año
   * @returns lista con los documentales del año introducido
   */
  getAge(age: number): Documentales[] {
    let auxA: Documentales[] = [];
    for (let i: number = 0; i < this.documentales.length; i++){
      if (this.documentales[i].getAge() === age){
        auxA.push(this.documentales[i]);
      }
    }
    return auxA;
  }
  /**
   * getTipo()
   * @returns Documentales
   */
  getTipo(): string {
    return 'Documentales';
  }
}

export let serie1 = new Series('Pokemon', 1990, 1250);
let serie2 = new Series('Pokemon', 1992, 200);
let serie3 = new Series('Dragon Ball', 1990, 1300);

export let peli1 = new Peliculas('Batman', 1990, 'Robert Pattinson');
let peli2 = new Peliculas('Indiana Jones', 1992, 'Harrison Ford');
let peli3 = new Peliculas('Ali-G', 1990, 'Sacha Baron');

export let docu1 = new Documentales('Hard Fishing', 1990, 'pesca');
let docu2 = new Documentales('Extreme Hunting', 1992, 'caza');
let docu3 = new Documentales('Extreme Fishing', 1990, 'pesca');

export let serieCollection = new CollectionSeries([serie1, serie2, serie3]);
export let peliculasCollection = new CollectionPeliculas([peli1, peli2, peli3]);
export let documentalesCollection = new CollectionDocumentales([docu1, docu2, docu3]);

console.log(serieCollection.getAge(1990));
console.log(serieCollection.getName('Dragon Ball'));

console.log(peliculasCollection.getAge(1992));
console.log(peliculasCollection.getName('Batman'));

console.log(documentalesCollection.getName('Extreme Hunting'));
console.log(documentalesCollection.getAge(1992));
