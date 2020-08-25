export default (numero: number) => {

    let resultado = 0;
    let multiplos: number[] = [];

    // Percorrer de 1 até o número informado
    for (let x = 1; x < numero; x++) {

        // O valor de x é múltiplo de 3 ou 5?
        if (x % 3 === 0 || x % 5 === 0) {
            multiplos.push(x);
            resultado += x;
        }
    }

    const mensagem = `Os múltiplos são ${multiplos.join(", ")} e o resultado da soma deles é ${resultado}`;

    console.log(mensagem);
}