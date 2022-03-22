import 'mocha';
import { expect } from 'chai';
import { Collectable } from '../src/modi';
import { Printable } from '../src/modi';
import { NumericPrintableCollection } from '../src/modi';
import { CollectionN } from '../src/modi';
import { myFigureCollectionN } from '../src/modi';
import { StringPrintableCollection } from '../src/modi';
import { myStringCollection } from '../src/modi';

describe('Modi test: ', () => {
  it('myFigureCollectionN', () => {
    expect(myFigureCollectionN instanceof NumericPrintableCollection).to.eql(true);
  });
  it('Interfaz Collectable', () => {
    expect(myStringCollection instanceof StringPrintableCollection).to.eql(true);
  });
}); 