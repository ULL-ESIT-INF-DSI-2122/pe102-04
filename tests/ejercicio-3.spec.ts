import 'mocha';
import { expect } from 'chai';
import { Alfabeto } from '../src/ejercicio-3';
import { Cifrado } from '../src/ejercicio-3';
import { alfabetoE } from '../src/ejercicio-3';

describe('Ejercicio 3 test: ', () => {
  it('Clase Alfabeto', () => {
    expect(alfabetoE instanceof Alfabeto).to.eql(true);
    expect(alfabetoE.getAlfabeto()).to.eql('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');
    expect(alfabetoE.getElemento(0)).to.eql('A');
    expect(alfabetoE.getPosicion('A')).to.eql(0);
    expect(alfabetoE.getTam()).to.eql(27);
    alfabetoE.setAlfabeto('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    expect(alfabetoE.getTam()).to.eql(26);
  });

  it('Clase Cifrado', () => {
    let mensaje1: string = 'holae';
    let clave1: string = 'clave';
    let cifrar1: Cifrado = new Cifrado(alfabetoE, mensaje1, clave1);
    expect(cifrar1 instanceof Cifrado).to.eql(true);
    expect(cifrar1.codificacion()).not.to.eql(null);
    expect(cifrar1.decodificacion()).not.to.eql(null);
  });
});
