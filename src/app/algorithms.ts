
export function calculateSum(): number {
    let INDICE = 13, SOMA = 0, K = 0;
    while (K < INDICE) {
      K = K + 1;
      SOMA = SOMA + K;
    }
    console.log("Valor da SOMA:", SOMA);
    return SOMA;
  }
  
  export function checkFibonacci(num: number): string {
    let a = 0, b = 1, next = 0;
    while (next < num) {
      next = a + b;
      a = b;
      b = next;
    }
    return next === num || num === 0 ? 
      `${num} pertence à sequência de Fibonacci` : 
      `${num} não pertence à sequência de Fibonacci`;
  }
  
  interface Faturamento {
    dia: number;
    valor: number;
  }
  
  export function analyzeFaturamento(faturamento: Faturamento[]): void {
    const valoresValidos = faturamento
      .filter(dia => dia.valor > 0)
      .map(dia => dia.valor);
  
    const menorValor = Math.min(...valoresValidos);
    const maiorValor = Math.max(...valoresValidos);
  
    const mediaMensal = valoresValidos.reduce((acc, valor) => acc + valor, 0) / valoresValidos.length;
  
    const diasAcimaMedia = valoresValidos.filter(valor => valor > mediaMensal).length;
  
    console.log("Menor valor:", menorValor);
    console.log("Maior valor:", maiorValor);
    console.log("Dias acima da média:", diasAcimaMedia);
  }
  
  interface FaturamentoEstado {
    estado: string;
    valor: number;
  }
  
  export function calculatePercentages(estados: FaturamentoEstado[]): void {
    const total = estados.reduce((acc, estado) => acc + estado.valor, 0);
  
    estados.forEach(estado => {
      const percentual = (estado.valor / total) * 100;
      console.log(`${estado.estado}: ${percentual.toFixed(2)}%`);
    });
  }
  
  export function reverseString(input: string): string {
    let reversed = '';
    for (let i = input.length - 1; i >= 0; i--) {
      reversed += input[i];
    }
    console.log("String invertida:", reversed);
    return reversed;
  }
  