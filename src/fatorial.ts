export default (numero: number) => {

    // Esta variável vai de 1 até o numero informado
    let fatorial = 1;
    
    // Fazer o loop para que o cálculo incremente fatorial
    for (let x = 1; x <= numero; x++) {
        fatorial *= x;
    }
    
    // Mostrar na tela o resultado
    console.log(`O fatorial de ${numero} é ${fatorial}`);
}