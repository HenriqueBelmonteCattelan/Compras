let valorDaCompra = 90;
let numeroDeParcelas = 1;
let valorDaParcela = (valorDaCompra / numeroDeParcelas);
let valor = (valorDaCompra === 1 ? "real" : "reais");
let desconto = (valorDaCompra * 10/100);
let valorPagar = (valorDaCompra - desconto);

if (numeroDeParcelas > 1) {
    console.log(`Sua compra deu ${numeroDeParcelas}x de ${valorDaParcela} ${valor}`)
} else {
    console.log(`Sua compra deu ${valorPagar} ${valor}`)
}