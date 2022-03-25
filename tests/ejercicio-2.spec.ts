import 'mocha';
import { expect } from 'chai';
import { Streameable } from '../src/ejercicio-2';
import { BasicStreameableCollection } from '../src/ejercicio-2';
import { Series } from '../src/ejercicio-2';
import { Peliculas } from '../src/ejercicio-2';
import { Documentales } from '../src/ejercicio-2';
import { CollectionSeries } from '../src/ejercicio-2';
import { CollectionPeliculas} from '../src/ejercicio-2';
import { CollectionDocumentales } from '../src/ejercicio-2';
import { serie1 } from '../src/ejercicio-2';
import { peli1 } from '../src/ejercicio-2';
import { docu1 } from '../src/ejercicio-2';
import { serieCollection } from '../src/ejercicio-2';
import { peliculasCollection } from '../src/ejercicio-2';
import { documentalesCollection } from '../src/ejercicio-2';

describe('Ejercicio 2 test: ', () => {
  it('Clase Serie', () => {
    expect(serie1 instanceof Series).to.eql(true);
    expect(serie1.getName()).to.eql('Pokemon');
    expect(serie1.getAge()).to.eql(1990);
    expect(serie1.getCapitulos()).to.eql(1250);

  });
  it('Clase Peliculas', () => {
    expect(peli1 instanceof Peliculas).to.eql(true);
    expect(peli1.getName()).to.eql('Batman');
    expect(peli1.getAge()).to.eql(1990);
    expect(peli1.getProtagonista()).to.eql('Robert Pattinson');
  });
  it('Clase Documentales', () => {
    expect(docu1 instanceof Documentales).to.eql(true);
    expect(docu1.getName()).to.eql('Hard Fishing');
    expect(docu1.getAge()).to.eql(1990);
    expect(docu1.getGenero()).to.eql('pesca');
  });
  it('Clase CollectionSeries', () => {
    expect(serieCollection instanceof CollectionSeries).to.eql(true);
    expect(serieCollection.getTipo()).to.eql('Serie');
  });
  it('Clase CollectionPeliculas', () => {
    expect(peliculasCollection instanceof CollectionPeliculas).to.eql(true);
    expect(peliculasCollection.getTipo()).to.eql('Pelicula');
  });
  it('Clase CollectionDocumentales', () => {
    expect(documentalesCollection instanceof CollectionDocumentales).to.eql(true);
    expect(documentalesCollection.getTipo()).to.eql('Documentales');
    documentalesCollection.add(new Documentales('Pescando', 1890, 'pesca'));
    expect(documentalesCollection.getName('Pescando'));
  });
});
