import Eleicao from "./eleicao-class";

export default (validos: number, brancos: number, nulos: number) => {
    const eleicao = new Eleicao(validos, brancos, nulos);
    
    eleicao.percentualValidos();
    eleicao.percentualBrancos();
    eleicao.percentualNulos();
}