import 'mocha';
import { expect } from 'chai';
import { Jugador1 } from '../src/ejercicio-2';
import { Jugador2 } from '../src/ejercicio-2';
import { Rejilla } from '../src/ejercicio-2';
import { Conecta4 } from '../src/ejercicio-2';

let player1 = new Jugador1();
let player2 = new Jugador2();
let tablero = new Rejilla();

describe('Ejercicio 2 test: ', () => {
  it('Clase Jugador1', () => {
    expect(new Jugador1()).to.eql({fichas: 21, fichatipo: 'R'});
  });
  it('Clase Jugador2', () => {
    expect(new Jugador2()).to.eql({fichas: 21, fichatipo: 'A'});
  });
  it('Clase Rejilla', () => {
    expect(new Rejilla()).to.eql({
      rejilla: [
        ['0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0'],
      ]  
    });
  });
  it('Clase Conecta4', () => {
    expect(new Conecta4(player1, player2, tablero)).to.eql({
      jugador1: { fichas: 21, fichatipo: 'R' },
      jugador2: { fichas: 21, fichatipo: 'A' },
      rejilla: {
        rejilla: [ 
          ['0', '0', '0', '0', '0', '0', '0'],
          ['0', '0', '0', '0', '0', '0', '0'],
          ['0', '0', '0', '0', '0', '0', '0'],
          ['0', '0', '0', '0', '0', '0', '0'],
          ['0', '0', '0', '0', '0', '0', '0'],
          ['0', '0', '0', '0', '0', '0', '0']
        ]
      } 
    });
  });
}); 
