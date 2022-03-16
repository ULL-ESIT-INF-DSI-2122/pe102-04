import 'mocha';
import { expect } from 'chai';
import { Pokémon } from '../src/ejercicio-1';
import { Pokédex } from '../src/ejercicio-1';
import { Combat } from '../src/ejercicio-1';

let pkmn1 = new Pokémon('Bulbasur', [0.7, 6.9], 'planta', [45, 49, 49, 45]);
let pkmn4 = new Pokémon('Charmander', [0.6, 8.5], 'fuego', [39, 52, 43, 65]);
let pkmn7 = new Pokémon('Squirtle', [0.5, 9], 'fuego', [44, 48, 65, 43]);

describe('Ejercicio 1 test: ', () => {
  it('Clase Pokémon', () => {
    expect(new Pokémon('Bulbasur', [0.7, 6.9], 'planta', [45, 49, 49, 45])).to.eql({
      nombre: 'Bulbasur',
      peso_altura: [ 0.7, 6.9 ],
      tipo: 'planta',
      estadisticas: [ 45, 49, 49, 45 ]
    });
  });
  it('Clase Pokédex', () => {
    expect(new Pokédex([pkmn1, pkmn4, pkmn7])).to.eql({
      pokemon: [pkmn1, pkmn4, pkmn7] 
    });
  });
  it('Clase Combat', () => {
    expect(new Combat(pkmn4, pkmn1)).to.eql({
      pokemon1: pkmn4,
      pokemon2: pkmn1  
    });
  });
}); 
