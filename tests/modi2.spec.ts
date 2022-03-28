import 'mocha';
import { expect } from 'chai';
import { PrimeNumber } from '../src/modi2';
import { primeNumberInstance } from '../src/modi2';

describe('Modi2 test: ', () => {
  it('Clase PrimeNumber', () => {
    expect(primeNumberInstance instanceof PrimeNumber).to.eql(true);
    expect(primeNumberInstance.getPrimosN(4)).not.to.eql(null);
    expect(primeNumberInstance.getPrimosA(5,10)).not.to.eql(true);
  });
}); 