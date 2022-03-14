/**
 * Class Persona contiene nombre, apellidos, fecha de nacimieno, genero como variables privadas con sus getter y setters
 */
export class Persona {
  private nombre: string;
  private apellidos: string;
  private fecha_nacim: number;
  private genero:string;
  constructor(nombre: string, apellidos: string, fecha_nacim: number, genero: string) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fecha_nacim = fecha_nacim;
    this.genero = genero;
  }
  getNombre() {
    return this.nombre;
  }
  getApellidos() {
    return this.nombre;
  }
  getFechaNacim() {
    return this.nombre;
  }
  getGenero() {
    return this.nombre;
  }
  setNombre(nombre:string) {
    this.nombre = nombre;
  }
  setApellidos(apellidos: string) {
    this.apellidos = apellidos;
  }
  setFechaNacim(fecha_nacim: number) {
    this.fecha_nacim = fecha_nacim;
  }
  setGenero(genero: string) {
    this.genero = genero;
  }
}
/**
 * Clase Estudiante heredada de Persona y contiene + correo, curso y asignaturas que tiene en array
 */
export class Estudiante extends Persona {
  public correo: string;
  public curso: number;
  public asign: string[];
  constructor(nombre: string, apellidos: string, fecha_nacim: number, genero: string, correo: string, curso: number, asign: string[]) {
    super(nombre, apellidos, fecha_nacim, genero);
    this.correo = correo;
    this.curso = curso;
    this.asign = asign;
  }
}
/**
 * Clase Profesor heredada de Persona y contiene + correo, curso, dias de las tutorias y asignaturas que imparte
 */
export class Profesor extends Persona {
  public correo: string;
  public curso: number;
  public tutorias: string;
  public asign: string[];
  constructor(nombre: string, apellidos: string, fecha_nacim: number, genero: string, correo: string, curso: number, tutorias: string, asign: string[]) {
    super(nombre, apellidos, fecha_nacim, genero);
    this.correo = correo;
    this.curso = curso;
    this.tutorias = tutorias;
    this.asign = asign;
  }
}
/**
 * Clase Asignaturas contiene el nombre de la asignaura y el curso de la misma
 */
export class Asignaturas {
  public nombre: string[];
  public curso: number;
  constructor(persona: Profesor | Estudiante){
    this.nombre = persona.asign;
    this.curso = persona.curso;
  }
}

let persona1 = new Persona('Hector', 'Abreu', 24071993, 'masculuno');
//console.log(persona1);
//persona1.setApellidos('Abreu Acosta')
// console.log(persona1);

let alumno = new Estudiante('Hector', 'Abreu', 24071993, 'masculuno', 'alu0101068855@ull.edu.es', 3, ['DSI', 'BDD', 'SSI']);
//console.log(alumno);
//alumno.correo = 'alu00000000@ull.edu.es';
//console.log(alumno);

let profesor = new Profesor('Francisco', 'Pérez', 1741980, 'masculuno', 'fperez@ull.edu.es', 4, 'lunes y viernes', ['DSI']);
//console.log(profesor);
//profesor.tutorias = 'jueves y viernes';
//console.log(profesor);

let asignatura = new Asignaturas(profesor);
//console.log(asignatura)
let asignaturas = [profesor];

asignaturas.forEach((persona) => {
  console.log(`Soy ${persona.getNombre()}, estoy en el curso ${persona.curso}` + ` y mi correo es ${persona.correo}`);
});
