import 'mocha';
import { expect } from 'chai';
import { Persona } from '../src/modi';
import { Profesor } from '../src/modi';
import { Estudiante } from '../src/modi';
import { Asignaturas } from '../src/modi';

describe('modi test: ', () => {
  it('Clase Persona', () => {
    expect(new Persona('Hector', 'Abreu', 24071993, 'masculuno')).to.eql({
        nombre: 'Hector',
        apellidos: 'Abreu',
        fecha_nacim: 24071993,
        genero: 'masculuno'
    });
  });
  it('Clase Profesor', () => {
    expect(new Profesor('Francisco', 'Pérez', 1741980, 'masculuno', 'fperez@ull.edu.es', 4, 'lunes y viernes', ['DSI'])).to.eql({
        nombre: 'Francisco',
        apellidos: 'Pérez',
        fecha_nacim: 1741980,
        genero: 'masculuno',
        correo: 'fperez@ull.edu.es',
        curso: 4,
        tutorias: 'lunes y viernes',
        asign: [ 'DSI' ]
    });
  });
  it('Clase Estudiante', () => {
    expect(new Estudiante('Hector', 'Abreu', 24071993, 'masculuno', 'alu0101068855@ull.edu.es', 3, ['DSI', 'BDD', 'SSI'])).to.eql({
        nombre: 'Hector',
        apellidos: 'Abreu',
        fecha_nacim: 24071993,
        genero: 'masculuno',
        correo: 'alu0101068855@ull.edu.es',
        curso: 3,
        asign: [ 'DSI', 'BDD', 'SSI' ]
    });
  });/*
  it('Clase Asignatura', () => {
    expect(new Asignaturas(new Estudiante('Hector', 'Abreu', 24071993, 'masculuno', 'alu0101068855@ull.edu.es', 3, ['DSI', 'BDD', 'SSI']).to.eql({ 
        nombre: 'DSI', 
        curso: 3
    });
  });*/
}); 