/**
 * function BubbleSort
 * @param array of numbers to sort
 */
export class BubbleSort{
  constructor(private array: number[]) {}
    execute(){
    let aux: number[] = this.array; // creates a copy of the array

    for(let i = 0; i < aux.length; i++) {
        for(let j = 0; j < aux.length - 1; j++) {

            if(aux[j] > aux[j + 1]) {
                let swap = aux[j];
                aux[j] = aux[j + 1];
                aux[j + 1] = swap;
            }
        }
      }
      return aux;
    }
}
