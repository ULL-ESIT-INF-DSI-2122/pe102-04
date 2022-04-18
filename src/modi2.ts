/**
 * Clase abstracta EvolutionaryAlgorithm
 */
abstract class EvolutionaryAlgorithm {
    protected results: number[];
  
    constructor(
      protected values: number[]) {
        this.results = [];
    }

public run() {
  this.init();
  return this.results;
}
/**
 * Operations that must be implemented by subclasses
 */
protected abstract init(): void;

}

/**
 * Clase AddReduce
 */
export class AddReduce extends EvolutionaryAlgorithm {
  constructor(protected values: number[]) {
    super(values);
  }
  /**
   * Particular implementation of the results initialisation
   */
  protected init() {
    let total: number = 0;
    this.values.forEach(element => {
      total += element;
    });
    this.results.push(total);
    console.log(`AddReduce: ${this.results}`);
  }
}

/**
 * Clase SubReduce
 */
export class SubReduce extends EvolutionaryAlgorithm {
  constructor(protected values: number[]) {
    super(values);
  }
  /**
   * Particular implementation of the results initialisation
   */
  protected init() {
    let total: number = 0;
    this.values.forEach(element => {
      total -= element;
    });
    this.results.push(total);
    console.log(`SubReduce: ${this.results}`);
  }
}

/**
 * Clase SubReduce
 */
export class ProdReduce extends EvolutionaryAlgorithm {
  constructor(protected values: number[]) {
    super(values);
  }
  /**
   * Particular implementation of the results initialisation
   */
  protected init() {
    let total: number = 1;
    this.values.forEach(element => {
      total *= element;
    });
    this.results.push(total);
    console.log(`ProdReduce: ${this.results}`);
  }
}

/**
 * Clase DivReduce
 */
export class DivReduce extends EvolutionaryAlgorithm {
  constructor(protected values: number[]) {
    super(values);
  }
  /**
   * Particular implementation of the results initialisation
   */
  protected init() {
    let total: number = 1;
    this.values.forEach(element => {
      total /= element;
    });
    this.results.push(total);
    console.log(`DivReduce: ${this.results}`);
  }
}

/**
 * Client code
 */
export function clientCode(evolutionaryAlgorithm: EvolutionaryAlgorithm) {
  evolutionaryAlgorithm.run();
}
  
clientCode(new AddReduce([1, 2, 2]));
clientCode(new SubReduce([1, 2, 2]));
clientCode(new ProdReduce([1, 2, 2]));
clientCode(new DivReduce([1, 2, 2]));
    