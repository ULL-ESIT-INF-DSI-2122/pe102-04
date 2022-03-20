import 'mocha';
import { expect } from 'chai';
import { add } from '../src/index';

describe('Test: ', () => {
  it('Index', () => {
    expect(add(1,2)).to.eql(3);
  });
}); 