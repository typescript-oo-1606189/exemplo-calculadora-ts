export enum TipoOperacao {
  SOMAR = '+',
  SUBTRAIR = '-',
  MULTIPLICAR = '*',
  DIVIDIR = '/'
}

export function calcular(num1: number, op: TipoOperacao, num2: number) {
  if (op === TipoOperacao.SOMAR) {
    return num1 + num2;
  }

  if (op === TipoOperacao.SUBTRAIR) {
    return num1 - num2;
  }

  if (op === TipoOperacao.MULTIPLICAR) {
    return num1 * num2;
  }

  if (op === TipoOperacao.DIVIDIR) {
    return num1 / num2;
  }
}