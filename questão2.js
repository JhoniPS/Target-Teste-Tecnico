/**
 * Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 
 * valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem 
 * que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem 
 * avisando se o número informado pertence ou não a sequência.
 */

function pertenceFibonacci(numero) {
    let a = 0;
    let b = 1;

    if (numero === a || numero === b) {
        return `O número ${numero} pertence a sequencia de Fibonacci`;
    }

    let proximo = a + b;

    while (proximo <= numero) {
        if (proximo === numero) {
            return `O número ${numero} pertence a sequencia de Fibonacci`
        }

        a = b;
        b = proximo;

        proximo = a + b;
    }

    return `O número ${numero} não pertence a sequencia de Fibonacci`
}

numero = 21

console.log(pertenceFibonacci(numero));