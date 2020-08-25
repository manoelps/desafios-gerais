import Eleicao from "./eleicao-class";

export default () => {
    const eleicao = new Eleicao();
    
    eleicao.percentualValidos();
    eleicao.percentualBrancos();
    eleicao.percentualNulos();
}