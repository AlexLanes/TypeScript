class BinarySearch {
    lt = -1
    eq = -1
    gt = -1

    /** 
     * Realizar a busca num array, que já se encontra ordenado,
     * pelo `target`. 
     * 
     * Cria as propriedas lt(less than), eq(equal) e 
     * gt(greater than) indicando os indexes relativo ao `target`.
     * Caso alguma dessas propriedades seja -1, então não foi existe no `array`
     */
    constructor( array: Array<number>, target: number ){
        let low = 0,
            high = array.length - 1

        while( low <= high ){
            let middle = Math.floor( (low + high) / 2 )
            // found
            if( array[ middle ] == target ){ 
                this.lt = middle - 1
                this.eq = middle
                this.gt = middle + 1 < array.length ? middle + 1 : -1
                break
            }
            // partition
            if( array[ middle ] > target ){
                high = middle - 1
                this.gt = middle
            } else {
                low = middle + 1
                this.lt = middle
            }
        }
    }
}