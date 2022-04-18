import 'mocha';
import {expect} from 'chai';
import {clientCode, AddReduce, DivReduce, SubReduce, ProdReduce} from '../src/modi2'

describe('Tests', () => {
  it('AddReduce', () => {
    expect(new AddReduce([1, 2, 2]).run()).to.be.eql([5]);
  });
  it('SubReduce', () => {
    expect(new SubReduce([1, 2, 2]).run()).to.be.eql([-5]);
  });
  it('ProdReduce', () => {
    expect(new ProdReduce([1, 2, 2]).run()).to.be.eql([4]);
  });
  it('DivReduce', () => {
    expect(new DivReduce([1, 2, 2]).run()).to.be.eql([0.25]);
  });
});

/*
clientCode(new AddReduce([1, 2, 2]));
clientCode(new SubReduce([1, 2, 2]));
clientCode(new ProdReduce([1, 2, 2]));
clientCode(new DivReduce([1, 2, 2]));
*/