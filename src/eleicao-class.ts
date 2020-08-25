export default class Eleicao {
    private totalEleitores: number;
    private validos: number;
    private brancos: number;
    private nulos: number;

    // Atribuindo os valores aos atributos
    constructor() {
        this.validos = 800;
        this.brancos = 150;
        this.nulos = 50;
        this.totalEleitores = 1000;
    }

    // Válidos
    percentualValidos(): void {
        const percentual = this.calculoPercentual(this.validos);

        this.mostrarMensagem(percentual, "válidos");
    }

    // Brancos
    percentualBrancos(): void {
        const percentual = this.calculoPercentual(this.brancos);

        this.mostrarMensagem(percentual, "brancos");
    }

    // Nulos
    percentualNulos(): void {
        const percentual = this.calculoPercentual(this.nulos);

        this.mostrarMensagem(percentual, "nulos");
    }

    // Cálculo percentual
    private calculoPercentual(valor: number): number {
        return valor / this.totalEleitores * 100;
    }

    // Mostrar mensagem
    private mostrarMensagem(percentual: number, tipoVoto: string) {
        console.log(`Esta eleição teve ${percentual}% de votos ${tipoVoto}`);
    }
}