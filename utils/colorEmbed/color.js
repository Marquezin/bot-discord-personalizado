function color(color){
    let resultado;
    switch(color){
        case "vermelho":
            return resultado = "Red"
        break;

        case "branco":
            return resultado = "White"
        break;

        case "azul":
            return resultado = "Blue"
        break;

        case "verde":
            return resultado = "Green"
        break;

        case "amarelo":
            return resultado = "Yellow"
        break;

        case "roxo":
            return resultado = "Purple"
        break;

        case "preto":
            return resultado = "Black"
        break;

        default:
            resultado = "Random"
        break;
    }

return resultado;
}
module.exports = {color}