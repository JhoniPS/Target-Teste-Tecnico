// Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// Para resolvar a questão da busca de dados irei usar o node JS.

const fs = require('fs');
const path = require('path');

// Aqui eu estou pegando o json com os dados
const filePath = path.join(__dirname, 'dados.json');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error("Erro ao ler o arquivo:", err);
        return;
    }

    const faturamento = JSON.parse(data);

    // Aqui estão sendo discatados dias com o faturamento igual a zero.
    const diasComFaturamento = faturamento.filter(item => item.valor > 0);

    
    const menorValor = Math.min(...diasComFaturamento.map(item => item.valor));
    const maiorValor = Math.max(...diasComFaturamento.map(item => item.valor));

    const somaFaturamento = diasComFaturamento.reduce((acc, item) => acc + item.valor, 0);
    const mediaMensal = somaFaturamento / diasComFaturamento.length;

    const diasAcimaDaMedia = diasComFaturamento.filter(item => item.valor > mediaMensal).length;

    console.log(`Menor valor de faturamento: ${menorValor}`);
    console.log(`Maior valor de faturamento: ${maiorValor}`);
    console.log(`Número de dias com faturamento acima da média mensal: ${diasAcimaDaMedia}`);
});
