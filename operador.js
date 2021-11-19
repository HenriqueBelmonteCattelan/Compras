const valorDaCompra = 100;
const numeroDeParcelas = 12;
const valorDaParcela = (valorDaCompra / numeroDeParcelas);
const valor = (valorDaCompra === 1 ? "real" : "reais");
const desconto = (valorDaCompra * 10/100);
const valorPagar = (valorDaCompra - desconto);
const valorAPagarComJuros = (valorDaCompra * [1 + 1/100] ** numeroDeParcelas).toFixed(2);
const valorDaParcela2 = (valorAPagarComJuros / numeroDeParcelas).toFixed(2);

if (numeroDeParcelas === 1) {
    console.log(`Sua compra deu ${valorPagar} ${valor}.`)
} else if (numeroDeParcelas >=2 && numeroDeParcelas <=7) {
    console.log(`Sua compra deu ${numeroDeParcelas}x de ${valorDaParcela} ${valor} sem juros.`)
} else if (numeroDeParcelas >=7 && numeroDeParcelas <=12) {
    console.log(`Sua compra deu ${numeroDeParcelas}x de ${valorDaParcela2} ${valor} com juros de 1% ao mês`)
} else {
    console.log("Você excedeu o limite de 12 parcelas")
}