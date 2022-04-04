import {BubbleSort} from './bubblesort';
import {MergeSort} from './mergesort';
import {Solver} from './solver'
    
// Client code
const mySolver = new Solver([3, 1, 2], new BubbleSort([3, 1, 2]));
mySolver.logic();

mySolver.setStrategy(new MergeSort([3, 2, 1]));
mySolver.logic();
