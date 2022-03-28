/**
 * Tipo PrimeNumberItem
 */
type PrimeNumberItem = {
  num: number;
}
/**
 * Clase PrimeNumber
 */
export class PrimeNumber {
  private items: PrimeNumberItem[];
  private constructor() {
    this.items = [];
  }
  private static primeNumberInstance: PrimeNumber;

  public static getPrimeNumberInstance(): PrimeNumber {
    if (!PrimeNumber.primeNumberInstance) {
      PrimeNumber.primeNumberInstance = new PrimeNumber();
    }
    return PrimeNumber.primeNumberInstance;
  }
  /**
   * Método addItem(item)
   * @param item objeto a añadir
   */
  addItem(item: PrimeNumberItem) {
    PrimeNumber.primeNumberInstance.items.push(item);
  }
  /**
   * getPrimosN(n)
   * @param n número de iteraciones a comprobar el número primo
   */
  getPrimosN(n: number): void {
    let aux: number = 0;
    for(let j: number = 2; j <= n; j++){
      for (let i: number = 2; i < j; i++){
        if (j % i === 0){
          aux++;
        }
      }
      if (aux === 0){
      console.log(`${j} es primo`);  
      } 
      aux = 0; 
    }
  }
  /**
   * getPrimosA(n, m)
   * @param n rango donde empieza
   * @param m rango donde acaba
   */
  getPrimosA(n: number, m: number): void {
    let aux: number = 0;
      for (n; n <= m; n++){
        if( n === 0 || n === 1 || n === 4){
          //console.log(`${n} no es primo`);
        }
        for (let i: number = 2; i < n / 2; i++){
          if (n % i === 0){
            aux++;
          }
        } 
        if (aux === 0){
         console.log(`${n} es primo`);  
        }
        aux = 0;
      }
    }
}

export const primeNumberInstance = PrimeNumber.getPrimeNumberInstance();
primeNumberInstance.addItem({num: 2});

console.log(primeNumberInstance.getPrimosN(9));
console.log(primeNumberInstance.getPrimosA(5, 10));
