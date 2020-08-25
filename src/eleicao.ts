import Eleicao from "./eleicao-class";

export default () => {
    const eleicao = new Eleicao(800, 150, 50);
    
    eleicao.percentualValidos();
    eleicao.percentualBrancos();
    eleicao.percentualNulos();
}