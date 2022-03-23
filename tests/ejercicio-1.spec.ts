import 'mocha';
import { expect } from 'chai';
import { Pokemon } from '../src/ejercicio-1';
import { Marvel } from '../src/ejercicio-1';
import { DC } from '../src/ejercicio-1';
import { StarWars } from '../src/ejercicio-1';
import { DragonBall } from '../src/ejercicio-1';
import { Pokedex } from '../src/ejercicio-1';
import { Combat } from '../src/ejercicio-1';
import { PrintPokedex } from '../src/ejercicio-1';

import { pkmn1} from '../src/ejercicio-1';
import { goku} from '../src/ejercicio-1';
import { spiderman} from '../src/ejercicio-1';
import { yoda} from '../src/ejercicio-1';
import { superman} from '../src/ejercicio-1';
import { pokedexCompl} from '../src/ejercicio-1';
import { ipokedexCompl} from '../src/ejercicio-1';
import { comb} from '../src/ejercicio-1';
import { comb3} from '../src/ejercicio-1';
import { comb4} from '../src/ejercicio-1';
import { comb5} from '../src/ejercicio-1';
import { comb6} from '../src/ejercicio-1';
import { comb7} from '../src/ejercicio-1';
import { comb8} from '../src/ejercicio-1';



describe('Ejercicio 1 test: ', () => {
  it('Clase Pokémon', () => {
    expect(pkmn1 instanceof Pokemon).to.eql(true);
  });
  it('Clase Dragon Ball', () => {
    expect(goku instanceof DragonBall).to.eql(true);
  });
  it('Clase Marvel', () => {
    expect(spiderman instanceof Marvel).to.eql(true);
  });
  it('Clase DC', () => {
    expect(superman instanceof DC).to.eql(true);
  });
  it('Clase Star Wars', () => {
    expect(yoda instanceof StarWars).to.eql(true);
  });
  it('Clase Pokedex', () => {
    expect(pokedexCompl instanceof Pokedex).to.eql(true);
  });
  it('Clase Combat', () => {
    expect(comb instanceof Combat).to.eql(true);
  });
  it('Clase Print Pokedex', () => {
    expect(ipokedexCompl instanceof PrintPokedex).to.eql(true);
  });
  it('Objeto Goku ', () => {
    expect(goku.getNombre()).to.eql('Kakarot');
    expect(goku.getPesoAltura()).to.eql([80, 1.9]);
    expect(goku.getAltura()).to.eql(1.9);
    expect(goku.getPeso()).to.eql(80);
    expect(goku.getTipo()).to.eql('saiyan');
    expect(goku.getEstadisticas()).to.eql([1000, 500, 600, 500]);
    expect(goku.getHP()).to.eql(1000);
    expect(goku.getAT()).to.eql(500);
    expect(goku.getDEF()).to.eql(600);
    expect(goku.getVEL()).to.eql(500);
    expect(goku.getCatchingPhrase()).to.eql('¡Kamehamehaaa!');
    expect(goku.getter()).to.eql('Soy un Saiyan');
  });
  it('Objeto Pokemon ', () => {
    expect(pkmn1.getNombre()).to.eql('Bulbasur');
    expect(pkmn1.getPesoAltura()).to.eql( [6.9, 0.7]);
    expect(pkmn1.getAltura()).to.eql(0.7);
    expect(pkmn1.getPeso()).to.eql(6.9);
    expect(pkmn1.getTipo()).to.eql('planta');
    expect(pkmn1.getEstadisticas()).to.eql([45, 49, 49, 45]);
    expect(pkmn1.getHP()).to.eql(45);
    expect(pkmn1.getAT()).to.eql(49);
    expect(pkmn1.getDEF()).to.eql(49);
    expect(pkmn1.getVEL()).to.eql(45);
    expect(pkmn1.getCatchingPhrase()).to.eql('Bulbaaaa');
    expect(pkmn1.getter()).to.eql('Soy un Pokémon');
  });
  it('Objeto Spiderman ', () => {
    expect(spiderman.getNombre()).to.eql('Peter Parker');
    expect(spiderman.getPesoAltura()).to.eql( [60,1.7]);
    expect(spiderman.getAltura()).to.eql(1.7);
    expect(spiderman.getPeso()).to.eql(60);
    expect(spiderman.getTipo()).to.eql('heroe');
    expect(spiderman.getEstadisticas()).to.eql([-2.5, 200, 200, 300]);
    expect(spiderman.getHP()).to.eql(-2.5);
    expect(spiderman.getAT()).to.eql(200);
    expect(spiderman.getDEF()).to.eql(200);
    expect(spiderman.getVEL()).to.eql(300);
    expect(spiderman.getCatchingPhrase()).to.eql('Tu amigo y vecino spidey');
    expect(spiderman.getter()).to.eql('Soy un personaje de Marvel');
  });
  it('Objeto Yoda ', () => {
    expect(yoda.getNombre()).to.eql('Yoda');
    expect(yoda.getPesoAltura()).to.eql([40, 1]);
    expect(yoda.getAltura()).to.eql(1);
    expect(yoda.getPeso()).to.eql(40);
    expect(yoda.getTipo()).to.eql('yedi');
    expect(yoda.getEstadisticas()).to.eql([-3.333333333332588, 300, 300, 600]);
    expect(yoda.getHP()).to.eql(-3.333333333332588);
    expect(yoda.getAT()).to.eql(300);
    expect(yoda.getDEF()).to.eql(300);
    expect(yoda.getVEL()).to.eql(600);
    expect(yoda.getCatchingPhrase()).to.eql('Conmigo pelear tú no querer');
    expect(yoda.getter()).to.eql('Soy un personaje de Star Wars');
  });
  it('Objeto Superman ', () => {
    expect(superman.getNombre()).to.eql('Clark Kent');
    expect(superman.getPesoAltura()).to.eql( [90, 1.9]);
    expect(superman.getAltura()).to.eql(1.9);
    expect(superman.getPeso()).to.eql(90);
    expect(superman.getTipo()).to.eql('heroe');
    expect(superman.getEstadisticas()).to.eql([996.25, 1000, 1000, 100]);
    expect(superman.getHP()).to.eql(996.25);
    expect(superman.getAT()).to.eql(1000);
    expect(superman.getDEF()).to.eql(1000);
    expect(superman.getVEL()).to.eql(100);
    expect(superman.getCatchingPhrase()).to.eql('Kriptonita');
    expect(superman.getter()).to.eql('Soy un personaje de DC');
  });
  it('Objeto Pokedex ', () => {
    expect(pokedexCompl.getFighter(0).getNombre()).to.eql('Bulbasur');
    expect(pokedexCompl.getTotalFighters()).to.eql(9);
  });
  it('Objeto Combate ', () => {
    expect(comb3.calculoDeDano1().toFixed(2)).to.eql('0.01');
    expect(comb4.calculoDeDano1().toFixed(2)).to.eql('0.38');
    expect(comb5.calculoDeDano1().toFixed(2)).to.eql('0.57');
    expect(comb6.calculoDeDano1().toFixed(2)).to.eql('4.00');
    expect(comb7.calculoDeDano1().toFixed(2)).to.eql('2.57');
    expect(comb8.calculoDeDano1().toFixed(2)).to.eql('33.33');
  });
  it('Clase Fighter', ()=> {
    superman.setNombre('Superman');
    expect(superman.getNombre()).to.eql('Superman');
    superman.setPesoAltura([100, 2]);
    expect(superman.getPesoAltura()).to.eql([100,2]);
    superman.setPeso(85);
    expect(superman.getPeso()).to.eql(85);
    superman.setAltura(2.01);
    expect(superman.getAltura()).to.eql(2.01);
    superman.setTipo('villano');
    expect(superman.getTipo()).to.eql('villano');
    superman.setEstadisticas([100, 100, 100, 100])
    expect(superman.getEstadisticas()).to.eql([100, 100, 100, 100]);
    superman.setHP(50);
    expect(superman.getHP()).to.eql(50);
    superman.setAT(50);
    expect(superman.getAT()).to.eql(50);
    superman.setDEF(50);
    expect(superman.getDEF()).to.eql(50);
    superman.setVEL(50);
    expect(superman.getVEL()).to.eql(50);
    superman.setCatchingPhrase('Loiiss');
    expect(superman.getCatchingPhrase()).to.eql('Loiiss');
  });
}); 
