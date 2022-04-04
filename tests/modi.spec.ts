import 'mocha';
import {expect} from 'chai';
import {add} from '../src/index';
import {BubbleSort} from '../src/bubblesort';
import {MergeSort} from '../src/mergesort';
import {Solver} from '../src/solver'

describe('add function tests', () => {
  it('add(1, 8) returns value 9', () => {
    expect(add(1, 8)).to.be.equal(9);
  });

  it('add(-1, 8) returns value 7', () => {
    expect(add(-1, 8)).to.be.equal(7);
  });

  it('add(1.2, 3.5) returns value 4.7', () => {
    expect(add(1.2, 3.5)).to.be.equal(4.7);
  });
});

let test1: BubbleSort = new BubbleSort([4,3,2,1]);
let test2: MergeSort = new MergeSort([4,2,1,3]);
let test3: BubbleSort = new BubbleSort([9,6,3,2,5]);
let test4: MergeSort = new MergeSort([5,3,6,1,2]);

describe('modi tests', () => {
  it('BubbleSort Tests', () => {
    expect(test1 instanceof BubbleSort).to.be.equal(true);
    expect(test1.execute()).to.eql([1,2,3,4]);
    expect(test3.execute()).to.eql([2,3,5,6,9]);
  });

  it('Mergesort Tests', () => {
    expect(test2 instanceof MergeSort).to.be.equal(true);
    expect(test2.execute()).to.eql([1,2,3,4]);
    expect(test4.execute()).to.eql([1,2,3,5,6]);
  });
});