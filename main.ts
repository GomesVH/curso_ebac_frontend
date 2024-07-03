function multiplicacao(a: number, b: number): number {
    return a * b;
}

function saudacao(name: string): string {
    return "Olá, " + name;
}

const resultMultiplication = multiplicacao(5, 10);
console.log(`Resultado da multiplicação: ${resultMultiplication}`);

const funcsaudacao = saudacao("Maria");
console.log(funcsaudacao);