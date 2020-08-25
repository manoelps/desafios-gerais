export default () => {
    let v = [5, 3, 2, 4, 7, 1, 0, 6];

    function ordernar(numeros: number[]) {
        
        // Enquanto esta variável for true, o loop continua
        let flag: boolean;
        
        do {
            flag = false;

            // Percorrer pelo vetor
            for (let x = 0; x < numeros.length - 1; x++) {
                if (numeros[x] > numeros[x + 1]) {
                    const tempValue = numeros[x + 1];
                    numeros[x + 1] = numeros[x];
                    numeros[x] = tempValue;
                    flag = true;
                }
            }
        } while (flag);

        return numeros;
    }

    const newValores = ordernar(v);

    console.log(newValores);
}